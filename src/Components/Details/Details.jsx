import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredCartList, addToStoredWishList } from '../../utility/addToDb';

const Details = () => {
    const { product_id } = useParams()
    const id = parseInt(product_id)
    const data = useLoaderData();
    const product = data.find(product => product.product_id === id)

    const { product_id: productId, product_title, product_image, category, price, description, specification, availability, rating, } = product;
    
    const handleAddToCart=(id)=>{

        addToStoredCartList(id);
    }
    const handleAddToWishlist=(id)=>{

        addToStoredWishList(id);
    }

    return (
        <div>
            <div className='bg-[#9538E2] mx-auto text-white rounded-b-2xl'>
                <h1 className='text-5xl font-bold max-w-6xl text-center mx-auto py-5'>Product Details</h1>
                <p className='max-w-3xl text-center mx-auto pb-60'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='relative -mb-52 -top-52 p-4 mx-auto border-2 rounded-3xl max-w-[880px]'>
                {/* hero */}
                <div className="hero bg-base-200 min-h-[500px]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={product_image}
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='space-y-2'>
                            <h1 className="text-3xl font-bold">{product_title}</h1>
                            <p className="font-bold">
                                Price :${price}
                            </p>
                            <button className="btn rounded-3xl btn-primary">in Stoke</button>
                            <p>{description}</p>
                            <p className='font-bold'>
                                Specification:
                               <div className='space-y-3 '>
                               {
                                    specification.map(specific=><button className="btn text-start btn-xs">{specific}</button>)
                                }
                               </div>
                            </p>
                            <p className='font-bold'>
                                Rating :{rating}
                            </p>
                            <button onClick={()=>handleAddToCart(productId)} className="btn btn-outline btn-accent mr-2">Add To Cart</button>
                            <button onClick={()=>handleAddToWishlist(productId)} className="btn btn-accent">Add To Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
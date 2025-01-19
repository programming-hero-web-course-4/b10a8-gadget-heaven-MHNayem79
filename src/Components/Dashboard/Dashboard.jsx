import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDb';
import Product from '../Product/Product';
import purchaseImg from "../../assets/Group.png"

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const allProducts = useLoaderData();
    const navigate = useNavigate();
    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedWishList = getStoredWishList();

        if(storedCartList&&storedCartList.length>0){
            const cartProductList = allProducts.filter(product => storedCartList.includes(product.product_id));
            setCartList(cartProductList)
        }
        if(storedWishList&&storedWishList.length>0){
            const wishProductList = allProducts.filter(product => storedWishList.includes(product.product_id));
            setWishList(wishProductList)
        }
        
    }, [allProducts])

    const handleSort = sortType => {
        setSort(sortType)

        const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
        setCartList(sortedCartList);
    }

    const handlePurchase = () => {
        setCartList([]);
        localStorage.removeItem('cartList');
    };

    const handleClose=()=>{
        navigate('/');
    }

    const totalCost =cartList.reduce((acc,product)=>acc+product.price,0);

    return (
        <div>
            <div className='bg-[#9538E2] mx-auto text-white rounded-b-2xl'>
                <h1 className='text-5xl font-bold max-w-6xl text-center mx-auto py-5'>Dashboard</h1>
                <p className='max-w-3xl text-center mx-auto pb-20'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <Tabs>
                <div className='text-center mx-auto'>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>Wishlist</Tab>
                    </TabList>
                </div>

                <div className='max-w-screen-xl mx-auto'>
                    <TabPanel>
                        <div className='flex justify-between'>
                            <div>
                                <h2 className='text-xl font-bold'>Cart</h2>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-6 font-bold text-lg'>Total Cost :- ${totalCost.toFixed(2)} </p>
                                <button onClick={() => handleSort()} className="btn btn-outline btn-accent mr-2">Sort By Price</button>

                                {/* The button to open modal */}
                                <a href="#my_modal_8" onClick={handlePurchase} className="btn btn-accent">Purchase</a>

                                {/* Put this part before </body> tag */}
                                <div className="modal" role="dialog" id="my_modal_8">
                                    <div className="modal-box">
                                        <img className='text-center mx-auto mb-5' src={purchaseImg} alt="" />
                                        <h3 className="text-lg font-bold text-center">Payment Successfully</h3>
                                        <p className="py-4 text-center">Thanks for purchasing.</p>
                                        <div className="modal-action">
                                            <a href="#" onClick={handleClose} className="btn w-full">Close</a>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-5  my-5'>
                            {
                                cartList.map(product => <Product product={product} key={product.product_id}></Product>)
                            }
                        </div>
                    </TabPanel>
                </div>
                <div className='max-w-screen-xl mx-auto'>
                    <TabPanel>
                        <h2 className='text-xl font-bold'>Wishlist</h2>
                        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-5  my-5'>
                            {
                                wishList.map(product => <Product product={product} key={product.product_id}></Product>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Dashboard;
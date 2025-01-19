import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_id, product_title, product_image, category, price, description, specification, availability, rating, } = product;
    return (
        <div className="card bg-base-100 w-80 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-xl">{product_title}</h2>
                <p className='font-bold'>Price :${price}</p>
                <div className="card-actions">
                    <Link to={`/products/${product_id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
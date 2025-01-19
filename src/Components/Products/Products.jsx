import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Products');

    useEffect(() => {
        fetch('/allItem.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        if (category === 'All Products') {
            setFilteredProducts(products); // Show all products for "All Products"
        } else {
            // Filter products based on category
            const filtered = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mx-auto my-10'>Explore Cutting-Edge Gadgets</h2>
            <div className='max-w-[1280px] mx-auto md:flex gap-5'>
                {/* Category Filter Buttons */}
                <div className="card bg-base-100 w-60 h-[500px] shadow-xl">
                    <div className="card-body items-center text-center">
                        <div className="space-y-5">
                            {['All Products', 'Laptop', 'Smartphone', 'Accessories','Smart Watches'].map((category) => (
                                <button
                                    key={category}
                                    className={`btn btn-block rounded-3xl ${
                                        selectedCategory === category
                                            ? 'bg-[#9538E2] text-white'
                                            : 'bg-gray-300 text-black'
                                    }`}
                                    onClick={() => handleCategoryFilter(category)}
                                    aria-label={`Filter by ${category}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product List */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 max-w-[1016px]'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <Product product={product} key={product.product_id} />
                        ))
                    ) : (
                        <p className='text-center text-5xl col-span-full'>No products available in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;

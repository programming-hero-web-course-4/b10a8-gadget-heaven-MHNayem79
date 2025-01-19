import React from 'react';
import bannerimg from "../../assets/banner.jpg"
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='bg-[#9538E2] mx-auto text-white rounded-b-2xl'>
                <h1 className='text-5xl font-bold max-w-6xl text-center mx-auto py-5'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='max-w-3xl text-center mx-auto pb-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='text-center mx-auto'>
                    <button className='bg-white font-bold text-xl text-[#9538E2] py-4 px-7 my-5 rounded-3xl mb-64'><NavLink to={'/dashboard'}>Shop Now</NavLink></button>
                </div>
            </div>
            <div className='relative -mb-52 -top-52 p-4 mx-auto border-2 rounded-3xl max-w-[880px]'>
                <img className='w-[1062px] max-h-[563px] sm:h-full rounded-3xl mx-auto' src={bannerimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';

const Footer = () => {
    return (

        <footer className='bg-gray-100 py-24 max-w-screen-xl mx-auto'>

            <div>
                <h2 className='text-center mx-auto font-bold text-3xl mb-3'>Gadget Heaven</h2>
                <p className='text-center mx-auto'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='border-t-2 mt-7'></div>

            <div className="footer flex justify-evenly text-center text-black-content p-10">
                <nav>
                    <h6 className="text-lg font-bold text-black">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-black">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-black">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
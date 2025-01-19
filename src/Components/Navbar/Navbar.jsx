import React, { useEffect } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();

    useEffect(() => {
        const pageTitles = {
            '/': 'Home - Gadget Heaven',
            '/statistics': 'Statistics - Gadget Heaven',
            '/dashboard': 'Dashboard - Gadget Heaven',
            '/store': 'Store Locator - Gadget Heaven',
        };

        document.title = pageTitles[location.pathname] || 'Gadget Heaven';
    }, [location]);

    const navbarStyle = {
        backgroundColor: 
            location.pathname === '/statistics' || 
            location.pathname === '/dashboard' || 
            location.pathname === '/store'
                ? 'white'
                : '',
    
        color: 
            location.pathname === '/statistics' || 
            location.pathname === '/dashboard' || 
            location.pathname === '/store'
                ? 'black'
                : '',
    };


    const links = <NavLink>
        <ul className='md:flex bg-gray-400 md:bg-[#9538E2]'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
            <li><NavLink to={'/store'}>Store Locator</NavLink></li>
        </ul>
    </NavLink>

    return (
        <div style={navbarStyle} className='bg-[#9538E2] mx-auto text-white rounded-t-2xl'>
            <div className="navbar   max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost text-xl" to={'/'}>Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <NavLink to="/dashboard"><TiShoppingCart className='text-3xl p-2 mr-2 text-black bg-white rounded-full' /></NavLink>
                    <NavLink to="/dashboard"><FaRegHeart className='text-3xl p-2  text-black bg-white rounded-full' /></NavLink>

                </div>

            </div>
        </div>
    );
};

export default Navbar;
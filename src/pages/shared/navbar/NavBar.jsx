/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../activelink/ActiveLink';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-base-300 mx-auto container mb-10 py-5 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li><ActiveLink to = '/'>Home</ActiveLink></li>
                            <li tabIndex={0}>
                                <ActiveLink to = '/blog'>Blog </ActiveLink>
                            </li>
                            <li><ActiveLink to='/about'>About</ActiveLink></li>
                        </ul>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 inline-block text-transparent bg-clip-text">Healthy Foods</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl gap-4">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li tabIndex={0}>
                            <ActiveLink className='ml-4 mr-4' to='/blog'> Blog </ActiveLink>
                        </li>
                        <li><ActiveLink to='/about'>About</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-warning bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
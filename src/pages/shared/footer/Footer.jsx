/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='rounded-lg bg-stone-800 lg:container mx-auto w-full'>
            <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-16 mt-8 leading-loose tracking-widest'>
                <div>
                    <h2 className='text-3xl font-bold mb-5'>Bangla Food</h2>
                    <p className='text-xl'>There are many variations of passages of lorem ipsum available, but the majority suffered.</p>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-5 pl-2'>Links</h2>
                    <div className='text-xl'>
                        <p><Link><FaAngleRight className='inline'></FaAngleRight>Services</Link></p>
                        <p className='mt-3 mb-3'><Link><FaAngleRight className='inline'></FaAngleRight>Portfolio</Link></p>
                        <p><Link><FaAngleRight className='inline'></FaAngleRight>Recipes</Link></p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-5'>Support</h2>
                    <div className='text-xl'>
                        <p className='mb-3'><Link to='/'><FaAngleRight className='inline'></FaAngleRight>Home</Link></p>
                        <p className='mb-3'><Link><FaAngleRight className='inline'></FaAngleRight>About</Link></p>
                        <p className='mb-3'><Link> <FaAngleRight className='inline'></FaAngleRight>Services</Link></p>
                        <p className='mb-3'><Link to='/blog'><FaAngleRight className='inline'></FaAngleRight>Blog</Link></p>
                        <p className='mb-3'><Link><FaAngleRight className='inline'></FaAngleRight> Contact</Link></p>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-5'>Contact Us</h2>
                    <div className='text-xl'>
                        <p>Phone:+8801737033244</p>
                        <p className='mt-3 mb-3'>Email:mdsaadsheikh7096@gmail.com</p>
                        <p>Programming-hero.com</p>
                        <p className='mt-3 mb-3'>Address: Natore-Sadar, Natore, Rajshahi, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='text-2xl font-bold py-4 bg-slate-600 text-white leading-loose tracking-widest container mx-auto'>
                <h2 className='flex justify-center items-center gap-2'><FaRegCopyright></FaRegCopyright>Copyright 2023 by Md:Saad Sheikh</h2>
            </div>
        </div>
    );
};

export default Footer;
/* eslint-disable no-unused-vars */
import React from 'react';
import food1 from '../../../assets/images/food4.jpg';
import food2 from '../../../assets/images/food2.jpg';
import food3 from '../../../assets/images/food3.jpg';
import food4 from '../../../assets/images/food5.jpg';


const FoodFestival = () => {
    return (
        <>
            <h1 className='mt-8 text-4xl font-bold text-center'>Food Festival Slider</h1>
            <div className='container mx-auto mt-8'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative bg-gray-500 rounded-lg bg-blend-multiply w-full" style={{ backgroundImage: `url(${food1})`, backgroundSize: 'cover' }}>
                        <div className= 'text-white mx-10 rounded-lg absolute top-0 lg:top-80 left-0 right-0 text-center lg:p-7'>
                            <h2 className='text-3xl lg:text-7xl mb-6 font-bold mt-8'>healthy food for healthy life!</h2>
                            <p className='text-xl lg:font-bold lg:text-3xl lh-lg'>There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected.There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected.</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative bg-gray-400 rounded-lg bg-blend-multiply w-full" style={{ backgroundImage: `url(${food2})`, backgroundSize: 'cover' }}>
                        <div className='absolute top-0 lg:top-80 left-0 right-0 text-center lg:p-7 text-white'>
                            <h2 className='text-3xl lg:text-7xl mb-6 font-bold mt-8'>healthy food for healthy life!</h2>
                            <p className='text-xl lg:font-bold lg:text-3xl lh-lg'>There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected.There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected.</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative bg-gray-800 rounded-lg bg-blend-multiply w-full" style={{ backgroundImage: `url(${food3})`, backgroundSize: 'cover' }}>
                        <img src={food3} className="w-full rounded-lg opacity-50" />
                        <div className='absolute text-white top-0 lg:top-80 left-0 right-0 text-center lg:p-7'>
                            <h2 className='text-3xl lg:text-7xl mb-6 font-bold mt-8'>healthy food for healthy life!</h2>
                            <p className='text-xl lg:font-bold lg:text-3xl lh-lg'>There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected.There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected.</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative bg-gray-500 rounded-lg bg-blend-multiply  w-full" style={{ backgroundImage: `url(${food4})`, backgroundSize: 'cover' }} >
                        <div className='absolute top-0 lg:top-80 left-0 right-0 text-center lg:p-7 text-white'>
                            <h2 className='text-3xl lg:text-7xl mb-6 font-bold mt-8'>healthy food for healthy life!</h2>
                            <p className='text-xl lg:font-bold lg:text-3xl lh-lg'>There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected.There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected.</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
           </div>
        </>
    );
};

export default FoodFestival;
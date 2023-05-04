/* eslint-disable no-unused-vars */
import React from 'react';
import patishapta from '../../../assets/images/patishapta.jpg';
import telpoa from '../../../assets/images/telpoa pitha.jpg';
import golap from '../../../assets/images/golap pitha.jpg';
import nokshi from '../../../assets/images/nokshi pitha.jpg';

const PithaInfo = () => {
    return (
        <>
            <h1 className='text-center font-bold text-4xl mt-10'>Deshi Pitha</h1>
            <div className='container mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 h-full mx-auto'>
                <div className="card w-ful h-full bg-base-100 shadow-xl">
                    <figure className="pt-10">
                        <img src={patishapta} alt="Shoes" className="rounded-xl h-96" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Patishapta Pitha</h2>
                        <p>Tel pitha also known as Guror Handesh in Bangladesh is a sweet and puffy deep-fried Pitha which also be eaten as a snack.It is a deep-fried molasses and rice flour cake. It is very popular at the time of the Eid.</p>
                    </div>
                </div>
                <div className="card w-full h-full bg-base-100 shadow-xl">
                    <figure className="pt-10">
                        <img src={telpoa} alt="Shoes" className="rounded-xl h-96" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Telpoa Pitha</h2>
                        <p>Tel pitha also known as Guror Handesh in Bangladesh is a sweet and puffy deep-fried Pitha which also be eaten as a snack.It is a deep-fried molasses and rice flour cake. It is very popular at the time of the Eid.</p>
                    </div>
                </div>
                <div className="card w-full h-full bg-base-100 shadow-xl">
                    <figure className="pt-10">
                        <img src={golap} alt="Shoes" className="rounded-xl h-96" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Golap pitha</h2>
                        <p>Pitha is a type of pitha made from rice flour. It is originally from Bangladesh. Various designs are made on the body of this pitha.</p>
                    </div>
                </div>
                <div className="card w-full h-full bg-base-100 shadow-xl">
                    <figure className="pt-10">
                        <img src={nokshi} alt="Shoes" className="rounded-xl h-96" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dhakaiya Nokshi Pitha</h2>
                        <p>Nakshi Pitha is a type of pitha made from rice flour. It is originally from Bangladesh. Various designs are made on the body of this pitha.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PithaInfo;
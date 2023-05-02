/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const SingleCard = ({ chef }) => {
    const { chef_name, image, experience, num_recipes, likes } = chef;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='object-cover w-full  rounded-lg' src={image} alt="Shoes" /></figure>
                <div className="card-body items-center text-xl">
                    <h2 className="card-title text-2xl font-bold">Name: {chef_name}</h2>
                    <p>Experience: {experience}</p>
                    <p>Num of Recipes: {num_recipes}</p>
                    <p>Likes: {likes} <FaThumbsUp className='inline ml-2'></FaThumbsUp> </p>
                    <div className="card-actions justify-center mt-4">
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
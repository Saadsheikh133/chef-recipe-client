/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCard = ({ chef }) => {
    const { id, chef_name, image, experience, num_recipes, likes } = chef;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='object-cover w-full  rounded-lg' src={image} alt="Shoes" /></figure>
                <div className="card-body items-center text-xl">
                    <h2 className="card-title text-2xl font-bold">Name: {chef_name}</h2>
                    <p>Experience: {experience}</p>
                    <p>Num of Recipes: {num_recipes}</p>
                    <p>Likes: {likes} <FaThumbsUp className='inline ml-2 text-blue-400'></FaThumbsUp> </p>
                    <div className="card-actions justify-center mt-4">
                        <Link to={`/recipe/${id}`}><button className="btn btn-primary bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 border-none">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
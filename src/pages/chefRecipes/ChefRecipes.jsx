/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../singleRecipe/SingleRecipe';

const ChefRecipes = () => {
    const chefInfo = useLoaderData();
    const { image, chef_name, description, likes, num_recipes, experience, recipes } = chefInfo;
    return (
        <div className='container mx-auto'>
            <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-5 rounded-lg text-white'>
                <div className="card lg:w-1/2 mx-auto glass">
                    <figure><img className='h-full w-full' src={image} alt="Food img" /></figure>
                    <div className="card-body text-center items-center text-xl">
                        <h2 className="card-title text-5xl bg-clip-text mb-4 bg-gradient-to-r from-cyan-700 to-purple-500 text-transparent">{chef_name}</h2>
                        <p>Description: {description}</p>
                        <p>Experience: {experience}</p>
                        <p>Num_recipes: {num_recipes}</p>
                        <p>Likes: {likes} <FaThumbsUp className='inline ml-2 text-blue-600'></FaThumbsUp> </p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-8xl text-center  font-bold mt-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text mb-10'>All recipes here!</h1>
                <div className='mb-8 mt-8'>
                    {
                        recipes.map(recipe => <SingleRecipe
                            key={recipe.id}
                            recipe={recipe}
                        ></SingleRecipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;
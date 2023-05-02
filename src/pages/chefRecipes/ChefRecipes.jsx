/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from '../singleRecipe/SingleRecipe';

const ChefRecipes = () => {
    const chefInfo = useLoaderData();
    console.log(chefInfo)
    const { image, chef_name, description, likes, num_recipes, experience, recipes } = chefInfo;
    return (
        <div className='container mx-auto'>
            <div className="card w-1/2 mx-auto bg-base-100 shadow-xl image-full">
                <figure><img className='h-full w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body text-center items-center text-xl">
                    <h2 className="card-title text-3xl">{chef_name}</h2>
                    <p>Description: {description}</p>
                    <p>Experience: {experience}</p>
                    <p>Num_recipes: {num_recipes}</p>
                    <p>Likes: {likes} <FaThumbsUp className='inline ml-2 text-blue-600'></FaThumbsUp> </p>
                </div>
            </div>
            <div>
                <h1 className='text-5xl text-center font-bold mt-8'>All recipe here!</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
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
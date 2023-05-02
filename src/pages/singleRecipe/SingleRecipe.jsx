/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SingleRecipe = ({ recipe }) => {
    console.log(recipe)
    const { ingredients, instructions, name, rating } = recipe;
    return (
        <div>
            <div className="card w-full bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{ name }</h2>
                    <p>{ rating }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success">Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;
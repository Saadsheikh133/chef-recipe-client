/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleRecipe = ({ recipe }) => {
    const { ingredients, instructions, name, rating } = recipe;

    const handleClick = (event) => {
        event.currentTarget.disabled = true;
        toast('🦄 My favorite recipe added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    };

  

    return (
        <div>
            <div className="card w-full h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-primary-content mb-5">
                <div className="card-body">
                    <h2 className="card-title text-4xl justify-center">Recipe Name: {name}</h2>
                    <div className='lg:flex justify-around'>
                        <div>
                            <h2 className='text-2xl mb-3 mt-2'>Ingredients here...</h2>
                            <div className=''>
                                {
                                    ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                                }
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl mb-3 mt-2'>Instructions here...</h2>
                            {
                                instructions.map((instruction, index) => <li key={index}>{instruction}</li>)
                            }
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3 mx-auto'>
                        <Rating style={{ maxWidth: 180, width: '100%' }} readOnly value={rating} />
                        <p className='text-xl mt-4 mb-4'> {rating}</p>
                    </div>
                    <div className="card-actions justify-center w-1/2 mx-auto">
                        <button onClick={handleClick} className="btn btn-success w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">Favorite</button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;
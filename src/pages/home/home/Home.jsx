/* eslint-disable no-unused-vars */
import React from 'react';
import PithaInfo from '../pitha/PithaInfo';
import Banner from '../banner/Banner';
import FoodFestival from '../foodFestival/FoodFestival';
import ChefInfo from '../../chefInfo/ChefInfo';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefInfo></ChefInfo>
            <PithaInfo></PithaInfo>
            <FoodFestival></FoodFestival>
        </div>
    );
};

export default Home;
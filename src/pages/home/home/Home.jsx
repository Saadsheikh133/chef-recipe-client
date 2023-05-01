/* eslint-disable no-unused-vars */
import React from 'react';
import PithaInfo from '../pitha/PithaInfo';
import Banner from '../banner/Banner';
import FoodFestival from '../foodFestival/FoodFestival';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PithaInfo></PithaInfo>
            <FoodFestival></FoodFestival>
        </div>
    );
};

export default Home;
/* eslint-disable no-unused-vars */
import React from 'react';
import PithaInfo from '../pitha/PithaInfo';
import Banner from '../banner/Banner';
import FoodFestival from '../foodFestival/FoodFestival';
import ChefInfo from '../../chefInfo/ChefInfo';
import Contact from '../Contact/Contact';
import FoodCategory from '../FootCategory/FoodCategory';
import BestFood from '../../BestFood/BestFood';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefInfo></ChefInfo>
            <PithaInfo></PithaInfo>
            <FoodCategory></FoodCategory>
            <BestFood></BestFood>
            <FoodFestival></FoodFestival>
            <Contact></Contact>
        </div>
    );
};

export default Home;
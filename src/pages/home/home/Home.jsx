/* eslint-disable no-unused-vars */
import React from 'react';
import PithaInfo from '../pitha/PithaInfo';
import Banner from '../banner/Banner';
import FoodFestival from '../foodFestival/FoodFestival';
import ChefInfo from '../../chefInfo/ChefInfo';
import Contact from '../Contact/Contact';
import FoodCategory from '../FootCategory/FoodCategory';
import BestFood from '../../BestFood/BestFood';
import Subscribe from '../Subscribe/Subscribe';
import CustomerReview from '../CustomerReview/CustomerReview';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefInfo></ChefInfo>
            <PithaInfo></PithaInfo>
            <FoodCategory></FoodCategory>
            <BestFood></BestFood>
            <CustomerReview></CustomerReview>
            <FoodFestival></FoodFestival>
            <Subscribe></Subscribe>
            <Contact></Contact>
        </div>
    );
};

export default Home;
/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../pages/shared/navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';

const RecipeLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;
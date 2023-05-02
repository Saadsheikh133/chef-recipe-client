/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleCard from '../singleCard/SingleCard';

const ChefInfo = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => { 
        fetch('http://localhost:5000/chefInfo')
            .then(res => res.json())
        .then(data => setChefs(data))
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 container mx-auto'>
            {
                chefs.map(chef => <SingleCard
                    key={chef.id}
                    chef = {chef}
                ></SingleCard>)
            }
        </div>
    );
};

export default ChefInfo;
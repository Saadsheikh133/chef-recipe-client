/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleCard from '../singleCard/SingleCard';
import { useNavigation } from 'react-router-dom';
import { Audio, ColorRing } from 'react-loader-spinner'

const ChefInfo = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-saadsheikh133.vercel.app/chefInfo')
            .then(res => res.json())
            .then(data => {
                setChefs(data)
                setLoading(false);
            })
    }, [])

        

    
    return (
        <div>
            {
                loading &&
                < ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{margin:'auto'}
                }
                wrapperClass="blocks-wrapper"
                colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
            />
            }
        {/* <button type="button" className="bg-indigo-500 mx-auto block" disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                <FaSync></FaSync>
            </svg>
        </button> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 container mx-auto'>
            {
                chefs.map(chef => <SingleCard
                    key={chef.id}
                    chef={chef}
                ></SingleCard>)
            }
        </div>

    </div>
);
};

export default ChefInfo;
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FoodTab from "./FoodTab/FoodTab";


const FoodCategory = () => {
    const [foods, setFoods] = useState([]);
    const [tabIndex, setTabIndex] = useState('Bangladesh')


    const bangladesh = foods.filter(food => food.country === 'Bangladesh');
    const india = foods.filter(food => food.country === 'India');
    const japan = foods.filter(food => food.country === 'Japan');
    const thailand = foods.filter(food => food.country === 'Thailand');


    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    return (
        <div className="container mx-auto lg:px-2 my-16">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-2">Featured Listed Property</h2>
                <p className="text-xl">Real state can be bought, sold, leased, or rented and can be a <br /> valuable investment opportunity. The value of real state can be....</p>
            </div>
            <div className="lg:mx-10 mt-10 relative">
                <div>
                    <Tabs className='' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="lg:flex gap-2 space-y-2 lg:space-y-0">
                            <Tab className="bg-slate-300 mx-2 px-4 py-1 text-xl rounded-2xl cursor-pointer">Bangladesh</Tab>
                            <Tab className="bg-slate-300 mx-2 px-4 py-1 text-xl rounded-2xl cursor-pointer">India</Tab>
                            <Tab className="bg-slate-300 mx-2 px-4 py-1 text-xl rounded-2xl cursor-pointer">Japan</Tab>
                            <Tab className="bg-slate-300 mx-2 px-4 py-1 text-xl rounded-2xl cursor-pointer ">Thailand</Tab>
                        </TabList>

                        <TabPanel>
                            <FoodTab foods={bangladesh}></FoodTab>
                        </TabPanel>
                        <TabPanel>
                            <FoodTab foods ={india}></FoodTab>
                        </TabPanel>
                        <TabPanel>
                            <FoodTab foods ={japan}></FoodTab>
                        </TabPanel>
                        <TabPanel>
                            <FoodTab foods ={thailand}></FoodTab>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default FoodCategory;
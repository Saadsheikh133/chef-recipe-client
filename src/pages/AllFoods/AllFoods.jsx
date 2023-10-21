import { useState } from "react";
import { useEffect } from "react";
import SingleFood from "./SingleFood/SingleFood";


const AllFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/allFoods")
            .then(res => res.json())
        .then(data => setFoods(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center">All Foods Are Here!!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {
                    foods.map(food => <SingleFood key={food.id} food={food}></SingleFood>)
                }
            </div>
        </div>
    );
};

export default AllFoods;
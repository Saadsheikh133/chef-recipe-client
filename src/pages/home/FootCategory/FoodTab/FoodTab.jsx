import FoodCard from "./FoodCard/FoodCard";


const FoodTab = ({ foods }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
            {
                foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
            }
        </div>
    );
};

export default FoodTab;
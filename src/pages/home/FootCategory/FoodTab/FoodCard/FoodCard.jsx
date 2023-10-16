

const FoodCard = ({ food }) => {
    const { image, foodName, test, recipe, price, } = food;
    return (
        <div className="card h-full bg-slate-50 shadow-xl relative">
            <figure><img className="rounded-2xl p-2 h-[350px]" src={image} alt="Shoes" /></figure>
            <div className="card-body pt-3">
                <h2 className="card-title text-4xl mb-2">Food Name: {foodName}</h2>
                <div className="text-2xl space-y-2">
                    <p> <span className="font-bold">Recipe:</span> {recipe}</p>
                    <p><span className="font-bold">Test:</span> {test}</p>
                    <p><span className="font-bold">Price:</span> ${price}</p>
                </div>
                <div className=" divider"></div>
                <div className="card-actions justify-end items-center ">
                    <button className="font-bold px-4 py-2 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white hover:border-none transition-transform">Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
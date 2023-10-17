

const SingleFood = ({ food }) => {
    const { image, test, price, foodName, country } = food;
    return (
        <div>
            <div className="card w-full h-full glass bg-slate-100 relative">
                <figure><img className="h-[270px] object-cover" src={image} alt="car!" /></figure>
                <p className="absolute top-0 right-0 bg-black text-xl px-4 text-white rounded-xl py-3 mt-2 mr-2">${ price }</p>
                <div className="card-body">
                    <h2 className="card-title">Food Name: { foodName }</h2>
                    <p>Country: { country }</p>
                    <p>Test: { test }</p>
                    <div className="card-actions justify-end">
                        <button className="font-bold px-4 py-2 mt-2 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white hover:border-none transition-transform">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;
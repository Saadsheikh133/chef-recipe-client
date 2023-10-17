import { Link } from 'react-router-dom';
import bestFood from '../../assets/images/bestFood.avif';

const BestFood = () => {
    return (
        <div className="container mx-auto my-20 shadow-lg">
            <div className='text-center'>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 inline-block text-transparent bg-clip-text">Do Not Miss!!</h2>
            </div>
            <div className='bg-gray-300 py-16 mt-10 rounded-xl lg:flex justify-evenly items-center gap-4 px-4'>
                <img className='rounded-lg mx-3' src={bestFood} alt="" />
                <div>
                    <h2 className='text-2xl lg:text-4xl my-3 font-bold text-center bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-400 inline-block text-transparent bg-clip-text '>Try Now!! Crispy and flavorful.</h2>
                    <p className='text-2xl font-semibold mt-4'>
                        Pour batter into takoyaki pan, add diced octopus, cook until golden brown. Top with takoyaki sauce and bonito flakes.
                    </p>
                    <div className='text-center mt-20'>
                        <Link to={'/allFoods'} className='font-bold px-6 text-xl py-4 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white hover:border-none transition-transform'>Order Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFood;
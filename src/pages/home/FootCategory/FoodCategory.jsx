import { useEffect, useState } from "react";
import { Tab } from '@headlessui/react'


const FoodCategory = () => {
    const [foods, setFoods] = useState([]);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    useEffect(() => {
        fetch("https://b7a10-chef-recipe-hunter-server-side-ecru.vercel.app/foods")
            .then(res => res.json())
        .then(data => {
            setFoods(data)
        })
    }, [])

    return (
        <div className="container mx-auto lg:px-2 my-16">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-2">Featured Listed Property</h2>
                <p className="text-xl">Real state can be bought, sold, leased, or rented and can be a <br /> valuable investment opportunity. The value of real state can be....</p>
            </div>
            <div className="lg:mx-10 mt-10 relative">
                <div>
                    <div className="w-full px-2 py-16 sm:px-0">
                        <Tab.Group>
                            <Tab.List className="flex max-w-md space-x-1 rounded-xl bg-blue-900/20 p-1">
                                {Object.keys(foods).map((category) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-white shadow'
                                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {Object.values(foods).map((posts, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                        className={classNames(
                                            'rounded-xl bg-white p-3',
                                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                        )}
                                    >
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {posts.map((post) => (
                                                <div key={post.id} className="card w-full h-full bg-slate-50 shadow-xl relative">
                                                    <figure><img className="rounded-2xl p-2 lg:h-[350px]" src={post.image} alt="Shoes" /></figure>
                                                    <div className="card-body pt-3">
                                                        <h2 className="card-title text-2xl font-bold mb-2">Food Name: {post.foodName}</h2>
                                                        <div className="text-xl space-y-2">
                                                            <p> <span className="font-bold">Recipe:</span> {post.recipe}</p>
                                                            <p><span className="font-bold">Test:</span> {post.test}</p>
                                                            <p><span className="font-bold">Price:</span> ${post.price}</p>
                                                        </div>
                                                        <div className=" divider"></div>
                                                        <div className="card-actions justify-end items-center ">
                                                            <button className="font-bold px-4 py-2 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white hover:border-none transition-transform">Show Details</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCategory;
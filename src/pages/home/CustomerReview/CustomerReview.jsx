import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect } from 'react';
import { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { BiSolidQuoteLeft } from "react-icons/bi";

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className='my-20 container mx-auto'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}> <div className="card bg-purple-200 py-4 rounded-ee-[80px] rounded-ss-[80px]">
                        <div className="card-body text-lg font-semibold px-10">
                            <div className="flex justify-between">
                                <p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </p>
                                <BiSolidQuoteLeft size={50}></BiSolidQuoteLeft>
                            </div>
                            <p className="text-xl mt-4">{review.review}</p>
                            <div className="flex gap-4 mt-4">
                                <img className="h-20 w-20 rounded-full" src={review.image} alt="" />
                                <h2 className="card-title font-bold text-2xl">{review.customer}</h2>
                            </div>
                        </div>
                    </div></SwiperSlide>)
                }
{/*                
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    );
};

export default CustomerReview;
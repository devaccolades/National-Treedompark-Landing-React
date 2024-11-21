import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Image } from 'antd';

// Images
import image1 from '../../asset/images/amenities/amenity1.jpg';
import image2 from '../../asset/images/amenities/amenity2.jpg';
import image3 from '../../asset/images/amenities/amenity3.jpg';
import image4 from '../../asset/images/amenities/amenity4.jpg';
import image5 from '../../asset/images/amenities/amenity5.jpg';
import image6 from '../../asset/images/amenities/amenity6.jpg';
import image7 from '../../asset/images/amenities/amenity7.jpg';
import image8 from '../../asset/images/amenities/amenity8.jpg';
import image9 from '../../asset/images/amenities/amenity9.png';
import image10 from '../../asset/images/amenities/amenity10.png';

const aminityData = [
    { image: image1, title: "Childrens Play Area" },
    { image: image2, title: "Library" },
    { image: image3, title: "Netted Cricket Play Area" },
    { image: image4, title: "Infinity Swimming Pool" },
    { image: image5, title: "Health Club" },
    { image: image6, title: "Guest Room" },
    { image: image7, title: "Rooftop Helipad" },
    { image: image8, title: "Multi-Purpose Hall" },
    { image: image9, title: "Rooftop Party Area" },
    { image: image10, title: "Lobby" },
];

const Amenities = forwardRef((props, ref) => {
    return (
        <section ref={ref} className='w-full flex flex-row overflow-hidden'>
            <div className="w-[50px] md:w-[60px] lg:w-[80px] bg-[#2b2d42] flex items-center justify-center">
                <p className="text-white font-bold text-[20px] lg:text-[26px] transform -rotate-90">
                    Amenities
                </p>
            </div>
            <div className='w-full'>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000, // Delay in ms between slides
                        disableOnInteraction: false, // Keep autoplay running after user interaction
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                    }}
                >
                    {aminityData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <Image src={item?.image} alt={item?.title} />
                                <p className='w-full font-inter-medium text-white text-[14px] lg:text-[16px] py-[10px] text-center border bg-[#2b2d42] -mt-[6px] rounded-b-[10px]'>{item?.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
});

export default Amenities;

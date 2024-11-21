import React, { forwardRef } from 'react';
// Images
import aboutImage from '../../asset/images/about.jpg';

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="about-containers grid grid-cols-1 lg:grid-cols-2 ">
            <div className='bg-cover bg-center h-[600px] lg:h-full' style={{ backgroundImage: `url(${aboutImage})`}}/>
            <div className="about-wrapper p-[30px] lg:p-[60px] flex flex-col gap-[10px] justify-center">
                <p className="text-[#d90429] font-quicksand-semiBold text-[18px] lg:text-[22px] underline">Next-Gen Luxury</p>
                <h1 className="about-heading font-quicksand-bold text-[26px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[46px] lg:leading-[56px] lg:w-[600px]">
                    Spacious 2 BHK Apartments Starting from ₹85L
                </h1>
                <p className="description font-inter-regular text-[14px] lg:text-[16px] lg:w-[80%]">
                    Kerala is known as "God's Own Country" for its lush natural beauty,
                    beguiling backwaters, and wealth of spices that have been the Holy Grail
                    for generations of seafarers. Cochin is the ultimate destination for people
                    who love changes. Complementing this change National Builders launches
                    a new concept in luxury - National Treedom Park - at Vyttila, the magnum
                    opus in luxury.
                    <br />
                    Spread across over 26 cents, National Treedom Park-Tower 2 has everything
                    that takes your life into a different league. Treedom Park is conceived
                    and created to embark on the next generation of living. Work hard, play
                    hard and live comfortably. With the high-end eclectic mix of convenience,
                    entertainment, and luxury, National Treedom Park offers something.
                </p>
                <div className="py-[5px] md:gap-[10px] lg:py-[20px] flex flex-col gap-[4px] lg:gap-[6px] font-inter-medium text-[14px] lg:text-[16px]">
                    <p>RERA : K-RERA/PRJ/ERN/022/2023</p>
                    <p>BHK : 2 BHK</p>
                    <p>Units : 120 Units</p>
                    <p>Sq.ft : 1180 - 1312 sq.ft</p>
                    <p>Location : Vyttila, Kochi</p>
                </div>
                <button className="bg-[#d90429] w-full lg:w-[80%] text-white font-quicksand-semiBold text-[16px] py-[10px] px-[20px] rounded-[10px]">
                    Contact Now
                </button>
            </div>
        </section>
    );
});

export default About;

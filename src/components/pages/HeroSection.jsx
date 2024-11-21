import React from 'react'
import areaIcon from '../../asset/icons/area.svg'
import buildingIcon from '../../asset/icons/building.svg'
import locationIcon from '../../asset/icons/location.svg'

// Images
import Image from '../../asset/images/image1.jpg'
import mobImage from '../../asset/images/mobimage1.jpg'
const details = [
    { icon: buildingIcon, title: "2 BHK" },
    { icon: areaIcon, title: "1180 - 1312 sq.ft" },
    { icon: locationIcon, title: "Vyttila, Kochi" },
]
function HeroSection() {
    return (
        <>
            <section className='landing relative bg-center bg-contain bg-no-repeat lg:-mt-[80px]'>
                <img src={Image} alt="" className='object-cover z-0 hidden md:block' />
                <img src={mobImage} alt="" className='block md:hidden w-full' />
                <div className='hidden lg:block landing-card-container absolute bottom-[4%] w-full'>
                    <div className='box-container w-full md:w-[600px] rounded-[20px]  mx-auto bg-white flex flex-col p-[20px] gap-[20px]'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-[10px] md:gap-[20px]'>
                            {details.map((item, index) => (
                                <div className='text flex flex-row items-center justify-center gap-[10px] border border-[#2b2d42] rounded-[10px] p-[10px]'>
                                    <img className='w-[20px]' src={item?.icon} alt="" />
                                    <p className='font-inter-regular text-[14px] md:font-[16px]'>{item?.title}</p>
                                </div>
                            ))}
                            <button className='bg-[#2b2d42] text-white md:col-span-3 font-quicksand-semiBold text-[14px] md:text-[16px] py-[10px] px-[20px] rounded-[10px]'>
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='landing-card-container-2 w-full '>
                <div className='box-container  rounded-[20px]  mx-auto bg-white flex flex-col p-[20px] gap-[20px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-[10px] md:gap-[20px]'>
                        {details.map((item, index) => (
                            <div className='text flex flex-row items-center justify-center gap-[10px] border border-[#2b2d42] rounded-[10px] p-[10px]'>
                                <img className='w-[20px]' src={item?.icon} alt="" />
                                <p className='font-inter-regular text-[14px] md:font-[16px]'>{item?.title}</p>
                            </div>
                        ))}
                        <button className='bg-[#2b2d42] text-white md:col-span-3 font-quicksand-semiBold text-[14px] md:text-[16px] py-[10px] px-[20px] rounded-[10px]'>
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
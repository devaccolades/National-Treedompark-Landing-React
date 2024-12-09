import React from 'react'

// Images
import logo from '../asset/images/logo.png'

export function Headder({ aboutRef, amenityRef, distanceRef, contactRef }) {
    return (
        <nav className='header-container bg-transparent sticky top-0 z-50'>
            <div className='header-wrapper lg:w-[650px] mx-auto flex flex-row justify-between px-[30px] md:px-[60px] py-[5px] md:py-[10px] bg-white rounded-b-[10px] rounded-none lg:rounded-b-[30px]'>
                <img src={logo} className='w-[70px] md:w-[60px] h-[70px] md:h-[60px]' alt="Logo" />
                <ul className='flex flex-row gap-[20px] items-center'>
                    <li
                        className='font-inter-medium text-[16px] cursor-pointer hidden md:block'
                        onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >
                        About
                    </li>
                    <li
                        className='font-inter-medium text-[16px] cursor-pointer hidden md:block'
                        onClick={() => amenityRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >
                        Amenities
                    </li>
                    <li
                        className='font-inter-medium text-[16px] cursor-pointer hidden md:block'
                        onClick={() => distanceRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >
                        Distances
                    </li>
                    <li>
                        <button
                            className='font-inter-medium text-[14px] md:text-[16px] cursor-pointer bg-[#d90429] py-[8px] px-[16px] rounded-[10px] text-white'
                            onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        >
                            Enquire Now
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

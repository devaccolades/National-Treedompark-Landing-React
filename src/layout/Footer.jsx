import React from 'react'
import accoladesLogo from '../asset/images/accolades-logo.png'
export function Footer() {
    return (
        <section className='bg-[#2b2d42] px-[10px] w-full py-[20px] flex justify-center items-center'>
            <p className='font-quicksand-regular flex flex-row gap-[10px] text-[14px] lg:text-[16px] text-white'>
                <span>© 2024 By National Builders. Designed & Developed By Accolades Integrated Pvt.ltd</span>
                <img src={accoladesLogo} className='w-[16px] lg:w-[20px] h-[16px] lg:h-[20px]' alt="" />
            </p>
        </section>
    )
}


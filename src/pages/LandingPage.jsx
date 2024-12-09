import React, { useRef } from 'react';
import { Headder } from '../layout/Headder';
import './landing.css';

import HeroSection from '../components/pages/HeroSection';
import About from '../components/pages/About';
import Amenities from '../components/pages/Amenities';
import Distances from '../components/pages/Distances';
import Contact from '../components/pages/Contact';
import { Footer } from '../layout/Footer';

import whatsappIcon from '../asset/icons/whatsapp.svg';
import phoneIcon from '../asset/icons/phone.svg';
import PopupForm from '../components/popup/PopUp';

function LandingPage() {
    const aboutRef = useRef(null);
    const amenityRef = useRef(null);
    const distanceRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="relative min-h-screen">
            <Headder
                aboutRef={aboutRef}
                amenityRef={amenityRef}
                distanceRef={distanceRef}
                contactRef={contactRef}
            />
            <PopupForm/>
            <HeroSection contactRef={contactRef} />
            <About ref={aboutRef} contactRef={contactRef} />
            <Amenities ref={amenityRef} />
            <Distances ref={distanceRef} />
            <Contact ref={contactRef} />
            <Footer />
            {/* Floating icons */}
            <div className="fixed bottom-[40px] px-[20px] flex flex-row w-full justify-between">
                <a href="tel:+919847533355" className='bg-[#d90429] p-[10px] rounded-full'>
                    <img src={phoneIcon} alt="Phone Icon" className="w-[40px] h-[40px]" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=919847533355&text&type=phone_number&app_absent=0" className='bg-[#25D366] p-[10px] rounded-full'>
                    <img src={whatsappIcon} alt="WhatsApp Icon" className="w-[40px] h-[40px]" />
                </a>
            </div>
        </div>
    );
}

export default LandingPage;

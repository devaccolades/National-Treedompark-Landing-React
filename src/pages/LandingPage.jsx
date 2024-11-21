import React, { useRef } from 'react'
import { Headder } from '../layout/Headder'
import './landing.css'
// images
import logo from '../asset/images/logo.png'
import image1 from '../asset/images/image1.jpg'
// Icons
import areaIcon from '../asset/icons/area.svg'
import buildingIcon from '../asset/icons/building.svg'
import locationIcon from '../asset/icons/location.svg'
import HeroSection from '../components/pages/HeroSection'
import About from '../components/pages/About'
import Amenities from '../components/pages/Amenities'
import Distances from '../components/pages/Distances'
import Contact from '../components/pages/Contact'
import { Footer } from '../layout/Footer'

function LandingPage() {
    const aboutRef = useRef(null)
    const amenityRef = useRef(null)
    const distanceRef = useRef(null)
    const contactRef = useRef(null)
    return (
        <>
            <Headder 
            aboutRef={aboutRef}
            amenityRef={amenityRef}
            distanceRef={distanceRef}
            contactRef={contactRef}
            />
            <HeroSection />
            <About ref={aboutRef}/>
            <Amenities ref={amenityRef}/>
            <Distances ref={distanceRef}/>
            <Contact ref={contactRef}/>
            <Footer />
        </>

    )
}

export default LandingPage
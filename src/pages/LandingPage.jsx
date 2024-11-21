import React, { useRef } from 'react'
import { Headder } from '../layout/Headder'
import './landing.css'

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
            <HeroSection contactRef={contactRef}/>
            <About ref={aboutRef} contactRef={contactRef} />
            <Amenities ref={amenityRef}/>
            <Distances ref={distanceRef}/>
            <Contact ref={contactRef}/>
            <Footer />
        </>

    )
}

export default LandingPage
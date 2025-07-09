import React from 'react'
import Navbar from './Navbar'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
import Hero4 from './Hero4'
import Hero5 from './Hero5'
import Hero6 from './Hero6'
import Subscrite from './Subscrite'
import LinkFooter from './LinkFooter'
import Footer from './Footer'
import FaQ from './FaQ'
import TaC from './TaC'
import Privacy from './Privacy'
import Work from './Work'
import Aboutus from './Aboutus'
import Sustain from './Sustain'
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero1 />
            <Sustain/>
            <Aboutus/>
            <Work />
            <Privacy />
            <TaC />
            <FaQ />
            <Hero2 />
            <Hero3 />
            <Hero4 />
            <Hero5 />
            <Hero6 />
            <Subscrite />
            <LinkFooter />
            <Footer />
        </>
    )
}

export default Home

import React from 'react'
import Hero1 from '../Components/Homes/Hero1'
import FaQ from '../Components/FaQ'
import Privacy from '../Components/Privacy'
import Subscrite from '../Components/Subscrite'
import TaC from '../Components/TaC'
import Sustain from '../Components/Sustain'
import LinkFooter from '../Components/LinkFooter'
import Footer from '../Components/Footer'
const AboutUs = () => {
  const Data = {
    para:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
  return (
    <>
    <Hero1/>
      {/* Heading Section */}
      <div className="mt-20 w-full mb-12 text-center mask-radial-from-neutral-50">
        <h1 className="text-4xl md:text-6xl  font-bold flex items-center justify-center">ABOUT US</h1>
      </div>
      {/* Paragraph Section */}
      <div className="px-6 md:px-20 grid gap-8 mb-20">
        {[1, 2, 3, 4].map((_, index) => (
          <p key={index} className="text-justify text-base md:text-lg leading-relaxed">
            {Data.para}
          </p>
        ))}
      </div>
      <FaQ/>
      <Privacy/>
      <TaC/>
      <Subscrite/>
      <Sustain/>
      <LinkFooter/>
      <Footer/>
    </>
  )
}
export default AboutUs

'use client'
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Gallery from './Gallery/page'
import AboutUs from './AboutUs/page'
import Contact from './Contact/page'

const Page = () => {
  const [activeTab, setActiveTab] = useState('Home') // Default tab is Home

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />
      case 'Gallery':
        return <Gallery />
      case 'AboutUs':
        return <AboutUs />
      case 'Contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div>
      {/* Navbar with props to handle tab change */}

      {/* Render the selected component */}
      <div className="mt-10 px-10">
        {renderContent()}
      </div>
    </div>
  )
}

export default Page

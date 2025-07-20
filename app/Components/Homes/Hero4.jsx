import Image from 'next/image'
import React from 'react'

const Hero4 = () => {
    return (
        <>
            <div className="mt-12 w-full text-center px-4 md:px-10 mask-radial-from-neutral-50">
                <h1 className="text-4xl md:text-6xl font-bold">EXTRAORDINARY</h1>
                <h1 className="text-4xl md:text-6xl font-bold">FEATURES</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1 md:px-10 mt-10">

                <div className="p-6 rounded-lg border border-transparent bg-gray-50 hover:border-blue-500 text-start transition-all duration-200">
                    <img src="/igicon1.png" alt="Bed Icon" className="mb-4 w-16 h-16" />
                    <h3 className="text-xl md:text-2xl font-bold mb-3 ">Feel at home,<br />Everywhere</h3>
                    <p className="text-md  mb-4">
                        Fully-furnished rooms with luxurious amenities and thoughtful details.
                    </p>
                    <a href="#" className="text-sm font-semibold inline-flex items-center gap-1">
                        Learn More <span>→</span>
                    </a>
                </div>

                <div className="p-6 rounded-lg border border-transparent bg-gray-50 hover:border-blue-500 text-start transition-all duration-200">
                    <img src="/igicon2.webp" alt="Calendar Icon" className="mb-4 w-16 h-16" />
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Flexible<br />Bookings</h3>
                    <p className="text-md mb-4 ">
                        Reserve for a day, a week, or even longer. Modify plans with just 48 hours’ notice.
                    </p>
                    <a href="#" className="text-sm font-semibold inline-flex items-center gap-1">
                        Learn More <span>→</span>
                    </a>
                </div>
                <div className="p-6 rounded-lg border border-transparent bg-gray-50 hover:border-blue-500 text-start transition-all duration-200">
                    <img src="/igicon3.webp" alt="Globe Icon" className="mb-4 w-16 h-16" />
                    <h3 className="text-xl md:text-2xl font-bold mb-3">Seamless<br />Online Booking</h3>
                    <p className="text-md mb-4 ">
                        Book instantly from any device. No long forms or complicated steps.
                    </p>
                    <a href="#" className="text-sm font-semibold inline-flex items-center gap-1">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero4

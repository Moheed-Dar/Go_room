import Image from 'next/image'
import React from 'react'

const Hero4 = () => {
    return (
        <>
            <div className="mt-12 w-full mask-radial-from-neutral-50 mb-10 ps-10 text-center">
                <h1 className="text-6xl font-bold">EXTRAORDINARY</h1>
                <h1 className="text-6xl font-bold">FEATURES</h1>
            </div>
            <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-3  md:grid-cols-2  gap-6 px-10">
                <div className="p-6 rounded-lg border border-transparent  bg-gray-50 hover:border-blue-500 text-start transition-all duration-200">
                    <img src="/igicon1.png" alt="Bed Icon" className="mb-4 w-[60px] h-[60px]" />
                    <h3 className="text-2xl font-bold mt-10 mb-5">Feel at home,<br />Everywhere</h3>
                    <p className="text-md pr-30 mb-4">
                        Fully-furnished rooms with luxurious amenities and thoughtful details.
                    </p>
                    <a href="#" className="text-sm font-semibold mt-10 inline-flex items-center gap-1">
                        Learn More <span>→</span>
                    </a>
                </div>
                <div className="p-6 rounded-lg border border-transparent bg-gray-50 hover:border-blue-500 text-start transition-all duration-200">
                    <img src="/igicon2.webp" alt="Calendar Icon" className="mb-4 w-[60px] h-[60px]" />
                    <h3 className="text-2xl font-bold mt-10 mb-5">Flexible<br />Bookings</h3>
                    <p className="text-md pr-20 mb-4">
                        Reserve for a day, a week, or even longer. Modify plans with just 48 hours’ notice.
                    </p>
                    <a href="#" className="text-sm font-semibold mt-10 inline-flex items-center gap-1">
                        Learn More <span>→</span>
                    </a>
                </div>
                <div className="p-6 rounded-lg border border-transparent bg-gray-50 hover:border-blue-500 text-start transition-all duration-200">
                    <img src="/igicon3.webp" alt="Globe Icon" className="mb-4 w-[60px] h-[60px]" />
                    <h3 className="text-2xl font-bold mt-10 mb-5">Seamless<br />Online Booking</h3>
                    <p className="text-md pr-30 mb-4">
                        Book instantly from any device. No long forms or complicated steps.
                    </p>
                    <a href="#" className="text-sm font-semibold mt-10 inline-flex items-center gap-1">
                        Learn More <span>→</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Hero4;

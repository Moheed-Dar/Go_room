import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
    return (
        <>
            <div className='mt-11 w-full  mask-radial-from-neutral-50 ' >
                <h1 className='text-8xl font-bold flex items-center justify-center' >A ROOM FOR</h1>
                <h1 className='text-8xl font-bold flex items-center justify-center' >EVERY OCCASION</h1>
            </div>
            <div id='nav1' className='p-2 mt-7 text-gray-500' >
                <nav className='flex  items-center justify-between mx-4' >
                    <ul className='flex' >
                        <li className='relative cursor-pointer group'>
                            <span className="group-hover:text-black">Deluxe Room</span>
                            <div className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></div>
                        </li>
                    </ul>
                    <ul>
                        <li className='relative cursor-pointer group'>
                            <span className="group-hover:text-black">Executive Suite</span>
                            <div className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></div>
                        </li>
                    </ul>
                    <ul>
                        <li className='relative cursor-pointer group'>
                            <span className="group-hover:text-black">Honeymoon Suite</span>
                            <div className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></div>
                        </li>
                    </ul>
                    <ul>
                        <li className='relative cursor-pointer group'>
                            <span className="group-hover:text-black">Business Lounge Access</span>
                            <div className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></div>
                        </li>
                    </ul>
                    <ul>
                        <li className='relative cursor-pointer group'>
                            <span className="group-hover:text-black">Bridal Package</span>
                            <div className="absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></div>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='mx-2' >
                <hr className='w-full bg-gray-300 border-none h-1 mb-10' />
            </div>
            <div className='grid grid-cols-2' >
                <div className='' >
                    <h1 className='metal-mania-regular1  text-4xl  p-16 ' >WHY GUESTS CHOOSE US</h1>
                    <div className='grid grid-rows-2  ' >
                        <div className='grid grid-cols-2' >
                            <div className='flex p-4 ms-10 gap-5 items-center text-lg' >
                                <Image className='pb-1' src='/img3.webp' alt='no image found' width={30} height={5} />
                                <h1 className='fontname' >Custom Interiors</h1>
                            </div>
                            <div className='flex p-4 ms-10 gap-5 items-center text-lg' >
                                <Image className='pb-1' src='/img4.png' alt='no image found' width={30} height={5} />
                                <h1 className='fontname' >Zero Hassle Booking</h1>
                            </div>
                        </div>
                        <div className='grid grid-cols-2'  >
                            <div className='flex p-4 ms-10 gap-5 items-center text-lg' >
                                <Image className='pb-1' src='/img4.png' alt='no image found' width={30} height={5} />
                                <h1 className='fontname' >Best Price Guarantee </h1>
                            </div>
                            <div className='flex p-4 ms-10 gap-5 items-center text-lg' >
                                <Image className='pb-1' src='/img4.png' alt='no image found' width={30} height={5} />
                                <h1 className='fontname' >24/7 Support</h1>
                            </div>
                        </div>
                    </div>
                    <div className='ps-16 pe-25 pt-16  font-extralight fontname1 text-gray-600 gap-3' >
                        <p>
                            From throughtfully designed rooms to personalized service every detail is crafted to make you feel at home. Whether you're Traveling for business or leisure,out hotels offer the perfect blend of comfort, elegance, and reliability--making every visit unforgettable.
                        </p>
                    </div>
                </div>
                <div className=' p-5 pe-10 flex  justify-end' >
                    <Image className='rounded-md' src='/img2.png' width={500} height={400} alt="no image found" />
                </div>
            </div>
        </>
    )
}

export default Hero2
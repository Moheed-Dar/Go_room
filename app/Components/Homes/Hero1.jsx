'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
const Hero1 = () => {
    const router = useRouter()
    const SearchPage = () => {
        router.push('/Search-Result')

    }

    return (
        <>
            <div className='md:mt-10 mt-5 mb-10 md:mb-2 w-full  mask-radial-from-neutral-50 ' >
                <h1 className=' text-center md:text-6xl text-4xl  lg:text-8xl font-bold flex items-center justify-center' >FIND A ROOM FOR</h1>
                <h1 className=' text-center md:text-6xl text-4xl  lg:text-8xl font-bold flex items-center justify-center' >YOUR VISION</h1>
            </div>
            <div className='grid grid-cols-2  md:px-2 px-1 mx-5 ' >
                <div className='flex justify-start items-center md:ms-3 mb-10 md:mb-2 text-sm ' >
                    <h1 className='mask-radial-from-neutral-100 font-semibold ' >Stay in style. Rest<br></br> with purpose </h1>
                </div>
                <div className=' flex justify-end items-center md:me-3 mb-10 md:mb-2' >
                    <h1 className='mask-radial-from-neutral-100 font-semibold' >Where comfort meets<br></br> class --every stay, every time </h1>
                </div>
            </div>
            <div className='mx-5 mt-2 relative'>
                <Image   src='/img1.jpg'  alt='hero1 ke image'  className='w-full object-cover rounded-xl max-h-[500px] md:max-h-[600px]' width={1600}  height={500} />
                {/* Desktop Vali screen ka lea */}
                <div className='hidden md:grid grid-cols-3 absolute bottom-0 left-0 w-full pt-10'>
                    <div className='grid grid-cols-4 col-span-2 bg-white ps-10 pt-8 rounded-tr-full gap-3'>
                        <div>
                            <h1 className='text-gray-900 md:text-md text-sm font-semibold'>What are you planning?</h1>
                            <h1 className='pt-1 text-sm'>Enter your reason for visit</h1>
                        </div>
                        <div>
                            <h1  className='text-gray-900 md:text-md text-sm font-semibold'>Where?</h1>
                            <h1 className='pt-1 text-sm'>Enter a city or location</h1>
                        </div>
                        <div>
                            <h1  className='text-gray-900 md:text-md text-sm font-semibold'>When?</h1>
                            <h1 className='pt-1 text-sm'>Check-in & check-out</h1>
                        </div>
                        <div className='bg-black text-white rounded-tr-full rounded-bl-full hover:bg-green-700 cursor-pointer flex items-center justify-center h-16 mr-10'>
                            <button onClick={SearchPage} className='text-sm pe-4'>Search</button>
                            <FontAwesomeIcon icon={faArrowRight} className='w-4 text-gray-300' />
                        </div>
                    </div>
                    <div className='ms-10 me-5'>
                        <hr className='border-white mb-4' />
                        <div className='flex justify-between items-center mt-4 text-white'>
                            <div className='font-extrabold text-xl'>
                                <h1>Explore our new</h1>
                                <h1>complementary room</h1>
                            </div>
                            <div className='w-12 h-12 flex justify-center items-center rotate-[320deg] bg-white rounded-full'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-black w-4' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Vali screen */}
                <div className='md:hidden mt-5 grid grid-cols-1 gap-5'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 bg-white px-6 py-6 rounded-xl shadow-lg gap-4'>
                        <div>
                            <h1 className='text-gray-600 text-sm'>What are you planning?</h1>
                            <h1 className='pt-1 text-sm'>Enter your reason for visit</h1>
                        </div>
                        <div>
                            <h1 className='text-gray-600 text-sm'>Where?</h1>
                            <h1 className='pt-1 text-sm'>Enter a city or location</h1>
                        </div>
                        <div>
                            <h1 className='text-gray-600 text-sm'>When?</h1>
                            <h1 className='pt-1 text-sm'>Check-in & check-out</h1>
                        </div>
                        <div className='bg-black text-white rounded-br-full rounded-tl-full hover:bg-green-700 cursor-pointer flex items-center justify-center h-16 col-span-1 sm:col-span-2'>
                            <button onClick={SearchPage} className='text-sm pe-4'>Search</button>
                            <FontAwesomeIcon icon={faArrowRight} className='w-4 text-gray-300' />
                        </div>
                    </div>

                    <div className='text-white px-4 md:px-8 flex flex-col justify-center bg-yellow-700 rounded-xl py-6'>
                        <hr className='border-white mb-4' />
                        <div className='flex justify-between items-center'>
                            <div className='font-extrabold text-xl'>
                                <h1>Explore our new</h1>
                                <h1>complementary room</h1>
                            </div>
                            <div className='w-12 h-12 flex justify-center items-center rotate-[320deg] bg-white rounded-full'>
                                <FontAwesomeIcon icon={faArrowRight} className='text-black w-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero1



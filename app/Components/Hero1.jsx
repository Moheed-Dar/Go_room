import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React from 'react'
const Hero1 = () => {
    return (
        <>
            <div className='mt-11 w-full  mask-radial-from-neutral-50 ' >
                <h1 className='text-8xl font-bold flex items-center justify-center' >FIND A ROOM FOR</h1>
                <h1 className='text-8xl font-bold flex items-center justify-center' >YOUR VISION</h1>
            </div>
            <div className='grid grid-cols-2  px-2 ' >
                <div className='flex justify-start items-center ms-3 text-sm ' >
                    <h1 className='mask-radial-from-neutral-100 font-semibold ' >Stay in style. Rest<br></br> with purpose </h1>
                </div>
                <div className=' flex justify-end items-center me-3' >
                    <h1 className='mask-radial-from-neutral-100 font-semibold' >Where comfort meets<br></br> class --every stay, every time </h1>
                </div>
            </div>
            <div className='mx-5 mt-2 relative ' >
                <Image src='/img1.jpg' alt='hero1 ke image' className='  object-cover' width={1600} height={50} />
                <div className='absolute bottom-0 left-0 grid grid-cols-3 pt-10 ' >
                    <div className='grid grid-cols-4 col-span-2  bg-white    ps-10 pt-8  rounded-tr-full  gap-3 '>
                        <div>
                            <h1 id='nav2' className='text-gray-600 text-sm ' >What are you planning?</h1>
                            <h1 className='pt-1 text-sm  ' id='nav2'>Enter your reason for visit</h1>
                        </div>
                        <div>
                            <h1 id='nav2 ' className='text-gray-600 text-sm '>Where?</h1>
                            <h1 className='pt-1 text-sm   ' id='nav2'>Enter a city a location</h1>
                        </div>
                        <div>
                            <h1 id='nav2' className='text-gray-600 text-sm '>When?</h1>
                            <h1 id='nav2' className='pt-1 text-sm '>Check-in & check-out</h1>
                        </div>
                        <div id='nav3' className='bg-black rounded-tr-full rounded-bl-full  hover:bg-green-700 cursor-pointer text-white me-5 flex h-16 items-center justify-center ' >
                            <button className='text-sm pe-4 ' > Search </button>
                            <div className='w-5 text-gray-300' >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className=' ms-20'>
                        <hr className=' text-white border-1   bg-white mx-2  ' ></hr>
                        <div className='flex justify-evenly mt-6 ' >
                            <div className='text-white font-extrabold text-2xl metal-mania-regular  ' >
                                <h1>Explore our new</h1>
                                <h1>complementary room</h1>
                            </div>
                            <div className=' w-15 h-15 flex justify-center items-center rotate-320 bg-white rounded-full' >
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

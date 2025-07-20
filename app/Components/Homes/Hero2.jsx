
import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
    const navItems = [
        'Deluxe Room',
        'Executive Suite',
        'Honeymoon Suite',
        'Business Lounge Access',
        'Bridal Package'
    ]

    return (
        <>
            <div className='hidden lg:block'>
                <div className=' w-full my-20 mask-radial-from-neutral-50'>
                    <h1 className='text-8xl font-bold flex items-center justify-center'>A ROOM FOR</h1>
                    <h1 className='text-8xl font-bold flex items-center justify-center'>EVERY OCCASION</h1>
                </div>
                <div id='nav1' className='md:p-2 mt-7 text-gray-500'>
                    <nav className='flex items-center justify-between mx-4'>
                        {navItems.map((item, index) => (
                            <ul key={index}>
                                <li className='relative cursor-pointer group'>
                                    <span className='group-hover:text-black'>{item}</span>
                                    <div className='absolute left-0 bottom-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300'></div>
                                </li>
                            </ul>
                        ))}
                    </nav>
                </div>
                <div className='mx-2'>
                    <hr className='w-full bg-gray-300 border-none h-1 mb-10' />
                </div>
                <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='metal-mania-regular1 text-4xl mx-10 md:py-10'>WHY GUESTS CHOOSE US</h1>
                        <div className='grid grid-rows-2 mx-10 md:gap-10 gap-3'>
                            <div className='grid grid-cols-2'> 
                                <FeatureItem src='/img3.webp' text='Custom Interiors' />
                                <FeatureItem src='/img4.png' text='Zero Hassle Booking' />
                            </div>
                            <div className='grid grid-cols-2'>
                                <FeatureItem src='/img4.png' text='Best Price Guarantee' />
                                <FeatureItem src='/img4.png' text='24/7 Support' />
                            </div>
                        </div>
                        <div className='ps-10 pe-25 pt-16 font-extralight fontname1 text-gray-600 gap-3'>
                            <p>
                                From thoughtfully designed rooms to personalized service, every detail is crafted to make you feel at home. Whether you're traveling for business or leisure, our hotels offer the perfect blend of comfort, elegance, and reliability--making every visit unforgettable.
                            </p>
                        </div>
                    </div>

                    <div className='p-5 pe-10 flex justify-end'>
                        <Image className='rounded-md' src='/img2.png' width={500} height={400} alt='no image found' />
                    </div>
                </div>
            </div>

            {/* Mobile View ka lea */}
            <div className='block lg:hidden px-1 pt-10'>
                <h1 className='text-4xl my-10 font-bold text-center mask-radial-from-neutral-50'>A ROOM FOR EVERY OCCASION</h1>

                <div className='flex flex-wrap gap-3 justify-center mt-5'>
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className='px-3 py-1 text-sm border border-gray-400 rounded-full hover:bg-gray-200 transition duration-200'
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 gap-5 mt-6'>
                    <Image src='/img2.png' alt='no image found' width={400} height={400} className='rounded-md mx-auto' />
                    <h1 className='text-2xl font-bold text-center my-5'>WHY GUESTS CHOOSE US</h1>
                    <div className='grid grid-cols-1 gap-3'>
                        <FeatureItem src='/img3.webp' text='Custom Interiors' />
                        <FeatureItem src='/img4.png' text='Zero Hassle Booking' />
                        <FeatureItem src='/img4.png' text='Best Price Guarantee' />
                        <FeatureItem src='/img4.png' text='24/7 Support' />
                    </div>
                    <p className='text-sm text-gray-600 text-center mt-4'>
                        From thoughtfully designed rooms to personalized service, every detail is crafted to make you feel at home. Whether you're traveling for business or leisure, our hotels offer the perfect blend of comfort, elegance, and reliability--making every visit unforgettable.
                    </p>
                </div>
            </div>
        </>
    )
}

const FeatureItem = ({ src, text }) => (
    <div className='flex gap-4 items-center text-lg'>
        <Image className='pb-1' src={src} alt='feature icon' width={30} height={30} />
        <h1 className='fontname'>{text}</h1>
    </div>
)

export default Hero2

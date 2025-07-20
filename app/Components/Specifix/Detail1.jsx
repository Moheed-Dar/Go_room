import { faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Detailsdb from './Specifixdb/Detailsdb'
import { useRouter } from 'next/navigation'

const Detail1 = () => {
    const router = useRouter()
    const Reservepage = () => {
        router.push('/ReserveNow')
    }
    return (
        <>
            <div className='grid grid-cols-1 md:ml-15 md:grid-cols-7 gap-6 p-5'>
                <div className='md:col-span-4 md:me-10'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                        <div className='leading-7'>
                            <h1 className='text-2xl font-semibold'>Well Furnished Apartment</h1>
                            <h4>100 Smart Street, LA, USA</h4>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FontAwesomeIcon className='w-6 h-6 text-gray-500' icon={faHeart} />
                            <FontAwesomeIcon className='w-6 h-6 text-gray-500' icon={faShareNodes} />
                        </div>
                    </div>

                    <div className='mt-8'>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Detailsdb.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-3 items-center justify-center p-4 hover:bg-gray-300 bg-gray-100 rounded-md"
                                >
                                    <Image
                                        src={item.icon}
                                        alt='image not found'
                                        width={60}
                                        height={60}
                                    />
                                    <h1 className="text-sm text-black text-center">{item.name}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-full mt-10 mb-5 md:mb-0'>
                        <h1 className='text-xl mb-4 text-center md:text-start font-bold text-black'>Apartment Description</h1>
                        <p className='mb-4 text-center md:text-start'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corporis fuga quas officiis iste saepe, odio minus iure eaque corrupti.
                        </p>
                        <p className='text-center md:text-start' >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corporis fuga quas officiis iste saepe, odio minus iure eaque corrupti.
                        </p>
                    </div>
                </div>

                <div className='md:col-span-3 border md:mx-10 md:my-15 border-gray-600 md:py-10 py-6 hover:bg-gray-100 transition-all ease-in-out duration-500 '>
                    <h1 className='font-bold text-center text-3xl lg:text-3xl md:text-xl mb-4'>$ 1000 - $ 2000</h1>
                    <hr className='my-2 md:mx-4 text-gray-600' />
                    <div className='pt-6 md:mx-5 mx-5 text-sm space-y-2'>
                        <h3>Short Period: $1000</h3>
                        <h3>Medium Period: $2000</h3>
                        <h3>Long Period: $2000</h3>
                    </div>
                    <div className='mt-6 px-4 md:px-4 md:my-7'>
                        <button
                            onClick={Reservepage}
                            className='w-full py-3 hover:rounded-lg transition-all duration-500 ease-in-out  hover:cursor-pointer border-white hover:bg-green-900 bg-black text-white'
                        >
                            Reserve Now
                        </button>
                    </div>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-4 mt-6 md:mb-2 ms-5 md:ms-0 md:mx-1 text-sm'>
                        <div className='flex items-center md:justify-center md:ms-2 ms-2 gap-2'>
                            <Image src="/Group.png" className='w-5 h-5' width={20} height={20} alt="image is not found" />
                            <h2>Property Inquiry</h2>
                        </div>
                        <div className='flex items-center md:ms-3 gap-2'>
                            <Image src="/fluent_call-16-regular.png" className='w-5 h-5' width={20} height={20} alt="image is not found" />
                            <h2>Contact Host</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail1

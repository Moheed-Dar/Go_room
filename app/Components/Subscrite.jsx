import Image from 'next/image'
import React from 'react'

const Subscrite = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-6 px-4 md:px-10'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl md:text-6xl lg:text-[80px] font-bold text-black leading-tight md:leading-none'>
                        SUBSCRIBE OUR
                    </h1>
                    <h1 className='text-4xl md:text-6xl lg:text-[80px] font-bold text-black leading-tight md:leading-none mb-4'>
                        NEWSLETTER
                    </h1>
                    <p className='text-base md:text-lg mb-4'>
                        Join our travel community for exclusive hotel deals, tips, and stories.
                    </p>
                    <form className='flex flex-col md:flex-row md:items-center gap-4 mt-6'>
                        <input 
                            type='email' 
                            className='border w-full md:w-auto px-4 h-12 placeholder:text-sm focus:outline-none' 
                            placeholder='Enter your email' 
                        />
                        <button 
                            type='submit' 
                            className='bg-black text-white px-6 py-3 h-12 hover:bg-gray-800 transition'>
                            Subscribe <span>→</span>
                        </button>
                    </form>
                </div>
                <div className='mt-6 md:mt-0'>
                    <Image 
                        className='rounded-md w-full h-auto' 
                        width={1000} 
                        height={500} 
                        src="/imgi5.jpg" 
                        alt="Newsletter" 
                    />
                </div>
            </div>
        </>
    )
}

export default Subscrite

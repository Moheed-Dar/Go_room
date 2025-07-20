import React from 'react'

const Sustain = () => {
    return (
        <>
            <div className='mt-20 w-full mb-10 text-center mask-radial-from-neutral-50'>
                <h1 className='text-4xl md:text-6xl font-bold'>SUSTAINABILITY</h1>
            </div>
            <h1 className='mx-auto max-w-3xl text-center px-4 mb-10 text-base md:text-lg'>
                We want to make it easier for everyone to experience the world. We also believe we have a responsibility to make sure there is always a world worth experiencing.
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 mb-20'>
                <div className='relative bg-gray-400 h-60 sm:col-span-2 flex items-center justify-center'>
                    <button className='absolute bottom-4 px-6 py-2 bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300'>
                        Climate Action <span className='ps-1'>→</span>
                    </button>
                </div>
                <div className='relative bg-gray-400 h-60 flex items-center justify-center'>
                    <button className='absolute bottom-4 px-6 py-2 bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300'>
                        Travel Offerings <span className='ps-1'>→</span>
                    </button>
                </div>
                <div className='relative bg-gray-400 h-60 flex items-center justify-center'>
                    <button className='absolute bottom-4 px-6 py-2 bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300'>
                        Industry & Insights <span className='ps-1'>→</span>
                    </button>
                </div>
                <div className='relative bg-gray-400 h-60 sm:col-span-2 flex items-center justify-center'>
                    <button className='absolute bottom-4 px-6 py-2 bg-black text-white border border-black hover:bg-white hover:text-black transition-all duration-300'>
                        Explore <span className='ps-1'>→</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sustain

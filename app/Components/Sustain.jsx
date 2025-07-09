import React from 'react'

const Sustain = () => {
    return (
        <>
            <div className='mt-20 w-full mb-13  mask-radial-from-neutral-50 ' >
                <h1 className='text-7xl font-bold flex items-center justify-center' >SUSTAINABILITY</h1>
            </div>
            <h1 className=' mx-50 m-10 text-center' > We went to make it easier for everyone to experience the world. We also believe we have a responsibility to make sure there is always a world worth experiencing. </h1>
            <div className=' grid grid-cols-3 gap-5 m-10 ' >
                <div className=' relative bg-gray-400 h-70 flex items-center justify-center col-span-2' >
                    <button className=' absolute bottom-1  px-17 py-3 ms-1 hover:cursor-pointer  border-1  border-black bg-black text-white text-md mb-4 ' > Climate Action<span className='ps-1' >→</span> </button>
                </div>
                <div className=' relative bg-gray-400 h-70 flex items-center justify-center' >
                    <button className=' absolute bottom-1  px-17 py-3 ms-1 hover:cursor-pointer  border-1  border-black bg-black text-white text-md mb-4 ' > Travel Offerings<span className='ps-1'>→</span> </button>
                </div>
                <div className='relative bg-gray-400 h-70 flex items-center justify-center' >
                    <button className=' absolute bottom-1  px-17 py-3 ms-1 hover:cursor-pointer  border-1  border-black bg-black text-white text-md mb-4 ' >Industry & Insights<span className='ps-1'>→</span> </button>
                </div>
                <div className=' col-span-2 relative bg-gray-400 h-70 flex items-center justify-center'>
                   <button className=' absolute bottom-1  px-17 py-3 ms-1 hover:cursor-pointer  border-1  border-black bg-black text-white text-md mb-4 ' >Explore<span className='ps-1'>→</span> </button>
                </div>
            </div>
        </>
    )
}

export default Sustain
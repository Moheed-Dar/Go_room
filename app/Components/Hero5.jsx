import Image from 'next/image'
import React from 'react'

const Hero5 = () => {
    return (
        <>
            <div className='grid grid-cols-2 mt-30 gap-6'  >
                <div className='ms-8  p-2 basis-4xl ' >
                    <h1 className='text-[100px] font-bold text-black leading-none'>FIND 300+</h1>
                    <h1 className='text-[100px] font-bold text-black leading-none mb-10 '>LOCATION</h1>
                    <p className='text-gray-700 ms-2 ' >Choose from our top-rated hotel branches <br/> across the country </p> <br />
                    <form  >
                        <input className='border mb-5 placeholder:ps-4 ms-2   w-100 h-13' placeholder='Select Country' type="text" ></input><br />
                        <input className='border  h-13 placeholder:ps-4 w-100   ms-2 ' placeholder='Select City' type="text" ></input><br />
                        <button className='bg-black h-12 mt-8 px-4 ms-2 gap-3 text-white' >Find Hotel <span>→</span> </button>
                    </form>
                </div>
                <div className='  grid grid-cols-2  gap-5 p-5  ' >
                        <div  className=' pt-2'>
                            <Image  src='/img12.png' alt="Image not found" width={1000 } height={10} className="mb-4 w-full object-cover rounded-sm  h-[95%]" />
                            <h1>New York City</h1>
                        </div>
                        <div  className=' pt-2 '>
                             <Image  src='/img13.png' alt="Image not found" width={1000 } height={10} className="mb-4 w-full object-cover rounded-sm  h-[95%]" />
                             <h1>New Orleans</h1>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Hero5
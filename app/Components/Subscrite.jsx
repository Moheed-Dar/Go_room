import Image from 'next/image'
import React from 'react'

const Subscrite = () => {
    return (
        <>
            <div className='grid grid-cols-2 mt-30 gap-6' >
                <div className='ms-8  p-2 basis-4xl ' >
                    <h1 className='text-[80px] font-bold text-black leading-none'>SUBSCRIBE OUR</h1>
                    <h1 className='text-[80px] font-bold text-black leading-none mb-4  '>NEWSLATTER</h1>
                    <p className='ms-2' >Join our travel community for exclusive hotel deals, tips, and stories.</p>
                    <form  >
                        <input type='email ' className='border mb-5 placeholder:ps-4  ms-2 mt-8  w-90 h-13' placeholder='Enter your email' />
                        <button className='bg-black h-13 mt-8 px-6  gap-3 text-white' >Subscribe <span>→</span> </button>
                    </form>
                </div>
                <div className='ps-10 pe-10 pb-5 ' >
                        <Image className='rounded-md' width={1000} height={10} src="/imgi5.jpg" alt="image is not found" />
                </div>
            </div>

        </>
    )
}

export default Subscrite
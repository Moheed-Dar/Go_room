import Image from 'next/image'
import React from 'react'

const Hero6 = () => {
    return (
        <>
            <div className='mt-11 w-full   mask-radial-from-neutral-50 ps-10 mb-10 ' >
                <h1 className='text-6xl  font-bold flex items-center justify-center' >NEWS & ARITCLES</h1>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-6  p-8 ' >
                <div className='my-7 md:my-0 ' >
                    <Image src='/imgi1.avif'  className='rounded-md' width={1000} height={0} alt="not image found " />
                    <h1 className='pt-2 pb-2  text-sm ' >Interviews . Now 20, 2024</h1>
                    <p className='font-bold' >Californian Escapes with jillian Rocco</p>
                </div>
                <div className='my-7 md:my-0 '>
                    <Image src='/imgi2.jpg' className='rounded-md' width={1000} height={0} alt="not image found " />
                    <h1  className='pt-2 pb-2  text-sm '  >Community . Jan 2024</h1>
                    <p  className='font-bold' >Desert Retreats with <br/> Reachal Olsem</p>
                </div>
                <div className='my-7 md:my-0 '>
                    <Image src='/imgi3.jpg' className='rounded-md' width={1000} height={0} alt="not image found " />
                    <h1  className='pt-2 pb-2  text-sm ' >Flex Space . Nov 7, 2024</h1>
                    <p  className='font-bold' >Green Innovation in <br/> Hospitality</p>
                </div>
                <div className='my-7 md:my-0 '>
                    <Image src='/imgi4.jpg' className='rounded-md' width={1000} height={0} alt="not image found " />
                    <h1   className='pt-2 pb-2  text-sm ' >News Articles .Nov 30, 2024</h1>
                    <p  className='font-bold' >Education-Focused Travel<br/> with Amy Leong</p>
                </div>
            </div>
        </>
    )
}

export default Hero6
import Image from 'next/image'
import React from 'react'

const Hero3 = () => {
    return (
        <>
            <div className='mt-11 w-full   mask-radial-from-neutral-50 ps-10 ' >
                <h1 className='text-6xl  font-bold flex items-center justify-center' >HOTEL GALLERIES</h1>
            </div>
            <div className="grid grid-cols-3 gap-12 p-6">
                {/* Top-left */}
                <div>
                    <Image src="/img7.png" alt="The Plaza Hotel" width={1000} height={10} className="w-full  object-cover h-[230px]  rounded" />
                    <p className="mt-2 text-sm">The Plaza Hotel<br /><strong>New York City, USA</strong></p>
                </div>

                {/* Center (Burj Al Arab Jumeirah) - Spans 2 rows */}
                <div className="row-span-2">
                    <Image width={2000} height={10} src="/img9.png" alt="Burj Al Arab Jumeirah" className="w-full h-[560px] object-cover rounded" />
                    <p className="mt-2 text-sm">Burj Al Arab Jumeirah<br /><strong>Dubai, UAE</strong></p>
                </div>

                {/* Top-right */}
                <div>
                    <Image  width={1000} height={0}   src="/img8.png" alt="Le Bristol Paris" className="w-full  object-cover h-[230px]  rounded" />
                    <p className="mt-2 text-sm">Le Bristol Paris<br /><strong>Paris, France</strong></p>
                </div>

                {/* Bottom-left */}
                <div>
                    <Image src="/img10.png" alt="The Savoy"  width={1000} height={10}  className="w-full  object-cover h-[230px] rounded" />
                    <p className="mt-2 text-sm">The Savoy<br /><strong>London, UK</strong></p>
                </div>

                {/* Bottom-right */}
                <div>
                    <Image  src="/img11.png" alt="Mandarin Oriental Bangkok" width={1000} height={10}  className="w-full object-cover h-[230px]  rounded" />
                    <p className="mt-2 text-sm">Mandarin Oriental Bangkok<br /><strong>Bangkok, Thailand</strong></p>
                </div>
            </div>

        </>
    )
}

export default Hero3
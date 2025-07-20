import Image from 'next/image'
import React from 'react'

const Detail5 = () => {
    const Detail5db = [
        {
            icon: '/Ellipse1.png',
            name: 'John Doberman',
            date: 'Mar 12 2025',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero temporibus sequi modi, numquam voluptate.'
        },
        {
            icon: '/Ellipse1.png',
            name: 'John Doberman',
            date: 'Mar 12 2025',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero temporibus sequi modi, numquam voluptate.'
        },
        {
            icon: '/Ellipse1.png',
            name: 'John Doberman',
            date: 'Mar 12 2025',
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero temporibus sequi modi, numquam voluptate.'
        },
    ]
    return (
        <>
            <div className='grid  grid-cols-1 md:grid-cols-3 md:ms-5' >
                {Detail5db.map((i, index) => (
                    <div key={index} className='p-10' >
                        <div className='flex gap-4 my-4'>
                            <Image src={i.icon} width={50} height={10} alt="image circle is not found" />
                            <div>
                                <h1 className='font-semibold text-lg' >{i.name}</h1>
                                <h2>{i.date}</h2>
                            </div>
                        </div>
                        <div>
                            <p className='pe-4 md:text-start text-center' >{i.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=' mt-4 mb-10 md:mb-0 flex items-center justify-center' >
                <button className='px-9 py-2 hover:rounded-3xl hover:bg-red-600 transition-all duration-500 ease-in-out  hover:cursor-pointer bg-black text-white font-semibold  text-md' >Show All 100 Reviews</button>
            </div>
        </>
    )
}

export default Detail5
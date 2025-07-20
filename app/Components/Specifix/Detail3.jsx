import React from 'react'
import Detail3db from './Specifixdb/Detail3db'

const Detail3 = () => {
    return (
        <>
            <div className=' mt-12 md:ps-15' >
                <h1 className='text-xl text-center md:text-start font-bold ' >Nearby Services</h1>
                <div className='grid grid-cols-1 md:px-0 px-10 md:grid-cols-6 gap-7 mt-6 ' >
                    {Detail3db.map((i, index)=>(
                        <div key={index} className=' border border-gray-700  px-4 py-1    ' >
                        <h1 className='font-semibold'  >{i.name}</h1>
                        <h2>{i.distance}</h2>
                        <div className='text-gray-600 text-xl'>{i.star}</div>
                    </div>
                    ))}
                    <div className=' flex items-center justify-center  ' >
                        <button className='border border-gray-700 px-5 py-2 ' >Show More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail3
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className=' flex items-center justify-between mt-5 w-full max-w-full ' >
                {/* This is logo div */}
                <div id='nav1' className='justify-start  ps-10  text-2xl ' >
                    <h1>Go-room</h1>
                </div>
                {/* This is navbar div */}
                <div>
                    <nav id='nav2' >
                        <ul className='flex gap-16 text-sm  ' >
                            <li className='active:font-bold  cursor-pointer' >Home</li>
                            <li className='active:font-bold  cursor-pointer' >Gallery</li>
                            <li className='active:font-bold  cursor-pointer' >About Us</li>
                            <li className='active:font-bold  cursor-pointer' >Contact</li>
                        </ul>
                    </nav>
                </div>
                {/* this is nab button div */}
                <div id='nav3' className='bg-black hover:bg-yellow-700 rounded-tr-full transition-all duration-500 ease-in-out rounded-none hover:rounded-bl-full cursor-pointer text-white me-5 flex px-7 py-3  items-center justify-center ' >
                    <button className='text-sm pe-4' > Book Now </button>
                    <div className='w-5 text-gray-300' >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
import React from 'react'

const TaC = () => {
    return (
        <>
            <div className='mt-20 w-full  mask-radial-from-neutral-50 ' >
                <h1 className='text-7xl font-bold flex items-center justify-center' >TERMS &</h1>
                <h1 className='text-7xl font-bold flex items-center justify-center' >CONDITIONS</h1>
            </div>
            <div className='grid grid-cols-1 h-auto mb-100  ' >
                <div className='ms-15 font-bold text-2xl mb-6 mt-17'  >
                    <h1>Your Agreement</h1>
                </div>
                <div id="textid" className='h-[400px] ms-15 me-7 pe-15 overflow-x-hidden overflow-scroll' >
                    <p className='text-justify pe-5 text-xl leading-8 mt-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-justify pe-5 text-xl leading-8 mt-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-justify pe-5 text-xl leading-8 mt-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-justify pe-5 text-xl leading-8 mt-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-justify pe-5 text-xl leading-8 mt-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-justify pe-5 text-xl leading-8 mt-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-justify pe-5 text-xl leading-8 mt-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-justify pe-5 text-xl leading-8 mt-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                </div>
                <div className='ms-15 mt-14 flex  items-center justify-center ' >
                        <input type='checkbox' className=' w-8 h-8  hover:cursor-pointer' />
                        <h1 className='ps-4 font-semibold   ' >I confirm that I have read and accept the terms and conditions and privary policy.</h1>
                        <button className='px-17 py-3 ms-50 border-1  text-md hover:cursor-pointer ' > Cancel </button>
                        <button className='px-17 py-3 ms-1 hover:cursor-pointer  border-1  border-black bg-black text-white text-md ' > Accept<span>→</span> </button>
                </div>
            </div>
        </>
    )
}

export default TaC
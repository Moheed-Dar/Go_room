'use client';

import React, { useState } from 'react'

const SignandLogin = () => {
    const [activeTab, setActiveTab] = useState('signin');
    return (
        <>
            <div className="w-full mt-10 p-6 bg-white  rounded-lg">
                <div className="flex justify-center items-center space-x-4 mb-6">
                    <button
                        onClick={() => setActiveTab('signin')}
                        className={`md:px-8 px-4 md:text-md text-sm md:py-2 py-2 rounded border hover:cursor-pointer border-black  ${activeTab === 'signin' ? 'bg-black text-white' : ' text-black'
                            }`}
                    >
                        Book as a Guest
                    </button>
                    <span className='px-5' >Or</span>
                    <button
                        onClick={() => setActiveTab('login')}
                        className={`md:px-8 px-4 md:text-md text-sm md:py-2 py-2 rounded border hover:cursor-pointer border-black ${activeTab === 'login' ? 'bg-black text-white' : ' text-black'
                            }`}
                    >
                        Book After Login
                    </button>
                </div>

                <div className="pt-6 text-center">
                    {activeTab === 'signin' ? (
                        // yaha Sign in vala component bana ga
                        <>
                            <h1 className='text-3xl font-bold mb-4'>Book Your Stay</h1>
                            <div className='flex justify-center mb-6'>
                                <button className='w-full max-w-md bg-black text-xl font-semibold text-white py-2'>
                                    Booking Details
                                </button>
                            </div>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 gap-x-6 gap-y-6 px-4 md:px-10'>
                                <div>
                                    <label htmlFor="id1" className='text-xl'>Check In Date</label><br />
                                    <input type='text' id="id1" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id2" className='text-xl'>Check Out Date</label><br />
                                    <input type='text' id="id2" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id3" className='text-xl'>Number of Guests</label><br />
                                    <input type='text' id="id3" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id4" className='text-xl'>Room Type</label><br />
                                    <input type='text' id="id4" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                            </div>
                            <div className='flex justify-center mt-10 mb-6'>
                                <button className='w-full max-w-md bg-black text-xl font-semibold text-white py-2'>
                                    Personal Details
                                </button>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 px-4 md:px-10'>
                                <div>
                                    <label htmlFor="id5" className='text-xl'>Full Name</label><br />
                                    <input type='text' id="id5" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id6" className='text-xl'>Email Address</label><br />
                                    <input type='text' id="id6" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id7" className='text-xl'>Phone Number</label><br />
                                    <input type='text' id="id7" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id8" className='text-xl'>Special Requests</label><br />
                                    <input type='text' id="id8" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                            </div>
                            <div className='flex justify-center mt-10 mb-6'>
                                <button className='w-full max-w-md bg-black text-xl font-semibold text-white py-2'>
                                    Payment Information
                                </button>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 px-4 md:px-10'>
                                <div>
                                    <label htmlFor="id9" className='text-xl'>Credit Card Number</label><br />
                                    <input type='text' id="id9" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id10" className='text-xl'>Expiration Date</label><br />
                                    <input type='text' id="id10" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id11" className='text-xl'>CVV</label><br />
                                    <input type='text' id="id11" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                                <div>
                                    <label htmlFor="id12" className='text-xl'>Billing Address</label><br />
                                    <input type='text' id="id12" className='w-full border text-xl py-1 border-black focus:outline-none mt-2' />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-center mt-6 gap-3 px-4'>
                                <div className='w-full max-w-xs'>
                                    <label htmlFor="id23" className='text-xl'>Coupon Code</label><br />
                                    <input type='text' id="id23" className='w-full border text-xl py-2 border-black focus:outline-none mt-2' />
                                </div>
                                <button className='mt-7 md:mt-9 bg-black px-7 py-2 text-xl text-white font-semibold'>
                                    Apply Now
                                </button>
                            </div>
                            <div className='flex justify-center mt-10 px-4'>
                                <button className='w-full max-w-md bg-black text-xl font-semibold text-white py-3'>
                                    Confirm Reservation
                                </button>
                            </div>
                        </>
                    ) : (
                        // yaha login vala component bana ga
                        <div className='text-center px-4'>
                            <h2 className="text-xl font-semibold mb-2">Login</h2>
                            <p>Welcome back! Please log in to your account.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default SignandLogin
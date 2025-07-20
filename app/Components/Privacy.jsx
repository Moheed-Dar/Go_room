import React from 'react';

const Privacy = () => {
    return (
        <>
            <div className='mt-20 w-full mask-radial-from-neutral-50'>
                <h1 className='text-4xl md:text-7xl font-bold flex items-center justify-center text-center px-4'>
                    PRIVACY POLICY
                </h1>
            </div>
            <div className="flex flex-col md:flex-row mt-5 px-6 md:px-20">
                <div className='md:basis-1/4 mt-10 w-full'>
                    <ul className='leading-9 md:ps-10 ps-0 text-center md:text-left'>
                        <li><a href="#" className='font-bold'>Lorem, ipsum</a></li>
                        <li><a href="#">Lorem, ipsum</a></li>
                        <li><a href="#">Lorem, ipsum</a></li>
                        <li><a href="#">Lorem, ipsum</a></li>
                        <li><a href="#">Lorem, ipsum</a></li>
                        <li><a href="#">Lorem, ipsum</a></li>
                    </ul>
                </div>
                <div className='md:basis-2/3 mt-10 md:ms-20 w-full'>
                    <p className='text-justify md:pe-20 leading-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                    <p className='text-justify md:pe-20 mt-6 leading-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                    <p className='text-justify md:pe-20 mt-6 leading-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                    <p className='text-justify md:pe-20 mt-6 leading-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                </div>
            </div>
        </>
    );
};

export default Privacy;

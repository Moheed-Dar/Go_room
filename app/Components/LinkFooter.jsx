import React from 'react'

const LinkFooter = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:text-start text-center  md:grid-cols-5 gap-6 md:mt-25 md:px-2  md:mb-10 ' >
        <div className='md:ps-10' >
                <h1 className='font-bold pb-3' >Go_room</h1>
                <p className='text-gray-800'>Redefining hospitality<br/>with small luxury, sustainability, and heart.</p>
        </div>
        <div className='md:ps-15  ' >
            <h1 className='font-bold pb-3' >ABOUT US</h1>
            <ul className='leading-8 text-gray-800' >
                <li><a href='#' >Our Hotels</a></li>
                <li><a href='#' >Sustainability</a></li>
                <li><a href='#' >Partners</a></li>
            </ul>
        </div>
        <div className='md:ps-15'>
            <h1  className='font-bold pb-3' >COMPANY</h1>
            <ul  className='leading-8 text-gray-800' >
                <li><a href='#' >Lorem</a></li>
                <li><a href='#' >Lorem</a></li>
                <li><a href='#' >Lorem</a></li>
            </ul>
        </div>
        <div className='md:ps-15'>
            <h1  className='font-bold pb-3' >LEGAL</h1>
            <ul  className='leading-8 text-gray-800' >
                <li><a  href='#'>Terms of service</a></li>
                <li><a  href='#'> Privacy & policy</a></li>
                <li><a  href='#'>Lorem</a></li>
            </ul>
        </div>
        <div className='md:ps-15'  >
            <h1  className='font-bold pb-3 ' >SOCIAL</h1>
            <ul className='leading-8  text-gray-800' >
                <li><a  href='#'>Facebook</a></li>
                <li><a  href='#'>Instagram</a></li>
                <li><a  href='#'>Twitter</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default LinkFooter
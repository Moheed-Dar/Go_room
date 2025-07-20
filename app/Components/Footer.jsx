import React from 'react'

const Footer = () => {
  return (
    <div className=' grid grid-cols-1 text-center gap-3 md:gap-0 md:text-start md:grid-cols-3 mt-10 py-2 md:mt-20 bg-gray-100 md:py-3 justify-between items-center  md:px-5' >
        <div>
            <a className='font-semibold text-sm md:text-md' >Accessibility</a>
        </div>
        <div>
            <a className=' font-semibold justify-center  text-sm md:text-md flex ' >All rights recerved 2025@go_room</a>
        </div>
        <div  >
        <a  className='font-semibold md:justify-end text-sm justify-center flex items-center' >Legal Information</a>
        </div>
    </div>
  )
}
export default Footer
import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-3 mt-20 bg-gray-100 py-3 justify-between  px-5' >
        <div>
            <a className='font-semibold text-md' >Accessibility</a>
        </div>
        
        <div>
            <a className=' font-semibold justify-center flex ' >All rights recerved 2025@go_room</a>
        </div>
        <div  >
        <a  className='font-semibold justify-end flex items-center' >Legal Information</a>
        </div>

    </div>
  )
}

export default Footer
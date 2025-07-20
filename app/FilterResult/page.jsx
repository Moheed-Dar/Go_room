// "use client";
// import { faBed, faCircleUser, faEllipsis, faGreaterThan, faHeart, faPaw, faRestroom, faSliders, faSquareParking, faXmark } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Image from 'next/image'
// import React from 'react'
// import FilterResultAuthdb from '@/app/Database/FilterResultAuthdb'
// import FilterResultdb from '@/app/Database/FilterResultdb'
// import dynamic from "next/dynamic";
// import SearchResultDB from '@/app/Database/SearchResultDB';
// import { useRouter } from 'next/navigation'
// import LinkFooter from '../Components/LinkFooter';
// import Footer from '../Components/Footer';

// const MapComp = dynamic(() => import('./MapComp'), {
//     ssr: false,
// })
// const filters = ["100 Smart Street", "12 Mar 2021", "Short Period"];
// const FilterResult = () => {
//     const router = useRouter()
//           const Backbutton = () => {
//               router.push('/Search-Result')
//           }
//     return (
//         <>
//             <div className='grid grid-cols-10 gap-4 mt-15' >
//                 <div className='ms-10 col-span-4 '>
//                     <h1 className='text-lg font-semibold ' >10 Results Found</h1>
//                     <div className=' relative flex items-center gap-2 flex-wrap mb-6 mt-3'>
//                         {filters.map((filter, index) => (
//                             <button
//                                 key={index}
//                                 className='flex items-center cursor-pointer justify-center bg-[rgb(224,226,230)] px-2 py-2 text-[13px]'
//                             >
//                                 {filter}
//                                 <FontAwesomeIcon className='w-3 ms-1' icon={faXmark} />
//                             </button>
//                         ))}
//                         <div className='absolute right-1 flex items-center justify-end  '>
//                             <div className='px-3 py-2 border hover:bg-black hover:text-white transition-all duration-500 ease-in-out cursor-pointer hover:rounded-lg  border-black flex items-center justify-center gap-2'>
//                                 <div className=' ps-2  flex items-center justify-center'>
//                                     <FontAwesomeIcon className='w-5' icon={faSliders} />
//                                 </div>
//                                 <span>Filter</span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='w-full '>
//                         <div className="relative w-full mb-3  h-[320px] bg-gray-300 ">
//                             <Image
//                                 alt="no image found" src='/img9.png' className="object-cover brightness-90  " fill priority />
//                             <div className="absolute top-2 right-2 p-1">
//                                 <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-white" />
//                             </div>
//                             <div className='absolute bottom-6  left-4 text-white text-md flex items-center'>
//                                 <FontAwesomeIcon  style={{width:'50px', height:'50px'}} icon={faCircleUser} />
//                                 <div className='mt-2 ms-3 leading-4 text-black px-2 py-1 rounded'>
//                                     <h1 className='text-[14px] mb-1'>Listed By:</h1>
//                                     <h1 className='text-[22px] mb-2 font-semibold'>{FilterResultAuthdb.name}</h1>
//                                     <h1 className='text-[14px]'>For: {FilterResultAuthdb.price}</h1>
//                                 </div>
//                             </div>
//                             <div className='absolute bottom-5 right-2' >
//                                 <FontAwesomeIcon icon={faEllipsis} className='w-9 h-9 text-white' />
//                             </div>
//                         </div>
//                         <div className='w-full border ps-3 border-black ' >
//                             <div className='mb-2' >
//                                 <h1 className='mt-2  text-lg font-bold'>{FilterResultdb.name}</h1>
//                                 <h3 className='text-md text-gray-500'>{FilterResultdb.address}</h3>
//                             </div>
//                             <div className='flex items-center justify-start '  >
//                                 <div className='flex gap-1' >
//                                     <FontAwesomeIcon className='w-5 text-gray-700' icon={faBed} />
//                                     <h1 className='text-xl' >{FilterResultdb.bedrooms}</h1>
//                                 </div>
//                                 <div className='flex gap-1 ml-4' >
//                                     <FontAwesomeIcon className='w-5  text-gray-700' icon={faRestroom} />
//                                     <h1 className='text-xl' >{FilterResultdb.bathrooms}</h1>
//                                 </div>
//                                 <div className='flex gap-1 ml-4' >
//                                     <FontAwesomeIcon className='w-5  text-gray-700' icon={faPaw} />
//                                     <h1 className='text-xl' >{FilterResultdb.pat}</h1>
//                                 </div>
//                                 <div className='flex gap-1 ml-4' >
//                                     <FontAwesomeIcon className='w-5  text-gray-700' icon={faSquareParking} />
//                                     <h1 className='text-xl' >{FilterResultdb.parking}</h1>
//                                 </div>
//                             </div>
//                             <div className='mt-2 mb-3 text-sm ' >
//                                 <span>Apartment on Rent &nbsp;</span> | <span>&nbsp;For Long Period: 1 - 2 years</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='col-span-6 mx-5 ps-5 relative '>
//                     <MapComp />
//                 </div>
//             </div>
//             <div className='grid grid-cols-4 mt-15  gap-8 px-6 ' >
//                 {SearchResultDB.slice(0, 4).map((item, index) => (
//                     <div key={index} >
//                         <div className="relative w-[310px] h-[300px]">
//                             <Image
//                                 alt="no image found" src={item.img} className="object-cover  " fill />
//                             <div className="absolute top-2 right-2 p-1">
//                                 <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-white" />
//                             </div>
//                             <div className='absolute bottom-3 left-4 text-white text-md ' >
//                                 <span>{item.Price}</span>
//                             </div>
//                             <div className='absolute bottom-2 right-2' >
//                                 <FontAwesomeIcon icon={faEllipsis} className='w-9 h-9 text-white' />
//                             </div>
//                         </div>
//                         <div className='flex items-center justify-between bg-white ' >
//                             <div className='' >
//                                 <h1 className='mt-2  text-md font-bold'>{item.Name}</h1>
//                                 <h3 className='text-sm text-gray-500'>{item.discrip}</h3>
//                             </div>
//                             <div className=' bg-black  flex items-center justify-center  w-10 h-10 ' >
//                                 <FontAwesomeIcon className='text-white w-3 ' icon={faGreaterThan} />
//                             </div>
//                         </div>
//                     </div>
//                 ))
//                 }
//             </div>
//             <div className='flex items-center justify-between mx-10 gap-5  ' >
//                 <button onClick={Backbutton} className='bg-black text-white transition-all duration-500 ease-in-out cursor-pointer hover:rounded-2xl  px-10 py-3  mt-10 mb-8 text-lg' >Back</button>
//                 <button className='bg-black text-white transition-all duration-500 ease-in-out cursor-pointer hover:rounded-2xl  px-10 py-3  mt-10 mb-8 text-lg' >Load More</button>
                
//             </div>
//             <LinkFooter/>
//             <Footer/>
//         </>
//     )
// }

// export default FilterResult

"use client";
import { faBed, faCircleUser, faEllipsis, faGreaterThan, faHeart, faPaw, faRestroom, faSliders, faSquareParking, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import FilterResultAuthdb from '@/app/Database/FilterResultAuthdb'
import FilterResultdb from '@/app/Database/FilterResultdb'
import dynamic from "next/dynamic";
import SearchResultDB from '@/app/Database/SearchResultDB';
import { useRouter } from 'next/navigation'
import LinkFooter from '../Components/LinkFooter';
import Footer from '../Components/Footer';

const MapComp = dynamic(() => import('./MapComp'), {
    ssr: false,
})

const filters = ["100 Smart Street", "12 Mar 2021", "Short Period"];

const FilterResult = () => {
    const router = useRouter()
    const Backbutton = () => {
        router.push('/Search-Result')
    }
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-10 gap-4 mt-15'>
                <div className='md:ms-5 mx-2 md:mx-0 lg:ms-10 col-span-1 lg:col-span-4'>
                    <h1 className='text-lg font-semibold'>10 Results Found</h1>
                    <div className='relative flex items-center gap-2 flex-wrap mb-6 mt-3'>
                        {filters.map((filter, index) => (
                            <button
                                key={index}
                                className='flex items-center cursor-pointer justify-center bg-[rgb(224,226,230)] px-2 py-2 text-[13px]'
                            >
                                {filter}
                                <FontAwesomeIcon className='w-3 ms-1' icon={faXmark} />
                            </button>
                        ))}
                        <div className='absolute right-1 flex items-center justify-end'>
                            <div className='px-3 py-2 border hover:bg-black hover:text-white transition-all duration-500 ease-in-out cursor-pointer hover:rounded-lg border-black flex items-center justify-center gap-2'>
                                <div className='ps-2 flex items-center justify-center'>
                                    <FontAwesomeIcon className='w-5' icon={faSliders} />
                                </div>
                                <span>Filter</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="relative w-full mb-3 h-[320px] bg-gray-300">
                            <Image
                                alt="no image found" src='/img9.png' className="object-cover brightness-90" fill priority />
                            <div className="absolute top-2 right-2 p-1">
                                <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-white" />
                            </div>
                            <div className='absolute bottom-6 left-4 text-white text-md flex items-center'>
                                <FontAwesomeIcon style={{ width: '50px', height: '50px' }} icon={faCircleUser} />
                                <div className='mt-2 ms-3 leading-4 text-black px-2 py-1 rounded'>
                                    <h1 className='text-[14px] mb-1'>Listed By:</h1>
                                    <h1 className='text-[22px] mb-2 font-semibold'>{FilterResultAuthdb.name}</h1>
                                    <h1 className='text-[14px]'>For: {FilterResultAuthdb.price}</h1>
                                </div>
                            </div>
                            <div className='absolute bottom-5 right-2'>
                                <FontAwesomeIcon icon={faEllipsis} className='w-9 h-9 text-white' />
                            </div>
                        </div>
                        <div className='w-full border ps-3 border-black'>
                            <div className='mb-2'>
                                <h1 className='mt-2 text-lg font-bold'>{FilterResultdb.name}</h1>
                                <h3 className='text-md text-gray-500'>{FilterResultdb.address}</h3>
                            </div>
                            <div className='flex flex-wrap items-center justify-start'>
                                <div className='flex gap-1 mb-2'>
                                    <FontAwesomeIcon className='w-5 text-gray-700' icon={faBed} />
                                    <h1 className='text-xl'>{FilterResultdb.bedrooms}</h1>
                                </div>
                                <div className='flex gap-1 ml-4 mb-2'>
                                    <FontAwesomeIcon className='w-5 text-gray-700' icon={faRestroom} />
                                    <h1 className='text-xl'>{FilterResultdb.bathrooms}</h1>
                                </div>
                                <div className='flex gap-1 ml-4 mb-2'>
                                    <FontAwesomeIcon className='w-5 text-gray-700' icon={faPaw} />
                                    <h1 className='text-xl'>{FilterResultdb.pat}</h1>
                                </div>
                                <div className='flex gap-1 ml-4 mb-2'>
                                    <FontAwesomeIcon className='w-5 text-gray-700' icon={faSquareParking} />
                                    <h1 className='text-xl'>{FilterResultdb.parking}</h1>
                                </div>
                            </div>
                            <div className='mt-2 mb-3 text-sm'>
                                <span>Apartment on Rent &nbsp;</span> | <span>&nbsp;For Long Period: 1 - 2 years</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-6 md:mx-5 md:ps-5 mx-2 relative'>
                    <MapComp />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-15 gap-8 px-6'>
                {SearchResultDB.slice(0, 4).map((item, index) => (
                    <div key={index} className='w-full'>
                        <div className="relative w-full h-[300px]">
                            <Image
                                alt="no image found" src={item.img} className="object-cover " fill />
                            <div className="absolute top-2 right-2 p-1">
                                <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-white" />
                            </div>
                            <div className='absolute bottom-3 left-4 text-white text-md'>
                                <span>{item.Price}</span>
                            </div>
                            <div className='absolute bottom-2 right-2'>
                                <FontAwesomeIcon icon={faEllipsis} className='w-9 h-9 text-white' />
                            </div>
                        </div>
                        <div className='flex items-center justify-between bg-white'>
                            <div>
                                <h1 className='mt-2 text-md font-bold'>{item.Name}</h1>
                                <h3 className='text-sm text-gray-500'>{item.discrip}</h3>
                            </div>
                            <div className='bg-black flex items-center justify-center w-10 h-10'>
                                <FontAwesomeIcon className='text-white w-3' icon={faGreaterThan} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between mx-10 gap-5'>
                <button onClick={Backbutton} className='bg-black text-white transition-all duration-500 ease-in-out cursor-pointer hover:rounded-2xl px-10 py-3 mt-10 mb-8 text-lg'>Back</button>
                <button className='bg-black text-white transition-all duration-500 ease-in-out cursor-pointer hover:rounded-2xl px-10 py-3 mt-10 mb-8 text-lg'>Load More</button>
            </div>

            <LinkFooter />
            <Footer />
        </>
    )
}

export default FilterResult


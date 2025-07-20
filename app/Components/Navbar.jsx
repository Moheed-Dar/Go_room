// 'use client'
// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { faBars, faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const Navbar = ({ activeTab, setActiveTab }) => {
//     const router = useRouter()
//     const [menuOpen, setMenuOpen] = useState(false)

//     const Userpage = () => {
//         router.push('/UserDetails')
//     }

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen)
//     }

//     const handleTabClick = (tab) => {
//         setActiveTab(tab)
//         setMenuOpen(false)
//     }

//     const navItems = ['Home', 'Gallery', 'About Us', 'Contact']

//     return (
//         <div className="w-full  sticky top-0 bg-white z-50">
//             <div className="flex items-center justify-between px-6 py-4">

//                 <div className="text-xl font-bold">Go-room</div>

//                 <ul className="hidden md:flex gap-8 text-sm md:text-md lg:text-lg font-medium">
//                     {navItems.map((item, index) => (
//                         <li
//                             key={index}
//                             onClick={() => handleTabClick(item)}
//                             className={`cursor-pointer pb-1 transition-all duration-300 
//                                       ${activeTab === item
//                                     ? 'border-b-2 border-gray-800 font-bold'
//                                     : 'hover:border-b-2 hover:border-gray-400'}
//     `}
//                         >
//                             {item}
//                         </li>
//                     ))}
//                 </ul>

//                 <div className="hidden md:flex items-center gap-3">
//                     <div className="bg-black text-white px-5 py-2 rounded-tr-4xl hover:rounded-bl-4xl transition-all ease-in-out duration-300  cursor-pointer hover:bg-yellow-700 ">
//                         <button className="text-sm">Book Now</button>
//                         <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-gray-300" />
//                     </div>
//                     <button
//                         onClick={Userpage}
//                         className="w-10 h-10 rounded-full cursor-pointer bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
//                     >
//                         <span className="text-sm font-semibold">U</span>
//                     </button>
//                 </div>

//                 <button onClick={toggleMenu} className="md:hidden text-xl">
//                     <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
//                 </button>
//             </div>

//             {/* Responsive design is below for mobiles screen etc */}
//             {menuOpen && (
//                 <ul className="md:hidden flex flex-col px-6 py-4 gap-4 bg-gray-100 font-medium text-sm absolute top-full right-0 w-[200px] shadow-md z-50">
//                     {navItems.map((item, index) => (
//                         <li
//                             key={index}
//                             onClick={() => handleTabClick(item)}
//                             className={`cursor-pointer ${activeTab === item ? 'font-bold underline' : ''
//                                 }`}
//                         >
//                             {item}
//                         </li>
//                     ))}
//                     <button
//                         onClick={Userpage}
//                         className=" mt-2 w-10 h-10 p-3 rounded-full bg-gray-300 text-center hover:bg-gray-400 transition"
//                     >
//                         U
//                     </button>
//                 </ul>
//             )}
//         </div>
//     )
// }

// export default Navbar


// 'use client'
// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { faBars, faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const Navbar = ({ activeTab, setActiveTab }) => {
//     const router = useRouter()
//     const [menuOpen, setMenuOpen] = useState(false)

//     const Userpage = () => {
//         router.push('/UserDetails')
//     }

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen)
//     }

//     const handleTabClick = (tab) => {
//         setActiveTab(tab)
//         setMenuOpen(false)

//         // Route change based on tab name
//         if (tab === 'Home') router.push('/')
//         else if (tab === 'Gallery') router.push('/Gallery')
//         else if (tab === 'About Us') router.push('/AboutUs')
//         else if (tab === 'Contact') router.push('/Contact')
//     }

//     const navItems = ['Home', 'Gallery', 'About Us', 'Contact']

//     return (
//         <div className="w-full sticky top-0 bg-white z-50">
//             <div className="flex items-center justify-between px-6 py-4">

//                 <div className="text-xl font-bold">Go-room</div>

//                 <ul className="hidden md:flex gap-8 text-sm md:text-md lg:text-lg font-medium">
//                     {navItems.map((item, index) => (
//                         <li
//                             key={index}
//                             onClick={() => handleTabClick(item)}
//                             className={`cursor-pointer pb-1 transition-all duration-300 
//                                 ${activeTab === item
//                                     ? 'border-b-2 border-gray-800 font-bold'
//                                     : 'hover:border-b-2 hover:border-gray-400'}
//                                 `}
//                         >
//                             {item}
//                         </li>
//                     ))}
//                 </ul>

//                 <div className="hidden md:flex items-center gap-3">
//                     <div className="bg-black text-white px-5 py-2 rounded-tr-4xl hover:rounded-bl-4xl transition-all ease-in-out duration-300 cursor-pointer hover:bg-yellow-700">
//                         <button className="text-sm">Book Now</button>
//                         <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-gray-300" />
//                     </div>
//                     <button
//                         onClick={Userpage}
//                         className="w-10 h-10 rounded-full cursor-pointer bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
//                     >
//                         <span className="text-sm font-semibold">U</span>
//                     </button>
//                 </div>

//                 <button onClick={toggleMenu} className="md:hidden text-xl">
//                     <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <ul className="md:hidden flex flex-col px-6 py-4 gap-4 bg-gray-100 font-medium text-sm absolute top-full right-0 w-[200px] shadow-md z-50">
//                     {navItems.map((item, index) => (
//                         <li
//                             key={index}
//                             onClick={() => handleTabClick(item)}
//                             className={`cursor-pointer ${activeTab === item ? 'font-bold underline' : ''}`}
//                         >
//                             {item}
//                         </li>
//                     ))}
//                     <button
//                         onClick={Userpage}
//                         className="mt-2 w-10 h-10 p-3 rounded-full bg-gray-300 text-center hover:bg-gray-400 transition"
//                     >
//                         U
//                     </button>
//                 </ul>
//             )}
//         </div>
//     )
// }

// export default Navbar

// 'use client'
// import React, { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { faBars, faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const Navbar = () => {
//   const router = useRouter()
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [activeTab, setActiveTab] = useState('Home') // FIXED: internal state

//   const Userpage = () => {
//     router.push('/UserDetails')
//   }

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen)
//   }

//   const handleTabClick = (tab) => {
//     setActiveTab(tab)
//     setMenuOpen(false)

//     if (tab === 'Home') router.push('/')
//     else if (tab === 'Gallery') router.push('/Gallery')
//     else if (tab === 'About Us') router.push('/AboutUs')
//     else if (tab === 'Contact') router.push('/Contact')
//   }

//   const navItems = ['Home', 'Gallery', 'About Us', 'Contact']

//   return (
//     <div className="w-full sticky top-0 bg-white z-50">
//       <div className="flex items-center justify-between px-6 py-4">
//         <div className="text-xl font-bold">Go-room</div>

//         <ul className="hidden md:flex gap-8 text-sm md:text-md lg:text-lg font-medium">
//           {navItems.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => handleTabClick(item)}
//               className={`cursor-pointer pb-1 transition-all duration-300 
//                 ${activeTab === item
//                   ? 'border-b-2 border-gray-800 font-bold'
//                   : 'hover:border-b-2 hover:border-gray-400'}
//                 `}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>

//         <div className="hidden md:flex items-center gap-3">
//           <div className="bg-black text-white px-5 py-2 rounded-tr-4xl hover:rounded-bl-4xl transition-all ease-in-out duration-300 cursor-pointer hover:bg-yellow-700">
//             <button className="text-sm">Book Now</button>
//             <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-gray-300" />
//           </div>
//           <button
//             onClick={Userpage}
//             className="w-10 h-10 rounded-full cursor-pointer bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
//           >
//             <span className="text-sm font-semibold">U</span>
//           </button>
//         </div>

//         <button onClick={toggleMenu} className="md:hidden text-xl">
//           <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
//         </button>
//       </div>

//       {menuOpen && (
//         <ul className="md:hidden flex flex-col px-6 py-4 gap-4 bg-gray-100 font-medium text-sm absolute top-full right-0 w-[200px] shadow-md z-50">
//           {navItems.map((item, index) => (
//             <li
//               key={index}
//               onClick={() => handleTabClick(item)}
//               className={`cursor-pointer ${activeTab === item ? 'font-bold underline' : ''}`}
//             >
//               {item}
//             </li>
//           ))}
//           <button
//             onClick={Userpage}
//             className="mt-2 w-10 h-10 p-3 rounded-full bg-gray-300 text-center hover:bg-gray-400 transition"
//           >
//             U
//           </button>
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Navbar



'use client'
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { faBars, faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const Userpage = () => {
    router.push('/UserDetails')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleTabClick = (tab) => {
    setMenuOpen(false)
    if (tab === 'Home') router.push('/')
    else if (tab === 'Gallery') router.push('/Gallery')
    else if (tab === 'About Us') router.push('/AboutUs')
    else if (tab === 'Contact') router.push('/Contact')
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/Gallery' },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Contact', path: '/Contact' }
  ]

  return (
    <div className="w-full sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">Go-room</div>

        <ul className="hidden md:flex gap-8 text-sm md:text-md lg:text-lg font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(item.name)}
              className={`cursor-pointer pb-1 transition-all duration-300 
                ${pathname === item.path
                  ? 'border-b-2 border-gray-800 font-bold'
                  : 'hover:border-b-2 hover:border-gray-400'}`}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div className="bg-black text-white px-5 py-2 rounded-tr-4xl hover:rounded-bl-4xl transition-all ease-in-out duration-300 cursor-pointer hover:bg-yellow-700">
            <button className="text-sm">Book Now</button>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-gray-300" />
          </div>
          <button
            onClick={Userpage}
            className="w-10 h-10 rounded-full cursor-pointer bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
          >
            <span className="text-sm font-semibold">U</span>
          </button>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-xl">
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col px-6 py-4 gap-4 bg-gray-100 font-medium text-sm absolute top-full right-0 w-[200px] shadow-md z-50">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(item.name)}
              className={`cursor-pointer ${pathname === item.path ? 'font-bold underline' : ''}`}
            >
              {item.name}
            </li>
          ))}
          <button
            onClick={Userpage}
            className="mt-2 w-10 h-10 p-3 rounded-full bg-gray-300 text-center hover:bg-gray-400 transition"
          >
            U
          </button>
        </ul>
      )}
    </div>
  )
}

export default Navbar

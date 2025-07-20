

'use client'
import {
  faEllipsis,
  faGreaterThan,
  faHeart,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SearchResultDB from "../Database/SearchResultDB";
import LinkFooter from "../Components/LinkFooter";
import Footer from "../Components/Footer";
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  const Filterpage = () => {
    router.push('/FilterResult')
  }

  return (
    <>
      <div className="grid grid-cols-4 justify-between items-center mb-5 px-5">
        <div className="mt-10 col-span-3">
          <ul className="flex flex-wrap gap-4 sm:gap-8 md:gap-10">
            {["Apartments", "Houses", "Villas", "Homestays", "Villas", "More"].map((item, index) => (
              <li key={index} className="relative cursor-pointer group px-2 py-1 group-hover:font-semibold">
                {item}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex col-span-1 items-center justify-end mt-10">
          <div className="px-5 sm:px-10 py-2 border hover:bg-black hover:text-white transition-all duration-500 cursor-pointer hover:rounded-lg border-black flex items-center gap-2">
            <FontAwesomeIcon className="w-5" icon={faSliders} />
            <span>Filter</span>
          </div>
        </div>
      </div>
      

      <div
        onClick={Filterpage}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 pb-5"
      >
        {SearchResultDB.map((item, index) => (
          <div key={index} className="w-full">
            <div className="relative w-full h-64 md:h-72 lg:h-[300px]">
              <Image
                alt="no image found"
                src={item.img}
                className="object-cover rounded-md"
                fill
              />
              <div className="absolute top-2 right-2 p-1">
                <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-white" />
              </div>
              <div className="absolute bottom-3 left-4 text-white text-md">
                <span>{item.Price}</span>
              </div>
              <div className="absolute bottom-2 right-2">
                <FontAwesomeIcon icon={faEllipsis} className="w-9 h-9 text-white" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-white mt-2">
              <div>
                <h1 className="text-md font-bold">{item.Name}</h1>
                <h3 className="text-sm text-gray-500">{item.discrip}</h3>
              </div>
              <div className="bg-black flex items-center justify-center w-10 h-10">
                <FontAwesomeIcon className="text-white w-3" icon={faGreaterThan} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-black text-white transition-all duration-500 cursor-pointer hover:rounded-2xl px-8 py-3 mt-10 mb-8 text-lg">
          Load More
        </button>
      </div>

      <LinkFooter />
      <Footer />
    </>
  );
};

export default Page;

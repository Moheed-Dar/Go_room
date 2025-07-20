import React from 'react';

const FaQ = () => {
  return (
    <>
      <div className="mt-18 w-full text-center mask-radial-from-neutral-50">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold" >FREQUENTLY ASKED</h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">QUESTIONS</h1>
      </div>

      <div className="mt-12 px-4 md:px-16 lg:px-36">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 py-6"
          >
            <h1 className="text-gray-800 text-base md:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit?
            </h1>
            <div className="text-gray-800 text-2xl md:text-3xl mt-2 md:mt-0 md:pe-4">
              +
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-16 mb-10">
          <div className="bg-black text-white flex items-center justify-center h-14 w-72 font-semibold text-lg md:text-xl">
            <button>Let's Connect</button>
            <h1 className="ps-3 text-2xl md:text-3xl">→</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaQ;

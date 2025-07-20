// import React from 'react'

// const Detail4 = () => {
//   const ratings = [
//     [
//       { label: 'Amenities', score: 5.0 },
//       { label: 'Communication', score: 5.0 }
//     ],
//     [
//       { label: 'Amenities', score: 5.0 },
//       { label: 'Communication', score: 5.0 }
//     ],
//     [
//       { label: 'Communication', score: 5.0 }
//     ]
//   ];

//   return (
//     <div className="p-6 bg-white">
//       {ratings.map((group, groupIndex) => (
//         <div key={groupIndex} className="mb-6 grid grid-cols-3">
//           {group.map((rating, index) => (
//             <div key={index} className=" items-center mb-2">
//               <span className="text-gray-800 font-medium">{rating.label}</span>
//               <div className="flex items-center ml-8 col-span-2">
//                 <div className="w-32 h-1 bg-gray-300 rounded-full mr-4">
//                   <div
//                     className="h-1 bg-gray-600 rounded-full"
//                     style={{ width: `${(rating.score / 5) * 100}%` }}
//                   ></div>
//                 </div>
//                 <span className="text-gray-800 font-medium min-w-[2rem] text-right">
//                   {rating.score.toFixed(1)}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Detail4;

import React from 'react'

const Detail4 = () => {
    const ratings = [
        { label: 'Amenities', score: 5.0 },
        { label: 'Communication', score: 5.0 },
        { label: 'Hygiene', score: 5.0 },
        { label: 'Location of Property', score: 5.0 },
        { label: 'Value for Money', score: 5.0 }
    ];

    return (
        <div className="w-full px-15  mt-10 p-6 bg-white">
           <div className="flex items-center text-start  gap-10 mb-8">
                <span className="text-black text-xl font-bold">Reviews</span>
                <span className="text-black font-bold text-lg">5.0</span>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-3 md:gap-0 gap-2 md:gap-x-8">
                <div className="space-y-4">
                    {ratings.slice(0, 2).map((rating, index) => (
                        <div key={index} className="flex items-center me-10  justify-between">
                            <span className="text-gray-900 font-medium text-sm mr-4">
                                {rating.label}
                            </span>
                            <div className="flex items-center">
                                <div className="w-24 h-1 bg-gray-300 rounded-full mr-3">
                                    <div
                                        className="h-1 bg-gray-600 rounded-full"
                                        style={{ width: `${(rating.score / 5) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="text-gray-900 font-medium text-sm min-w-[2rem] text-right">
                                    {rating.score.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="space-y-4">
                    {ratings.slice(2, 4).map((rating, index) => (
                        <div key={index + 2} className="flex items-center me-10 justify-between">
                            <span className="text-gray-900 font-medium text-sm mr-4">
                                {rating.label}
                            </span>
                            <div className="flex items-center">
                                <div className="w-24 h-1 bg-gray-300 rounded-full mr-3">
                                    <div
                                        className="h-1 bg-gray-600 rounded-full"
                                        style={{ width: `${(rating.score / 5) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="text-gray-900 font-medium text-sm min-w-[2rem] text-right">
                                    {rating.score.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="space-y-4 ">
                    {ratings.slice(4).map((rating, index) => (
                        <div key={index + 4} className="flex items-center  me-10 justify-between">
                            <span className="text-gray-900 font-medium  text-sm mr-4">
                                {rating.label}
                            </span>
                            <div className="flex items-center">
                                <div className="w-24 h-1 bg-gray-300 rounded-full mr-3">
                                    <div
                                        className="h-1 bg-gray-600 rounded-full"
                                        style={{ width: `${(rating.score / 5) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="text-gray-900 font-medium text-sm min-w-[2rem] text-right">
                                    {rating.score.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Detail4
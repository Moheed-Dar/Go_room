import React from 'react';

const TaC = () => {
    return (
        <>
            <div className="mt-20 w-full text-center mask-radial-from-neutral-50">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">TERMS &</h1>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">CONDITIONS</h1>
            </div>

            <div className="grid grid-cols-1 w-full px-4 md:px-20 mb-28">
                <div className="font-bold text-xl md:text-2xl mb-6 mt-16">
                    <h1>Your Agreement</h1>
                </div>

                <div
                    id="textid"
                    className="h-[400px] overflow-x-hidden overflow-y-scroll pr-4 text-lg leading-8"
                >
                    {[...Array(8)].map((_, i) => (
                        <p key={i} className="text-justify mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4">
                    <div className="flex items-start sm:items-center">
                        <input type="checkbox" className="w-6 h-6 mt-1 sm:mt-0" />
                        <label className="pl-4 text-sm sm:text-base font-medium">
                            I confirm that I have read and accept the terms and conditions and privacy policy.
                        </label>
                    </div>

                    <div className="flex flex-row sm:flex-row gap-3 sm:ml-auto">
                        <button className="px-6 py-2 border border-gray-500 text-sm sm:text-base">Cancel</button>
                        <button className="px-6 py-2 border border-black bg-black text-white text-sm sm:text-base">
                            Accept <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaC;


import Image from 'next/image';
import React from 'react';

const Hero3 = () => {
  return (
    <>
      <div className="md:my-15 my-5  w-full mask-radial-from-neutral-50 px-4 sm:px-6 md:px-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">HOTEL GALLERIES</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6">

        <div>
          <Image src="/img7.png" alt="The Plaza Hotel" width={1000} height={230} className="w-full h-[230px] object-cover rounded"/>
          <p className="mt-2 text-sm text-center sm:text-left">
            The Plaza Hotel<br />
            <strong>New York City, USA</strong>
          </p>
        </div>
        <div className="sm:row-span-2 lg:row-span-2">
          <Image src="/img9.png" alt="Burj Al Arab Jumeirah" width={1000} height={560} className="w-full h-[560px] object-cover rounded"/>
          <p className="mt-2 text-sm text-center sm:text-left">
            Burj Al Arab Jumeirah<br />
            <strong>Dubai, UAE</strong>
          </p>
        </div>
        <div>
          <Image src="/img8.png" alt="Le Bristol Paris" width={1000} height={230} className="w-full h-[230px] object-cover rounded" />
          <p className="mt-2 text-sm text-center sm:text-left">
            Le Bristol Paris<br />
            <strong>Paris, France</strong>
          </p>
        </div>
        <div>
          <Image  src="/img10.png"  alt="The Savoy"  width={1000}  height={230}  className="w-full h-[230px] object-cover rounded" />
          <p className="mt-2 text-sm text-center sm:text-left">
            The Savoy<br />
            <strong>London, UK</strong>
          </p>
        </div>
        <div>
          <Image src="/img11.png" alt="Mandarin Oriental Bangkok" width={1000} height={230} className="w-full h-[230px] object-cover rounded"/>
          <p className="mt-2 text-sm text-center sm:text-left">
            Mandarin Oriental Bangkok<br />
            <strong>Bangkok, Thailand</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero3;

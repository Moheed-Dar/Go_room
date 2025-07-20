// components/MapComponent.jsx
"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react'
import L from 'leaflet';

import Image from 'next/image';
import MapChilddb from '@/app/Database/MapChilddb';
import FilterResultdb from '@/app/Database/FilterResultdb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPaw, faRestroom, faSquareParking } from '@fortawesome/free-solid-svg-icons';

const customIcon = L.icon({
    iconUrl: '/location.png',
    iconSize: [100, 120],
    iconAnchor: [17, 45],
    popupAnchor: [0, -40]

})
const MapComp = () => {
    return (
        <>
            <div className='relative z-0' style={{ height:'620px', width:'100%' }}>
                <MapContainer center={[33.6395897, 73.1489631]} zoom={13} style={{height:'100%', width:'100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[33.6395897, 73.1489631]} icon={customIcon} >
                        <Popup>
                            Islamabad, Pakistan
                        </Popup>
                    </Marker>
                </MapContainer>
               
                <div className='absolute bottom-5 right-5 md:bottom-25 md:right-25 z-[9999] bg-white shadow-2xl shadow-black w-[95%] md:w-auto max-w-[400px] md:max-w-none grid grid-cols-1 md:grid-cols-3 rounded-lg overflow-hidden'>
                    <div className='col-span-1 h-[150px] md:h-30 w-full md:w-30 bg-white'>
                        <Image
                            alt="image is not found"
                            className='object-cover h-full w-full'
                            src={MapChilddb.img}
                            width={1000}
                            height={100}
                        />
                    </div>
                    <div className='col-span-2 p-4'>
                        <h1 className='font-bold text-base md:text-lg'>{MapChilddb.Name}</h1>
                        <h1 className='text-sm mt-1'>{MapChilddb.discrip}</h1>
                        <div className='flex flex-wrap gap-3 mt-3'>
                            <div className='flex gap-1 items-center'>
                                <FontAwesomeIcon className='w-4 md:w-5 text-black' icon={faBed} />
                                <h1 className='text-sm md:text-base'>{FilterResultdb.bedrooms}</h1>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <FontAwesomeIcon className='w-4 md:w-5 text-black' icon={faRestroom} />
                                <h1 className='text-sm md:text-base'>{FilterResultdb.bathrooms}</h1>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <FontAwesomeIcon className='w-4 md:w-5 text-black' icon={faPaw} />
                                <h1 className='text-sm md:text-base'>{FilterResultdb.pat}</h1>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <FontAwesomeIcon className='w-4 md:w-5 text-black' icon={faSquareParking} />
                                <h1 className='text-sm md:text-base'>{FilterResultdb.parking}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};
export default MapComp;


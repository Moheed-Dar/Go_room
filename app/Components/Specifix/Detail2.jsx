
"use client";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from 'next/image';

const customIcon = L.icon({
    iconUrl: '/location.png',
    iconSize: [100, 120],
    iconAnchor: [17, 45],
    popupAnchor: [0, -40]
});

const Detail2 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-15 mt-10">
            <div>
                <h1 className="text-xl font-bold">Offered Amenities</h1>
                <div className="grid grid-cols-2 mt-6 gap-3">
                    {[
                        { icon: "/kitchen.png", label: "Kitchen" },
                        { icon: "/vector.png", label: "Television with Netflix" },
                        { icon: "/air.png", label: "Air Conditioner" },
                        { icon: "/vector2.png", label: "Free Wireless Internet" },
                        { icon: "/laundry1.png", label: "Television with Netflix" },
                        { icon: "/vector3.png", label: "Balcony or Patio" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 mb-4 text-[16px]">
                            <Image src={item.icon} width={24} height={22} alt={item.label} />
                            <h1>{item.label}</h1>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <button className="px-3 py-2 border border-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
                        Show All 10 Amenities
                    </button>
                </div>
                <div className="mt-8">
                    <h1 className="text-xl font-bold">Safety and Hygiene</h1>
                    <div className="grid grid-cols-2 mt-6 gap-3">
                        {[
                            "Daily Cleaning",
                            "Fire Extinguishers",
                            "Disinfections and Sterilizations",
                            "Smoke Detectors"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 mb-4 text-[16px]">
                                <Image src="/Group2.png" width={24} height={22} alt={item} />
                                <h1>{item}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="relative z-0 rounded-md h-[300px] sm:h-[400px] w-full">
                    <MapContainer
                        center={[33.6395897, 73.1489631]}
                        zoom={13}
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.6395897, 73.1489631]} icon={customIcon}>
                            <Popup>Islamabad, Pakistan</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Detail2;

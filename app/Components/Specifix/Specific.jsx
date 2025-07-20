"use client"
import React from 'react'
import PhotoGrid from './PhotoGrid'
import Detail1 from './Detail1'
import dynamic from "next/dynamic";
import Detail3 from './Detail3';
import Detail4 from './Detail4';
import Detail5 from './Detail5';


const Detail2 = dynamic(() => import("@/app/Components/Specifix/Detail2"), {
    ssr: false,
});
const Specific = () => {
    return (
        <>
            <PhotoGrid />
            <Detail1 />
            <Detail2/>
            <Detail3/>
            <Detail4/>
            <Detail5/>
        </>
    )
}

export default Specific
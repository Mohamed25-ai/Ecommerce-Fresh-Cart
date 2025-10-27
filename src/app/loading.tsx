import React from 'react'
import { ScaleLoader } from 'react-spinners';
export default function loading() {
    return (
        <>
            <div className='h-screen flex items-center justify-center'>
                <ScaleLoader color='#0AAD0A' className='text-[var(--main-color)] ' />
            </div>
        </>
    )
}

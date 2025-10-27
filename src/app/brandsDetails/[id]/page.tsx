import React from 'react'
import Image from 'next/image';
import CATEGORYIMAGE from '@Images/0.png'
import { brandsDetailsType } from './brandsDetails.types';
import { getSpecificBrand } from '../brandsDetails.services';
export default async function page({ params }: brandsDetailsType) {
    const brandsData = await getSpecificBrand(params?.id);
    console.log('brandsData', brandsData);
    return (
        <figure className=' lg:flex justify-between items-center  container mx-auto h-screen'>
            <div className=' lg:w-1/2 relative  h-[250px]'>
                <Image className='object-contain  ' fill src={brandsData?.image || CATEGORYIMAGE} alt={brandsData?.name || "CategorieName"} />
            </div>
            <figcaption className='text-center lg:flex flex-col items-center mt-20 lg:mt-0 lg:w-1/2'>
                <h2 className='text-[var(--main-color)] text-[40px] font-semibold'>{brandsData?.name}</h2>
                <p className='my-3'>{brandsData?.createdAt}</p>
                <p>{brandsData?.updatedAt}</p>
            </figcaption>
        </figure>
    )
}


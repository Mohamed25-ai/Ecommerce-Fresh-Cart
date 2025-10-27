'use client'
import React, { useContext } from 'react'
import { brandContext } from '../BrandsContext/BrandsContext'
import Link from 'next/link';
import Image from 'next/image';
import CATEGORYIMAGE from '@Images/0.png'
import { ScaleLoader } from 'react-spinners';
import CategoriesPagination from '../CategoriesPagination/CategoriesPagination';

export default function BrandsContent() {
    const { brandsAction, brandsProducts, brandssMetaData, isLoading } = useContext(brandContext);
    return (
        <>
            {isLoading && <div className='h-screen flex items-center justify-center'>
                <ScaleLoader color='#0AAD0A' className='text-[var(--main-color)] ' />
            </div>}
            <section className='container mx-auto my-15 px-15 grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20'>
                {brandsProducts.map((brand) => {
                    return <figure key={brand?._id} className="bg-white rounded-t-xl  drop-shadow-xl  shadow-gray-150 relative w-full min-h-[250px] lg:min-h-[150px]    ">
                        <Link href={`/brandsDetails/${brand?._id}`} >
                            <Image className="  rounded-xl" src={brand?.image || CATEGORYIMAGE} alt={brand?.name || "categoryName"} fill />
                            <figcaption className="flex justify-center items-center" >
                                <h2 className="rounded-b-xl bg-white p-2 text-[var(--main-dark)] font-semibold absolute  top-full text-nowrap  w-full flex items-center justify-center">{brand?.name}</h2>
                            </figcaption>
                        </Link>
                    </figure>
                })}
            </section>
            <div className="pagination mt-20">
                <CategoriesPagination paginationFunction={brandsAction} paginationMetaData={brandssMetaData!} />
            </div>
        </>
    )
}

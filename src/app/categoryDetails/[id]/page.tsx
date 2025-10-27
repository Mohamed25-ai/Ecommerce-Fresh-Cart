import React from 'react'
import { categoryDetailsType } from './categoryDetails.types'
import { getSpecificCategorie } from '../categorie.servise';
import Image from 'next/image';
import CATEGORYIMAGE from '@Images/0.png'

type Params = { id: string };
type SearchParams = Record<string, string | string[] | undefined>;

export default async function page({
  params,
}: {
  params: Promise<Params>;
  searchParams?: Promise<SearchParams>;
}) {
  const { id } = await params;
  const categorieData=await getSpecificCategorie(id);
  console.log('categorieData',categorieData);
  return (
    <figure className=' lg:flex justify-between items-center  container mx-auto h-screen'>
      <div className=' lg:w-1/2 relative  h-[350px]'>
      <Image className='object-contain  ' fill src={categorieData?.image||CATEGORYIMAGE} alt={categorieData?.name||"CategorieName"}  />
      </div>
      <figcaption className='text-center lg:flex flex-col items-center mt-20 lg:mt-0 lg:w-1/2'>
        <h2 className='text-[var(--main-color)] text-[40px] font-semibold'>{categorieData?.name}</h2>
        <p className='my-3'>{categorieData?.createdAt}</p>
        <p>{categorieData?.updatedAt}</p>
      </figcaption>
    </figure>
  )
}

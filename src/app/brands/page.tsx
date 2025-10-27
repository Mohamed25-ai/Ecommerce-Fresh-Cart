import React from 'react'
import BrandsContext from '../_components/BrandsContext/BrandsContext'
import BrandsContent from '../_components/BrandsContent/BrandsContent'

export default function page() {
  return (
    <>
    <header className='text-center my-10 container px-15 mx-auto'>
        <h2 className='text-[var(--main-color)] text-[30px] font-bold'>Our Brands</h2>
        <p className=' text-[25px] lg:text-[20px] opacity-80'>
          You can see our brands and each brand includes the products in it
        </p>
      </header>
      <BrandsContext >
        <BrandsContent />
      </BrandsContext>
    </>
  )
}

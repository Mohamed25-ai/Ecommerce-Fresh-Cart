import React from 'react'
import CategoriesContext from '../_components/CategoriesContext/CategoriesContext';
import CategoriesContent from '../_components/CategoriesContent/CategoriesContent';
import CategoriesPagination from '../_components/CategoriesPagination/CategoriesPagination';

export default async function page() {
  return (
    <>
      <header className='text-center my-10 container px-15 mx-auto'>
        <h2 className='text-[var(--main-color)] text-[30px] font-bold'>Our Categories</h2>
        <p className=' text-[25px] lg:text-[20px] opacity-80'>
          You can see our categories and each category includes the products in it
        </p>
      </header>
      <CategoriesContext >
        <CategoriesContent />
      </CategoriesContext>
    </>
  )
}

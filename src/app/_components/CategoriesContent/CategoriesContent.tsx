'use client'

import { useContext } from "react"
import { categoriesContext } from "../CategoriesContext/CategoriesContext"
import { ScaleLoader } from "react-spinners";
import CategoriesPagination from "../CategoriesPagination/CategoriesPagination";
import Image from "next/image";
import CATEGORYIMAGE from '@Images/0.png'
import Link from "next/link";
export default function CategoriesContent() {
  const { categoriesProducts, isLoading, categoriesAction, categoriesMetaData } = useContext(categoriesContext);
  console.log('categoriesProducts', categoriesProducts)
  return (
    <>
      {isLoading && <div className='h-screen flex items-center justify-center'>
        <ScaleLoader color='#0AAD0A' className='text-[var(--main-color)] ' />
      </div>}
      <section className=" container mx-auto my-15 px-15 grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20  ">
        {categoriesProducts.map((categorie) => {
          return <figure key={categorie?._id} className="bg-white rounded-t-xl drop-shadow-xl  shadow-gray-150 relative w-full min-h-[450px] lg:min-h-[350px]    ">
            <Link href={`/categoryDetails/${categorie?._id}`} >
              <Image className="  rounded-xl" src={categorie?.image || CATEGORYIMAGE} alt={categorie?.name || "categoryName"} fill />
              <figcaption className="flex justify-center items-center" >
                <h2 className="rounded-b-xl bg-white p-2 text-[var(--main-color)] font-semibold absolute  top-full text-nowrap  w-full flex items-center justify-center">{categorie?.name}</h2>
              </figcaption>
            </Link>
          </figure>
        })}
      </section>
      <div className="pagination mt-20">
        <CategoriesPagination paginationFunction={categoriesAction} paginationMetaData={categoriesMetaData!} />
      </div>
    </>
  )
}

import React from 'react'
import { allCategories, allCategoriesData, allProductsType, newAllProducts, productMetaData, searchParamsProps } from './_interfaces/types';
import AllProducts from './_components/AllProducts/AllProducts';
import AllProductsPagination from './_components/AllProductsPagination/AllProductsPagination';
import { getAllCategories, getAllProducts } from './_components/Services/services';
import ProductsSwiper from './_components/ProductsSwiper/ProductsSwiper';
import imageSlider1 from '@Images/slider1.ad6c2d17880357a6ca04.jpeg';
import imageSlider2 from '@Images/slider2.d5bc29a3b1afa74813e9.jpeg';
import imageSlider3 from '@Images/slider3.99cb51759e22d50c22bf.webp';
import imageSlider4 from '@Images/slider4.91960c83e72a60eef666.webp';
import imageSlider5 from '@Images/slider5.610225bf098ebbcdb5c3.jpg';
import imageSlider6 from '@Images/slider6.8556811e5d2886e0bd96.jpg';
import { swiperImgName } from './productdetails/productDetails.type';
const mainSliderImages:string[]=[imageSlider1.src,imageSlider2.src,imageSlider3.src,imageSlider4.src,imageSlider5.src,imageSlider6.src]
export default async function page({searchParams}:searchParamsProps) {
  const currentPg= await Number(searchParams?.page)||1; 
  const allProductData: newAllProducts|null=await getAllProducts(currentPg);
  console.log('allProductData',allProductData)
  const finalAllProducts:allProductsType[] = allProductData?.data ||[] ;
  const productMeta:productMetaData=allProductData?.metadata;
  const allCategories:allCategories|null=await getAllCategories();
  const allCatData:allCategoriesData[]|undefined=allCategories?.data;
  const allCategoriesSwiperObj:swiperImgName[]=allCatData?.map((obj)=>{
    return {
    swiperImges:obj?.image,
    swiperNames:obj?.name,
  };
  })??[];
  const mainSwiperImages=mainSliderImages.map((img)=>{
    return {
      swiperImges:img,
    }
  })

  return (
    <>
      <main >
        <div className="main-swiper  px-10 lg:px-20 lg:py-10 rounded-4xl ">
          <ProductsSwiper slidesPerViewSm={1} swiperObject={mainSwiperImages} spaceBetweenImges={0} height='h-[400px]' withPagination={true} slidersnumber={1} imageBorderRadious='rounded-4xl' autoPlaySpeed={600} withAutoPlay />
        </div>
        <div className="categories-swiper  relative px-10 lg:px-15 mt-5 lg:mt-0 mb-15 ">
          <header className='flex justify-between  text-[20px] lg:text-[28px] text-[var(--main-color)] my-2 lg:my-5' >
            <h2 className='font-bold'>Shop Categories :</h2>
            <h3 className='font-medium'>See All</h3>
          </header>
          <ProductsSwiper slidesPerViewLg={4} slidesPerViewSm={2} imageBorderRadious='rounded-4xl' swiperObject={allCategoriesSwiperObj} height='h-[300px]'  slidersnumber={4}  spaceBetweenImges={25}  withAutoPlay={true} />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4  px-10 gap-10   container mx-auto'>
        {finalAllProducts?.map((product: allProductsType) => {
          return <AllProducts allProps={product}  key={product.id} />
        })}
        </div>
      <div className='Pagination my-7 '>
        <AllProductsPagination proMeta={productMeta} currentPg={currentPg} />
      </div>
      </main>
    </>
  )
}

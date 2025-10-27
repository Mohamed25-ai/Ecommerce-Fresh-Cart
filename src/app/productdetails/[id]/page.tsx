import React from 'react'
import { productPropsType, swiperImgName } from '../productDetails.type';
import { allProductsType } from '../../_interfaces/types';
import ProductsSwiper from '@/app/_components/ProductsSwiper/ProductsSwiper';
import { FaStar } from "react-icons/fa";
import AddProductCart from '@/app/_components/AddProductCart/AddProductCart';
import AddProductWishList from '@/app/_components/AddProductWishList/AddProductWishList';
import ProductDetailsWishIcon from '@/app/_components/ProductDetailsWishIcon/ProductDetailsWishIcon';


export default async function page(prop: productPropsType) {
    const { id } = prop.params;

    async function getSpecificProduct(): Promise<allProductsType | null> {
        try {
            const pro = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
            const specificProduct = await pro.json();
            return specificProduct.data;
        }
        catch (error){
            return null;
        }
    }
    const finalSpecificProduct = await getSpecificProduct();
    const swiperProductDetails=finalSpecificProduct?.images;
    const swiperProductDetailsObj=swiperProductDetails?.map((img)=>{
        return{
            swiperImges:img,
        }
    })??[];


    return (
        <>
            <div className=' container mx-auto px-6 lg:flex lg:px-15 lg:pt-7 ' >
                <figure className='lg:w-1/4 w-full '>
                    <ProductsSwiper slidesPerViewSm={1} swiperObject={swiperProductDetailsObj} withAutoPlay  spaceBetweenImges={3} withPagination={true} slidersnumber={1} height={'h-[400px]'} imageBorderRadious=' rounded-4xl' />
                </figure>
                <figcaption className='relative flex flex-col justify-center lg:ms-5 w-full lg:px-10'>
                    <h2 className={' font-bold text-[40px] text-[var(--main-color)] text-nowrap '}>{finalSpecificProduct?.title.split(" ",2).join(' ')}</h2>
                    <p className='text-[#212529] my-3' > {finalSpecificProduct?.description}</p>
                    <div className="price-rating flex justify-between">
                        {finalSpecificProduct?.priceAfterDiscount ? <div className='flex gap-x-5'>
                            <p className='text-[var(--main-color)]'>{finalSpecificProduct.priceAfterDiscount}<span className='ms-1'>EGP</span></p>
                            <p className='line-through text-[red]'> {finalSpecificProduct.price} <span className='ms-1'>EGP</span></p></div> : <p className='text-[var(--main-color)]'>{finalSpecificProduct?.price}<span className='ms-1'>EGP</span></p>}
                        <div className="rating-star flex items-center">
                            <FaStar className='text-[#FFC908] me-1' />
                            <p>{finalSpecificProduct?.ratingsAverage}</p>
                        </div>
                    </div>
                    <p><span>Quantity : </span>{finalSpecificProduct?.quantity}</p>
                <div className='addCartBtn my-10'>
                    <AddProductCart id={finalSpecificProduct?.id||''} />
                </div>
                <div className="add-wish-list absolute right-0 lg:right-10 top-0">
                    <ProductDetailsWishIcon id={finalSpecificProduct?.id||''} />
                </div>
                </figcaption>
            </div>
        </>
    )
}

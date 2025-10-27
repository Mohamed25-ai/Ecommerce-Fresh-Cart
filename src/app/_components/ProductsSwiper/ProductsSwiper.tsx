'use client'
import React from 'react'
import 'swiper/css';;
import "swiper/css/pagination";
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules'
import { swiperType } from '@/app/productdetails/productDetails.type';
import Image from 'next/image';


export default function ProductsSwiper({  slidesPerViewLg=1, slidesPerViewSm=4,spaceBetweenImges = 50, slidersnumber = 1, swiperObject ,withAutoPlay=false, withPagination= false, height='h-[200px]',autoPlaySpeed=100,imageBorderRadious="" }: swiperType) {

    // console.log('images', swiperImges)
    return (
        <>
            <div className=''>
                <Swiper 
                    spaceBetween={spaceBetweenImges}
                    slidesPerView={slidersnumber}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    modules={withAutoPlay&&withPagination? [Autoplay,Pagination] : [Autoplay]}
                    pagination={withPagination ? { clickable: true, el:'.myPagination' } : { clickable: false }}
                    autoplay={withAutoPlay}
                    speed={autoPlaySpeed}
                    breakpoints={
                    {
                        320:{
                            slidesPerView:slidesPerViewSm,
                        },
                        1024:{
                            slidesPerView:slidesPerViewLg,
                        }
                    }
                    }
                    loop={true}
                >
                    {swiperObject?.map((image) => {
                        return <SwiperSlide key={image.swiperImges}>
                            <div className={' '+height}>
                                <Image className={'object-fill  ' +imageBorderRadious} src={image.swiperImges?image.swiperImges:''} alt={'slider'} fill />
                                {image.swiperNames&& <h2 className='absolute font-bold text-[var(--main-color)] top-full w-full text-center mt-3' >{image.swiperNames}</h2> } 
                                    
                                
                            </div>
                            
                        </SwiperSlide>
                    })}
                    
                    <div className="myPagination  flex justify-center gap-3 py-5  ">
                    </div>
                </Swiper>
            </div>
        </>
    )
}

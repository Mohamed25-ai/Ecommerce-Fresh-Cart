import {  allCategoriesData } from "../_interfaces/types";

export type productPropsType = {
    params: { id: string };
}

export type swiperImgName={
    swiperImges?:string,
    swiperNames?:string,
}
export type swiperType = {
    swiperObject:swiperImgName[],
    spaceBetweenImges: number,
    slidersnumber: number,
    withPagination?: boolean,
    withAutoPlay:boolean,
    height?: string,
    imageBorderRadious?: string,
    autoPlaySpeed?: number,
    slidesPerViewSm?:number,
    slidesPerViewLg?:number,
    
}
import {  allCategoriesData } from "../_interfaces/types";



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
export type ProductParams = { id: string };

export type productPropsType = {
    params: Promise<ProductParams>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

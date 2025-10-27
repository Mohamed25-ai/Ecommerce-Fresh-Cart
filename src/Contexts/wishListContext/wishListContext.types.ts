import { allProductsType, productsInWishListType, wishListResType } from "@/app/_interfaces/types"

export type wishlistContextType={
    addWishListAction:(id:string)=>Promise<productsInWishListType|null>,
    removeWishListAction:(id:string)=>Promise<productsInWishListType|null>,
    wishListProducts:allProductsType[];
    wishListCounter:number,
    setwishListCounter:(num:number)=>void,
    setCount:(num:number)=>void,
    isLoading:boolean,
}
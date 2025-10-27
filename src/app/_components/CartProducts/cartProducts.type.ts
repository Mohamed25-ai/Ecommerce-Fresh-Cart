import { allProductsType, brand, productCategory, subCategory } from "@/app/_interfaces/types";



export type allCartProduct = {
    _id: string,
    title: string,
    quantity: number,
    imageCover: string,
    ratingsAverage: string,
    id: string,
    category: productCategory,
    brand: brand,
    subcategory: subCategory,

}
export type product = {
    _id: string,
    price: number,
    count: number,
    product: allCartProduct,
    length?:number,
}

export type allCartData = {
    cartOwner?: string,
    totalCartPrice?: number,
    price: number,
    _id: string,
    products: product[],
}
export type CartResponse = {
    status: string;
    numOfCartItems: number;
    cartId: string;
    data: allCartData;
};
export type allCartProps = {
    allProducts: product[],
}











import { allCategories, allProductsType, newAllProducts, productMetaData } from "@/app/_interfaces/types";
export async function getAllProducts(page: number): Promise<newAllProducts| null> {
    try {
        const allProductsCall = await fetch(`https://ecommerce.routemisr.com/api/v1/products?limit=12&page=${page}`,{
        });
        const allProducts = await allProductsCall.json();
        console.log("pagcalled",allProducts);
        return allProducts;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
export async function getAllCategories():Promise<allCategories|null> {
    try{
    const allCategoriesReq=await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
    const allCategoriesRes=await allCategoriesReq.json();
    console.log('allCategoriesRes',allCategoriesRes);
    return allCategoriesRes;
}
    catch(error){
        console.log(error);
        return null;
    }
}
import { allCategories, allProductsType, newAllProducts, productMetaData } from "@/app/_interfaces/types";
export async function getAllProducts(page: number): Promise<newAllProducts| null> {
    try {
        const allProductsCall = await fetch(`https://ecommerce.routemisr.com/api/v1/products?limit=12&page=${page}`,{
        });
        const allProducts = await allProductsCall.json();
        return allProducts;
    }
    catch (error) {
        return null;
    }
}
export async function getAllCategories():Promise<allCategories|null> {
    try{
    const allCategoriesReq=await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
    const allCategoriesRes=await allCategoriesReq.json();
    return allCategoriesRes;
}
    catch(error){
        return null;
    }
}

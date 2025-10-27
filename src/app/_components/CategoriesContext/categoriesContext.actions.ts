'use server'

import { allCategories } from "@/app/_interfaces/types";

export async function getAllCategories(page:number):Promise<allCategories|null> {
    try{
    const allCategoriesReq=await fetch(`https://ecommerce.routemisr.com/api/v1/categories?page=${page}&limit=4`);
    const allCategoriesRes=await allCategoriesReq.json();
    return allCategoriesRes;
}
    catch(error){
        return null;
    }
}

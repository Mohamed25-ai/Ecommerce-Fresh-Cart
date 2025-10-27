'use server';
import { allBrandsRes } from "@/app/_interfaces/types";

export async function getBrands(page:number):Promise<allBrandsRes|null> {
    try{
    const brandsReq=await fetch(`https://ecommerce.routemisr.com/api/v1/brands?page=${page}&limit=8`);
    const brandsRes=await brandsReq.json();
    return brandsRes;
}
    catch(error){
        return null;
    }
}

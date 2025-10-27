'use server';

import { getAuthenticatedToken } from "@/Utilities/getUserToken";
import { CartResponse } from "../CartProducts/cartProducts.type";

export async function updateCartCount(id:string,count:number) {
    const countToken=await getAuthenticatedToken();
    if(countToken){
        const updateCount=await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
            method:'PUT',
            body:JSON.stringify({
                count:count,
            }),
            headers:{
                token:countToken as string,
                "Content-Type":"application/json",
            }
        })
        const updateCountRes=await updateCount.json();
        if(updateCountRes.status=='success'){
            console.log('updateCountRes',updateCountRes);
            return updateCountRes;
        }
        else{
            return false;
        }
    }
}
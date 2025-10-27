'use server'

import { getAuthenticatedToken } from "@/Utilities/getUserToken"
import { CartResponse } from "../CartProducts/cartProducts.type";


export async function removeSpecificItem(id:string,counter:number):Promise<CartResponse|undefined> {
    const removeItemToken=await getAuthenticatedToken();
    console.log('removeItemToken',removeItemToken);
    if(removeItemToken){
        const removeCall=await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
            method: "DELETE",
            headers:{
                token:removeItemToken as string,
            }
        });
        const removeRes=await removeCall.json();
        console.log('removeRes',removeRes);
        return removeRes;
        
    }else{
        return;
    }
    
}
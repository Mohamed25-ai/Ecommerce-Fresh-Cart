'use server'

import { getAuthenticatedToken } from "@/Utilities/getUserToken"
import { revalidatePath, revalidateTag } from "next/cache";

export async function removeAllCartCall() {
    const removeAllCartToken=await getAuthenticatedToken();
    if(removeAllCartToken){
        try {
            const removeAllCartReq=await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
                method:'DELETE',
                headers:{
                    token:removeAllCartToken as string,
                },
                
                
            });
            const removeAllCartRes=await removeAllCartReq.json();
            if(removeAllCartRes.message==='success'){
                return true;
            }
            else{
                return false;
            }
        } catch (error) {
            
        }
    }else{
        return;
    }
    
}

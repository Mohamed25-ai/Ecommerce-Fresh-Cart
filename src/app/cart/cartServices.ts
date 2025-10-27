'use server'
import { getAuthenticatedToken } from "@/Utilities/getUserToken";
export async function getCartProducts() {
    const cartProductsToken=await getAuthenticatedToken();
    if(cartProductsToken){
        const cartProductsCall=await fetch('https://ecommerce.routemisr.com/api/v1/cart',{
            headers:{
                token:cartProductsToken as string,
            },
        });
        const cartProductsReq=await cartProductsCall.json();
        return cartProductsReq;
    }
    else{
        return;
    }
}

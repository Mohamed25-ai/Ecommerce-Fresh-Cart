'use server';
import { getAuthenticatedToken } from "@/Utilities/getUserToken";
import toast from "react-hot-toast";

export async function handlingAddProductCart(id: string) {
    const tokenHeaders = await getAuthenticatedToken();
    if (tokenHeaders) {
        const addToCartCall = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
            method: 'post',
            body: JSON.stringify({
                productId: id,
            }),
            headers: {
                "Content-Type": "application/json",
                token: tokenHeaders as string,
            },
        });
        const addToCartReq = await addToCartCall.json();
        if (addToCartReq.status == 'success') {
            return true;
        }
        else {
            false;
        }
    } else {
        return null;
    }

}

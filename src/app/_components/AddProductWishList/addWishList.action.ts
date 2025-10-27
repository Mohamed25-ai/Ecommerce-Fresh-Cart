'use server'

import { wishListResType } from "@/app/_interfaces/types";
import { getAuthenticatedToken } from "@/Utilities/getUserToken"

export async function addToWishListReq(id: string) {
    const addWishListToken = await getAuthenticatedToken();
    if (addWishListToken) {
        try {
            const addWishListReq = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                method: 'POST',
                body: JSON.stringify({
                    productId: id,
                }),
                headers: {
                    "Content-Type": "application/json",
                    token: addWishListToken as string,
                }
            });
            const addWishListRes = await addWishListReq.json();
            return addWishListRes;
        } catch (error) {
        }
    }
    return null;
};
export async function deleteWishList(id: string) {
    const deleteWishListToken = await getAuthenticatedToken();
    if (deleteWishListToken) {
        try {
            const deleteProductWishList = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
                method: "DELETE",
                headers: {
                    token:deleteWishListToken as string,
                }
            });
            const deletedProduct=await deleteProductWishList.json();
            return deletedProduct;
        } catch (error) {
            
        }
    }
}
export async function getWishList() {
    const deleteWishListToken = await getAuthenticatedToken();
    if (deleteWishListToken) {
        try {
            const wishListProducts = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                headers: {
                    token:deleteWishListToken as string,
                }
            });
            const wishListProductsRes=await wishListProducts.json();
            return wishListProductsRes;
        } catch (error) {
        }
    }
}

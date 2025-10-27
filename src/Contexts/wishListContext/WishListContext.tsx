'use client';
import { createContext, ReactNode, startTransition, useEffect, useOptimistic, useState } from "react";
import { wishlistContextType } from "./wishListContext.types";
import { allProductsType, productsInWishListType, wishListResType } from "@/app/_interfaces/types";
import { addToWishListReq, deleteWishList, getWishList } from "@/app/_components/AddProductWishList/addWishList.action";

export const wishListContext = createContext<wishlistContextType>({
    wishListProducts: [],
    wishListCounter: 0,
    setwishListCounter: () => { },
    setCount: (num: number) => { },
    addWishListAction: async (id: string) => null,
    removeWishListAction: async (id: string) => null,
    isLoading: false,
})
export default function WishListContext({ children }: { children: ReactNode }) {
    const [wishListCounter, setwishListCounter] = useState<number>(0);
    const [wishListProducts, setwishListProducts] = useState<allProductsType[]>([]);
    const [isLoading, setisLoading] = useState(false);

    function setCount(num: number) {
        setwishListCounter(num);
    }
    async function getWishListAction() {
        setisLoading(true);
        const wishList = await getWishList();
        setwishListProducts(wishList.data);
        setwishListCounter(wishList.count);
        setisLoading(false);
    }
    async function addWishListAction(id: string) {
        setisLoading(true);
        const addedWishedProduct = await addToWishListReq(id);
        if (addedWishedProduct) {
            getWishListAction();
            setisLoading(false);
            return addedWishedProduct;
        } else {
            setisLoading(false);
            return null;
        }
    }
    async function removeWishListAction(id: string) {
        setisLoading(true);
        const removedWishedProduct = await deleteWishList(id);
        if (removedWishedProduct) {
            getWishListAction();
            setisLoading(false);
            return removedWishedProduct;
        } else {
            setisLoading(false);
            return null;
        }
    }
    useEffect(() => {
        getWishListAction();
    }, [])
    return (
        <wishListContext.Provider value={
            {
                wishListCounter, setwishListCounter, wishListProducts, setCount, addWishListAction, removeWishListAction, isLoading
            }}>
            {children}
        </wishListContext.Provider>
    )
}

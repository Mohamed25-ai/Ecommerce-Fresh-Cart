'use client'

import { useContext } from "react"
import AddProductWishList from "../AddProductWishList/AddProductWishList"
import { ProductDetailsWishIconType } from "./ProductDetailsWishIcon.types"
import { wishListContext } from "@/Contexts/wishListContext/WishListContext"

export default function ProductDetailsWishIcon({id}:ProductDetailsWishIconType) {
    const {wishListProducts} =useContext(wishListContext);
    return (
        <AddProductWishList wishId={id} isWished={wishListProducts.some((wish) => wish.id===id )} />
    )
}

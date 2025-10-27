'use client'
import React, { useContext, useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { wishListType } from './addProductWishistProps';
import { addToWishListReq, deleteWishList, getWishList } from './addWishList.action';
import { FaHeart } from "react-icons/fa6";
import toast from 'react-hot-toast';
import { allProductsType, newAllProducts, productsInWishListType } from '@/app/_interfaces/types';
import { wishListContext } from '@/Contexts/wishListContext/WishListContext';


export default function AddProductWishList({ wishId, isWished = false }: wishListType) {
    const { setCount, addWishListAction, removeWishListAction } = useContext(wishListContext);
    const [isHearted, setisHearted] = useState<boolean>(isWished);



    async function addToWishList() {
        const addedProduct = await addWishListAction(wishId);
        if (addedProduct?.status == 'success') {
            toast.success('Product added successfully to your wishlist', {
                className:'!max-w-full !text-[var(--main-color)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
            });
            setCount(addedProduct.data.length);
            setisHearted(true);
        }
        else {
            toast.error('Please,Login first',{
                className:'!max-w-full !text-[red] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
            })
        }
    };
    async function removeFromWishList() {
        if (isHearted) {
            const deletedWished = await removeWishListAction(wishId);
            if (deletedWished?.status === 'success') {
                toast.success('Product removed successfully to your wishlist', {
                    className:'!max-w-full !text-[var(--main-dark)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
                });
                if (deletedWished.data.length != 0) {
                    setCount(deletedWished.data.length);
                };
                setisHearted(false);
            }
            else {
                return;
            }
        }
        return;
    };

    return (
        <>
            <button onClick={isHearted ? removeFromWishList : addToWishList} className='cursor-pointer '>
                {!isHearted && <CiHeart className='text-[var(--main-color)]' size={54} />}
                {isHearted && <FaHeart className='text-[var(--main-dark)] me-2 mt-0.5 ' size={43} />}
            </button>
        </>
    )
}

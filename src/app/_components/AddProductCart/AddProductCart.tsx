'use client'
import React, { useContext, useState } from 'react'
import { Button } from "@/components/ui/button"
import { FaCartPlus } from "react-icons/fa";
import { handlingAddProductCart } from './productCart.actions';
import { addToCartId } from './addProductCart.type';
import toast from 'react-hot-toast';
import { cartcontext } from '@/Contexts/cartContext/CartContext';


export default function AddProductCart({ id }: addToCartId) {
    const { addProductAction } = useContext(cartcontext);
    async function addProductCart() {
        const isAdded = await addProductAction(id);
        if (isAdded!) {
            toast.success('Product is added successfully to your cart', {
                className: '!max-w-full !text-[var(--main-color)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
            });
        } else {
            toast.error('Please,Login First', {
                className: '!max-w-full !text-[red] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
            })
        }
    }

    return (
        <>
            <div className='w-full '>
                <Button onClick={addProductCart} className='hover:bg-[var(--main-color)] p-5 hover:text-[white] cursor-pointer w-full bg-[var(--main-color)] text-[white]' variant="outline"><span>
                    <FaCartPlus className='' /></span>Add</Button>
            </div>
        </>
    )
}

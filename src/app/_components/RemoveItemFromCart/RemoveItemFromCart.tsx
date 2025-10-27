'use client'
import { Button } from '@/components/ui/button'
import React, { useContext } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeIemProps } from './RemoveSpecificItem.types';
import { removeSpecificItem } from './RemoveSpecificItems.action';
import { cartcontext } from '@/Contexts/cartContext/CartContext';
import toast from 'react-hot-toast';

export default function RemoveItemFromCart({ id, counter }: removeIemProps) {
    const { removeCartAction, updateCartCountAction } = useContext(cartcontext);
    async function removeSpecificProduct(id: string, counter: number) {
        const removedElement = await removeCartAction(id, counter);
        toast.success('Removed Successfuly', {
            className:'!max-w-full !text-[var(--main-dark)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
        })
    }
    return (
        <>
            <Button onClick={() => { removeSpecificProduct(id, counter) }} className='bg-transparent text-[#DC3545] border-1 cursor-pointer border-[#DC3545] hover:bg-[#DC3545] hover:text-white'><span><RiDeleteBin6Line /></span> Remove</Button>
        </>
    )
}

'use client';
import { Button } from '@/components/ui/button';
import React, { useContext } from 'react';
import { removeAllCartCall } from './removeAllCart.actions';
import { cartcontext } from '@/Contexts/cartContext/CartContext';

export default function RemovaAllCart() {
    const {removeAllCartAction}=useContext(cartcontext);
    async function removeAllCart(){
        try {
            const removedCart=await removeAllCartAction();
        } catch (error) {
            
        }
    }
    return (
        <>
            <div className='w-full'>
                <Button onClick={removeAllCart} className='!w-full !py-6  bg-transparent text-[#DC3545] border-1 cursor-pointer border-[#DC3545] hover:bg-[#DC3545] hover:text-white'>Remove All Products</Button>
            </div>
        </>
    )
}

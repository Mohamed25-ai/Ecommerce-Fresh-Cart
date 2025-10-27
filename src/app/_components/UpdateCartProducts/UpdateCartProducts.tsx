'use client';
import { Button } from '@/components/ui/button';
import { cartcontext } from '@/Contexts/cartContext/CartContext';
import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { updateCont } from './updateCateCount.types';
import { updateCartCount } from './updateCartCount.actions';
import toast from 'react-hot-toast';

export default function UpdateCartProducts({ count, id }: updateCont) {
    const { removeCartAction ,updateCartCountAction} = useContext(cartcontext);
    async function updateIncremnt(id: string, count: number,incOrDec:string) {
        await updateCartCountAction(id,count,"inc" );
        toast.success('Added One', {
                style: {
                    color: 'var(--main-color)',
                    fontSize: '18px',
                }
            })
    }
    async function updateDecrement(id: string, count: number,incOrDec:string) {
        if (count == 1) {
            await removeCartAction(id,count);
            toast.error('Removed Successfuly', {
                style: {
                    color: 'red',
                    fontSize: '18px',
                }
            })
            return;
        }
        await updateCartCountAction(id, count ,"dec");
        toast.error('Removed one', {
                style: {
                    color: 'red',
                    fontSize: '18px',
                }
            });
        
    }
    return (
        <>
            <div className="increament  ">
                <Button onClick={() => { updateIncremnt(id, count,"inc") }} className='bg-transparent cursor-pointer text-[var(--main-color)] border-1 border-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white'><FaPlus /></Button>
            </div>
            <div className="num-of-products  flex items-center justify-center">
                <span className='font-bold'>{count}</span>
            </div>
            <div className="increament ">
                <Button onClick={() => { updateDecrement(id, count,"dec") }} className='bg-transparent flex items-center justify-center text-[#DC3545] border-1 cursor-pointer border-[#DC3545] hover:bg-[#DC3545] hover:text-white'><FaMinus /></Button>
            </div>
        </>
    )
}

'use client'
import React, { useContext, useEffect } from 'react';
import { allCartProps } from './cartProducts.type';
import Image from 'next/image';
import { cartcontext } from '@/Contexts/cartContext/CartContext';
import RemoveItemFromCart from '../RemoveItemFromCart/RemoveItemFromCart';
import UpdateCartProducts from '../UpdateCartProducts/UpdateCartProducts';

export default function CartProducts() {
    
    const {cartPtoducts,itemCount,setProductCount}=useContext(cartcontext);

    return (
        <>
            {cartPtoducts?.map((product) => {
                return <article key={product._id} className='flex mb-2 last:mb-0 pb-3  border-b-2 last:border-b-0 border-[var(--main-pale)] justify-between items-end lg:items-center relative'>
                    <figure  className=' flex flex-col w-full lg:w-fit lg:flex-row  gap-x-5 '>
                        <div  className='w-full lg:w-fit lg:block  flex justify-center '>
                            <Image className='object-scale-down lg:object-contain w-[200px] lg:w-[100px] rounded-xl' src={product.product.imageCover}  alt={product.product.title||''}  width={100} height={50} />
                        </div>
                        <figcaption className=' lg:flex flex-col justify-center items-start p-5 lg:p-0'>
                            <h2 className='font-bold text-[var(--main-dark)]'>{product?.product.title.split(' ',2).join(' ')}</h2>
                            <p className='text-[#212529]'>price : <span className='text-[var(--main-dark)] font-bold'>{product.price} EGP</span></p>
                            <div className="remove-product mt-2">
                                <RemoveItemFromCart id={product.product.id} counter={product.count} />
                            </div>
                        </figcaption>
                    </figure>
                    <div className="inc-dec-btn  flex items-center justify-center gap-x-4 lg:static absolute right-0 bottom-8 md:bottom-9  ">
                        <UpdateCartProducts count={product.count} id={product.product.id}/>
                    </div>
                </article>
            })}
        </>
    )
}

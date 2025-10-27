'use client'
import React, { useContext } from 'react'
import CartProducts from '../_components/CartProducts/CartProducts';
import Image from 'next/image';
import cartImg from '@Images/0.png'
import { FaCartArrowDown } from 'react-icons/fa';
import { cartcontext } from '@/Contexts/cartContext/CartContext';
import { ScaleLoader } from 'react-spinners';
import RemovaAllCart from '../_components/RemovaAllCart/RemovaAllCart';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Page() {
    const { cartData, cartRes, isloading,cartPtoducts } = useContext(cartcontext);
    return (
        <>
            {cartPtoducts?.length===0 && <div className='flex items-center justify-center h-screen '>
                <h2 className='font-bold text-[30px] lg:text-[2.5rem]  text-[var(--main-dark)]'>No Products in your Cart</h2>
            </div>}
            {cartPtoducts?.length!=0 && isloading && <div className='h-screen flex items-center justify-center'>
                <ScaleLoader color='#0AAD0A' className='text-[var(--main-color)] ' />
            </div>}
            {cartPtoducts?.length!=0 && !isloading && <div className=' px-10 lg:px-25'>
                <header className='flex justify-center items-center '>
                    <h2 className='font-bold  text-nowrap text-[25px] lg:text-[40px] text-[var(--main-color)]'>Welcome  to your Cart </h2>
                    <span><FaCartArrowDown className='text-[var(--main-color)] text-[40px]' /></span>
                </header>
                <section className=" lg:px-15 cart-img-orderslist lg:flex justify-between items-center  mx-auto">
                    <figure className='flex items-center justify-center'>
                        <Image className='object-scale-down lg:object-contain' src={cartImg} alt='cart-logo' width={300} />
                    </figure>
                    <figcaption className="orders-table   lg:w-1/3 px-3 border-2 border-[var(--main-light)] ">
                        <h2 className=' text-center text-[32px] text-black font-bold mb-1'>Orders</h2>
                        <div className="products-num  flex items-center justify-start text-[20px] mb-2">
                            <p className='text-[#212529]'>Products</p>
                            <span className='ms-1 text-[var(--main-light)] '>{cartRes?.numOfCartItems && cartRes?.numOfCartItems} items</span>
                        </div>
                        <div className="products-totalprice flex items-center justify-start text-[20px] mb-2">
                            <p className='text-[#212529]'>Total Price :</p>
                            <span className='ms-1 text-[var(--main-light)]'>{cartData?.totalCartPrice && cartData?.totalCartPrice} EGP</span>
                        </div>
                        <div className="checkout-clear-button flex flex-col justify-center items-center my-3 gap-y-3">
                            <Link href={'/payment'} className='w-full'><Button className='!w-full !py-6  bg-transparent text-[var(--main-dark)] border-1 cursor-pointer border-[var(--main-dark)] hover:bg-[var(--main-dark)] hover:text-white' >CheckOut</Button></Link>
                            <RemovaAllCart  />
                        </div>
                    </figcaption>
                </section >
                <section className="cart-Content grid grid-cols-1 gap-5 container mx-auto mt-15">
                    <CartProducts />
                </section>
            </div>}
        </>
    )
}

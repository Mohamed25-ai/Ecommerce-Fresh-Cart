'use client';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import logo from '@Images/3.png';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { cartcontext } from '@/Contexts/cartContext/CartContext';
import { wishListContext } from '@/Contexts/wishListContext/WishListContext';
import { BsCartCheckFill } from "react-icons/bs";
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';
import { PiShoppingCartDuotone  } from "react-icons/pi";
export default function Navbar() {
    const mySession = useSession();
    const signOutNavigation = useRouter();
    const path = usePathname();
    const [navBg, setnavBg] = useState<boolean>(false);
    const [handleToggle, sethandleToggle] = useState<string>('hidden');
    const [isopen, setisopen] = useState<boolean>(false);
    const navContext = useContext(cartcontext);
    const { wishListCounter } = useContext(wishListContext);
    function handleNavToggle(isopen: boolean) {
        if (isopen) {
            sethandleToggle('hidden');
            setisopen(false);
            return;
        }
        sethandleToggle('visible');
        setisopen(true);
    };
    async function handleLogOut() {
        await signOut({ redirect: false });
        signOutNavigation.push('/login')
    };
    useEffect(() => {

    }, []);
    useEffect(() => {

        function handleScrollNav() {
            if (window.scrollY > 20) {
                setnavBg(true);
            }
            else {
                setnavBg(false);
            }
        }
        window.addEventListener('scroll', () => { handleScrollNav() });
        return () => {
            window.removeEventListener('scroll', () => { handleScrollNav() });
        }
    }, []);


    return (
        <nav className={`${navBg ? "bg-white shadow-2xl shadow-grey-20 " : ""} " fixed top-0 z-20 w-full dark:bg-gray-900"`}>
            <div className='lg:px-15 '>
                <div className="  max-w-screen-xl flex flex-wrap lg:flex-nowrap items-center justify-between lg:mx-auto p-2">
                    <div className="relative  flex items-center  ">
                        <PiShoppingCartDuotone  className='text-[var(--main-color)] text-[40px] ' />
                        <Link href='/' className={" self-center text-2xl font-semibold whitespace-nowrap dark:text-white"}>Fresh Cart</Link>
                    </div>
                    <div className='flex gap-x-5 items-center justify-center'>
                        <Link onClick={() => { }} href="/cart" className={`lg:hidden `}>
                            <div className='relative'>
                                <BsCartCheckFill className='text-[var(--main-color)] text-[30px]' />
                                <span className='bg-[var(--main-pale)] text-[var(--main-color)] w-5 h-5 flex items-center justify-center rounded-full  absolute bottom-[70%] left-[80%]'> {navContext?.navCounter}</span>
                            </div>
                        </Link>
                        <Link onClick={() => { }} href="/wishlist" className='lg:hidden'>
                            <div className='relative'>
                                <FaHeart className='text-[var(--main-color)] text-[30px]' />
                                <span className='bg-[var(--main-pale)] text-[var(--main-color)] w-5 h-5 flex items-center justify-center rounded-full   absolute bottom-[70%] left-[80%] '> {wishListCounter}</span>
                            </div>
                        </Link>
                        <button onClick={() => {
                            handleNavToggle(isopen);
                        }} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center cursor-pointer p-2 w-10 h-10 justify-center text-sm text-[var(--main-color)] rounded-lg lg:hidden    dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className={handleToggle + "  w-full lg:block lg:w-auto"} id="navbar-default">
                        <ul className="font-medium lg:flex justify-between flex-col bg-white lg:bg-transparent   p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  lg:flex-row   lg:w-full space-x-0  lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {mySession.status == 'authenticated' && <div className='font-medium lg:flex lg:items-center md:justify-center flex-col gap-y-2 lg:gap-y-0  md:p-0   rounded-lg  lg:flex-row space-x-1  rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                                <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                    <Link onClick={() => { }} href="/" className={`${path == '/' ? "bg-[var(--main-color)] text-white " : " "} " block py-2 px-3 text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}>Home</Link>
                                </li>
                                <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                    <Link onClick={() => { }} href="/cart" className={`${path == '/cart' ? "bg-[var(--main-color)] text-white" : " "} " block py-2 px-3 text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white p-10 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}>Cart</Link>
                                </li>
                                <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                    <Link onClick={() => { }} href="/categories" className={`${path == '/categories' ? "bg-[var(--main-color)] text-white" : " "} " block py-2 px-3 text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white p-10 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}>Categories</Link>
                                </li>
                                <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                    <Link onClick={() => { }} href="/products" className={`${path == '/products' ? "bg-[var(--main-color)] text-white" : " "} " block py-2 px-3 text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white p-10 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}>Products</Link>
                                </li>
                                <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                    <Link onClick={() => { }} href="/brands" className={`${path == '/brands' ? "bg-[var(--main-color)] text-white" : " "} " block py-2 px-3 text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white p-10 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}>Brands</Link>
                                </li>
                            </div>}
                            <div className='font-medium lg:flex md:items-center md:justify-center flex-col mt-2 gap-y-2 lg:gap-y-0 lg:mt-0  md:p-2   rounded-lg  md:flex-row space-x-0 lg:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>

                                {mySession.status != 'authenticated' && <>
                                    <li onClick={() => { handleNavToggle(isopen) }} className=' ' >
                                        <Link onClick={() => { }} href="/login" className={`${path == '/login' ? "bg-[var(--main-color)] text-white" : " "} " block py-2 px-3 text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white p-10 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}>Login </Link>
                                    </li>
                                    <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                        <Link onClick={() => { }} href="/register" className={`${path == '/register' ? "bg-[var(--main-color)] text-white" : " "} " block py-2 px-3 text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white p-10 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}>Register</Link>
                                    </li>
                                </>}
                                {mySession.status == 'authenticated' && <>
                                    <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                        <Link onClick={() => { }} href="/cart" className={`block py-2 px-3 `}>
                                            <div className='relative'>
                                                <BsCartCheckFill className='text-[var(--main-color)] text-[30px]' />
                                                <span className='bg-[var(--main-pale)] text-[var(--main-color)] w-5 h-5 flex items-center justify-center rounded-full   absolute top-0 left-10 lg:bottom-[50%]  lg:left-full'> {navContext?.navCounter}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                        <Link onClick={() => { }} href="/wishlist" className={`block py-2 px-3 `}>
                                            <div className='relative'>
                                                <FaHeart className='text-[var(--main-color)] text-[30px]' />
                                                <span className='bg-[var(--main-pale)] text-[var(--main-color)] w-5 h-5 flex items-center justify-center rounded-full   absolute top-0 left-10 lg:bottom-[50%] lg:left-full'> {wishListCounter}</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li onClick={() => { handleNavToggle(isopen) }} className='ms-1 lg:ms-2 text-nowrap' >
                                        <Link onClick={() => { }} href="/allorders" className={`${path == '/allorders' ? "bg-[var(--main-color)] text-white" : " "} " block py-2 px-3 text-nowrap text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white p-10 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"`}>All Orders</Link>
                                    </li>
                                    <li onClick={() => { handleNavToggle(isopen) }} className='' >
                                        <Link onClick={() => {
                                            handleLogOut();
                                        }} href="#" className={" block py-2 px-3 text-gray-900 rounded-sm hover:bg-[var(--main-color)] md:hover:bg-[var(--main-color)] hover:text-white md:border-0 md:hover:text-white p-10 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Logout</Link>
                                    </li>
                                </>}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

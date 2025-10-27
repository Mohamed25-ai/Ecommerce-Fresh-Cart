'use client'
import React, { useContext } from 'react'
import { allProductsProps } from './AllProducts.types'
import { Card, CardContent, CardFooter, CardHeader, } from "@/components/ui/card"
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
import AddProductCart from '../AddProductCart/AddProductCart';
import AddProductWishList from '../AddProductWishList/AddProductWishList';
import { wishListContext } from '@/Contexts/wishListContext/WishListContext'


export default function AllProducts({ allProps }: allProductsProps) {
    const { wishListProducts } = useContext(wishListContext);
    return (
        <Card className=' border-0 relative overflow-hidden  group/buttonCart '>
            <div className="add-wish-list absolute top-0 right-0 z-10">
                <AddProductWishList wishId={allProps.id} isWished={wishListProducts.some((wish) => wish.id===allProps.id )} />
            </div>
            <Link href={`/productdetails/${allProps.id}`} >
                <CardHeader  >
                    <div className=' relative h-[250px] lg:h-[200px]'>
                        <Image src={allProps.imageCover} alt={allProps.title} fill className='object-contain' />
                    </div>
                </CardHeader>
                <CardContent >
                    <div>
                        <p className='text-[var(--main-color)] mb-2  '>{allProps?.category?.name || ''}</p>
                        <p className='mb-1 font-bold'>{allProps.title.split(" ", 2).join(" ")}</p>
                    </div>
                    <div className=' flex justify-between'>
                        {allProps.priceAfterDiscount ? <div className='flex  justify-between'> <p className='text-[#0AAD0A] me-5'>{allProps.priceAfterDiscount}<span className='ms-1'>EGP</span></p>
                            <p className=' line-through text-[#DC2626]'> {allProps.price}<span className='ms-1'>EGP</span></p>
                        </div> : <p className='text-[var(--main-color)]'>{allProps.price}<span className='ms-1'>EGP</span></p>}
                        <div className="rating flex items-center">
                            <FaStar className='text-[#FFC908]' />
                            <p className='ms-2'>{allProps.ratingsAverage}</p>
                        </div>
                    </div>
                </CardContent>
            </Link>
            <CardFooter className=' relative flex justify-center p-1'>
                <div className='absolute w-3/4 lg:translate-y-25 lg:my-0 lg:group-hover/buttonCart:translate-y-0 lg:group-hover/buttonCart:opacity-100 transition-all duration-700'>
                    <AddProductCart id={allProps.id} />
                </div>
            </CardFooter>
        </Card>
    )
}

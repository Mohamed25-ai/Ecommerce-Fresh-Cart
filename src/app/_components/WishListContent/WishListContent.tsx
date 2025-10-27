'use client'

import { wishListContext } from "@/Contexts/wishListContext/WishListContext"
import { useContext } from "react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import AddProductWishList from "../AddProductWishList/AddProductWishList";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import AddProductCart from "../AddProductCart/AddProductCart";
import { ScaleLoader } from "react-spinners";

export default function WishListContent() {
    const { wishListProducts, isLoading } = useContext(wishListContext);
    return (
        <>
            {isLoading && <div className='h-screen flex items-center justify-center'>
                <ScaleLoader color='#0AAD0A' className='text-[var(--main-color)] ' />
            </div>}
            {wishListProducts?.length===0 && <div className='flex items-center justify-center h-screen '>
                <h2 className='font-bold text-[30px] lg:text-[2.5rem]  text-[var(--main-dark)]'>No Products in your WishList</h2>
            </div>}
            <section className="grid md:grid-cols-2 lg:grid-cols-4  px-10 gap-10   container mx-auto">
                {!isLoading&&wishListProducts?.length!=0 && wishListProducts.map((product) => {
                    return <Card key={product.id} className=' border-0 relative overflow-hidden  group/buttonCart '>
                        <div className="add-wish-list absolute top-0 right-0 z-10">
                            <AddProductWishList wishId={product.id} isWished={wishListProducts.some((wish) => wish.id === product.id)} />
                        </div>
                        <Link href={`/productdetails/${product.id}`} >
                            <CardHeader  >
                                <div className=' relative h-[250px] lg:h-[200px]'>
                                    <Image src={product.imageCover} alt={product.title} fill className='object-contain' />
                                </div>
                            </CardHeader>
                            <CardContent >
                                <div>
                                    <p className='text-[var(--main-color)] mb-2  '>{product?.category?.name || ''}</p>
                                    <p className='mb-1 font-bold'>{product.title.split(" ", 2).join(" ")}</p>
                                </div>
                                <div className=' flex justify-between'>
                                    {product.priceAfterDiscount ? <div className='flex  justify-between'> <p className='text-[#0AAD0A] me-5'>{product.priceAfterDiscount}<span className='ms-1'>EGP</span></p>
                                        <p className=' line-through text-[#DC2626]'> {product.price}<span className='ms-1'>EGP</span></p>
                                    </div> : <p className='text-[var(--main-color)]'>{product.price}<span className='ms-1'>EGP</span></p>}
                                    <div className="rating flex items-center">
                                        <FaStar className='text-[#FFC908]' />
                                        <p className='ms-2'>{product.ratingsAverage}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Link>
                        <CardFooter className=' relative flex justify-center p-1'>
                            <div className='absolute w-3/4 lg:translate-y-25 lg:my-0 lg:group-hover/buttonCart:translate-y-0 lg:group-hover/buttonCart:opacity-100 transition-all duration-700'>
                                <AddProductCart id={product.id} />
                            </div>
                        </CardFooter>
                    </Card>

                })}

            </section>
        </>
    )
}

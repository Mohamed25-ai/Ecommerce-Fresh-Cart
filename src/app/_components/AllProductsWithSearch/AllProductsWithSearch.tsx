'use client'
import { useContext, useEffect, useRef, useState } from "react"
import { prodctsType } from "./productsWithSearch.types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import AddProductWishList from "../AddProductWishList/AddProductWishList";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import AddProductCart from "../AddProductCart/AddProductCart";
import AllProductsPagination from "../AllProductsPagination/AllProductsPagination";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { wishListContext } from "@/Contexts/wishListContext/WishListContext";


export default function AllProductsWithSearch({ products, proMeta }: prodctsType) {
    const [productssearch, setproductssearch] = useState(products);
    const {wishListProducts}=useContext(wishListContext);
    const searchInput = useRef<HTMLInputElement>(null);
    useEffect(() => {
        setproductssearch(products);
    }, [products])
    function handleSearchProducts() {
        const searchedvalue = searchInput?.current?.value.toLocaleLowerCase() || '';
        const isExist = products.filter((product)=>{
            return product.title.split(" ", 2).join(" ").toLocaleLowerCase().includes(searchedvalue);
        });
        if (searchedvalue == "" || isExist.length == 0) {
            setproductssearch(products);
        }
        else {
            setproductssearch(isExist);
        }
    }
    return (
        <>
            <header className="container mx-auto px-10 my-7">
                <h2 className="text-[var(--main-color)] text-[40px] font-bold">All Products:</h2>
            </header>
            <div className="w-full flex justify-center items-center flex-col  container mx-auto px-10  my-8">
                <Label htmlFor="search" className="mb-2 justify-items-start text-[var(--main-color)] text-[30px]" >Search:</Label>
                <Input placeholder="Search..." ref={searchInput} onInput={handleSearchProducts} id="search" className='placeholder:text-[var(--main-color)] lg:w-1/2 focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' />
            </div>
            <section className="grid md:grid-cols-2 lg:grid-cols-4  px-10 gap-10   container mx-auto">
                {productssearch.map((product) => {
                    return <Card key={product.id} className=' border-0 relative overflow-hidden  group/buttonCart '>
                        <div className="add-wish-list absolute top-0 right-0 z-10">
                            <AddProductWishList  wishId={product.id} isWished={wishListProducts.some((wish) => wish.id===product.id )} />
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
                            <div className='absolute w-3/4 translate-y-25 group-hover/buttonCart:translate-y-0 group-hover/buttonCart:opacity-100 transition-all duration-700'>
                                <AddProductCart id={product.id} />
                            </div>
                        </CardFooter>
                    </Card>
                })}
            </section>
            <div className="my-6">
                <AllProductsPagination proMeta={proMeta} />
            </div>
        </>
    )
}

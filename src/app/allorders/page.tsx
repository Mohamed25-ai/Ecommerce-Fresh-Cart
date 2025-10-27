import { getAuthenticatedToken } from '@/Utilities/getUserToken'
import { jwtDecode } from 'jwt-decode';
import React from 'react'
import { getUserOrders } from './allorders.services';
import { allOrdersProducts, CartItem, finalOrderType } from '../_interfaces/types';
import Image from 'next/image';

export default async function page() {
    const allOrdersToken = await getAuthenticatedToken();
    const decodedToken: { id: string } = jwtDecode(allOrdersToken as string);
    const allOrdersData: finalOrderType = await getUserOrders(decodedToken?.id);
    // const allOrdersProducts=allOrdersData.map((product)=>{
    //     return product.cartItems.map((pro)=>{return pro.product.imageCover});
    // })
    // const vcv=allOrdersProducts.map((po)=>{return po.map((a)=>{return a.product})});
    return (
        <section className=''>
            {allOrdersData.map((order,i) => {
                return <article key={order._id}>
                    <div  className="container mx-auto px-7 lg:px-15 grid grid-cols-1 ">
                        
                        {order.cartItems.map((item: CartItem,i) => (
                            <div
                                key={item._id??i}
                                className="border-b-1 border-[var(--main-dark)] last:border-0 flex justify-between items-center "
                            >
                                <figure className='flex items-center gap-4 py-2'>
                                    <Image
                                        className="object-contain"
                                        src={item.product.imageCover}
                                        alt={item.product.title}
                                        width={100}
                                        height={100}
                                    />
                                    <figcaption>
                                        <h2 className="text-lg font-semibold text-[var(--main-color)]">
                                            {item.product.title.split(" ", 2).join(" ")}
                                        </h2>
                                    </figcaption>
                                </figure>
                                <div>
                                <p className=" text-gray-900">Price :<span className='text-[var(--main-dark)] font-semibold'>{item.price}</span></p>
                                <p className=" text-gray-900">Quantity :<span className='text-[var(--main-dark)] font-semibold'>{item.count}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='container mx-auto px-7 lg:px-15 '>
                        <div className='flex justify-around border-b-1 border-[var(--main-dark)] pb-3'>
                            <p className=" text-gray-900">Payment :<span className='text-[var(--main-dark)] font-semibold'>{order.paymentMethodType}</span></p>
                            <p className=" text-gray-900">Total Price  :<span className='text-[var(--main-dark)] font-semibold'>{order.totalOrderPrice}</span></p>
                        </div>
                    </div>
                </article>

            }
            )}
        </section>
    )
}

'use client';

import CartContext from '@/Contexts/cartContext/CartContext';
import WishListContext from '@/Contexts/wishListContext/WishListContext';
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

export default function LogInSessionProvider({ children }: { children: ReactNode }) {
    return (
        <SessionProvider >
            <CartContext>
                <WishListContext >
                    {children}
                </WishListContext>
            </CartContext>
        </SessionProvider>
    )
}

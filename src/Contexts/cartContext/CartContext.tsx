'use client';
import { allCartData, CartResponse, product } from '@/app/_components/CartProducts/cartProducts.type';
import { getCartProducts } from '@/app/cart/cartServices';
import React, { createContext, useEffect,  useState } from 'react'
import { cartContextType } from './context.types';
import { handlingAddProductCart } from '@/app/_components/AddProductCart/productCart.actions';
import { removeSpecificItem } from '@/app/_components/RemoveItemFromCart/RemoveSpecificItems.action';
import { updateCartCount } from '@/app/_components/UpdateCartProducts/updateCartCount.actions';
import { removeAllCartCall } from '@/app/_components/RemovaAllCart/removeAllCart.actions';
import toast from 'react-hot-toast';


export const cartcontext = createContext<cartContextType>({
    cartRes: undefined,
    cartData: undefined,
    cartPtoducts: [],
    setCounter: (num: number) => {},
    navCounter: 0,
    addProductAction: (id: string) => {},
    updateCartCountAction: (id: string, count: number, incOrDec: string) => {},
    removeCartAction: (id: string, counter: number) => {},
    itemCount: 0,
    isloading: false,
    setProductCount: (num: number) => {},
    removeAllCartAction:()=>{},
    cartId:'',
    getCartUpdates:async()=>{}
});

export default function CartContext({ children }: { children: React.ReactNode }) {
    const [cartRes, setcartRes] = useState<CartResponse | undefined>(undefined);
    const [cartData, setcartData] = useState<allCartData | undefined>(undefined);
    const [cartPtoducts, setcartPtoducts] = useState<product[] | []>([]);
    const [navCounter, setnavCounter] = useState<number | 0>(cartRes?.numOfCartItems||0);
    const [isloading, setisloading] = useState(false);
    const [itemCount, setitemCount] = useState<number>(0);
    const [cartId, setcartId] = useState<string>('')
    function setCounter(num: number) {
        return setnavCounter(navCounter);
    };
    function setProductCount(num:number){
        setitemCount(num);
    };
    async function getCartUpdates() {
        setisloading(true);
        try {
            const cartContextData = await getCartProducts();
            setcartRes(cartContextData);
            setcartData(cartContextData.data);
            setcartPtoducts(cartContextData.data.products);
            setnavCounter(cartContextData.numOfCartItems);
            setcartId(cartContextData.cartId)
            setisloading(false);
        }
        catch (error) {
            setisloading(false);
        }
    };
    async function addProductAction(id: string) {
        try {
            const updataCart = await handlingAddProductCart(id);
            getCartUpdates();
            return updataCart;
        } catch (error) {
            console.log(error);
        }
    };
    async function removeCartAction(id: string,counter:number) {
        try {
            const removedItem = await removeSpecificItem(id,counter);
            if (removedItem) {
                setcartRes(removedItem);
                setcartData(removedItem.data);
                setnavCounter(removedItem.numOfCartItems);
                setcartPtoducts(removedItem.data.products);
            }
        }
        catch (error) {
            console.log(error);
            return;
        }
    };
    async function updateCartCountAction(id: string, count: number,decOrInc:string=''){
        if(decOrInc==="inc"){
            try{
                const updateRes=await updateCartCount(id, count +1);
                if(updateRes){
                    setcartRes(updateRes);
                    setcartData(updateRes.data);
                    setcartPtoducts(updateRes.data.products);
                    setnavCounter(updateRes.numOfCartItems);
                }
            }catch(error){
                console.log(error);
            }
        }
        if(decOrInc=="dec"){
            try{
                const updateRes=await updateCartCount(id, count -1);
                if(updateRes){
                    setcartRes(updateRes);
                    setcartData(updateRes.data);
                    setcartPtoducts(updateRes.data.products);
                    setnavCounter(updateRes.numOfCartItems);
                }
            }catch(error){
                console.log(error);
            }
        }
        
    };
    async function removeAllCartAction() {
        try {
            const removedCart=await removeAllCartCall();
            
            if(removedCart){
                console.log('numofitems',cartRes?.numOfCartItems);
                    setcartRes(undefined);
                    setcartData(undefined);
                    setcartPtoducts([]);
                    setnavCounter(0);
                toast.success('Cart Removed Successfuly',{
                    className:'!max-w-full !text-[var(--main-dark)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
                })
                return;
            }
        } catch (error) {
            return false;
        }
    }
    useEffect(() => {
        getCartUpdates();
    }, [])
    return (
        <>
            <cartcontext.Provider value={
                {
                    cartRes, cartData, cartPtoducts,
                    itemCount, setCounter, navCounter,
                    addProductAction, isloading, removeCartAction,
                    setProductCount,updateCartCountAction,removeAllCartAction,cartId,getCartUpdates
                }
            } >
                {children}
            </cartcontext.Provider>
        </>
    )
}

import { allCartData, CartResponse, product } from "@/app/_components/CartProducts/cartProducts.type";

export type cartContextType= {
    cartRes: CartResponse | undefined,
    cartData: allCartData | undefined,
    cartPtoducts: product[] | []
    setCounter: (num:number) =>void,
    navCounter:number;
    addProductAction:(id:string)=>void,
    updateCartCountAction:(id:string,count:number,incOrDec:string)=>void,
    removeCartAction:(id:string,counter:number)=>void,
    itemCount:number,
    isloading:boolean,
    setProductCount:(num:number)=>void,
    removeAllCartAction:()=>void,
    cartId:string,
    getCartUpdates:()=>void,
};

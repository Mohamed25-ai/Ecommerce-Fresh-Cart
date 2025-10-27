'use server'

import { getAuthenticatedToken } from "@/Utilities/getUserToken";
import { paymentData } from "./payment.types";

export async function createCashOrder(data: paymentData, cartid: string) {
    const cashOrderToken = await getAuthenticatedToken();
    if (cashOrderToken && cartid != undefined) {
        try {
            const cashOrderCall = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartid}`, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    token: cashOrderToken as string,
                    "Content-Type": 'application/json',
                }
            })
            const cashOrderRes = await cashOrderCall.json();
            return cashOrderRes.status;
        } catch (error) {
            return null;
        }
    }
}
export async function createCreditOrder(data: paymentData, cartid: string) {
    const creditOrderToken = await getAuthenticatedToken();
    const creditOrderUrl = process.env.NEXTAUTH_URL;
    if (creditOrderToken) {
        try {
            const creditOrderCall = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=${creditOrderUrl}`, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    token: creditOrderToken as string,
                    "Content-Type": 'application/json',
                }
            })
            const creditOrderRes = await creditOrderCall.json();
            return creditOrderRes;

        } catch (error) {
            return null;
        }
    }
}

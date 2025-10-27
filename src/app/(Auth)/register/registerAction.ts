'use server'

import { registerFormType } from "./register.type"

export async function handlingRegisterCall(data: registerFormType) {
    const registerCall = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup', {
        method:'post',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    },
    )
    const finalRegisterCall=await registerCall.json();
    if(finalRegisterCall.message=='success'){
        return true;
    }
    else{
        return false;
    }
}

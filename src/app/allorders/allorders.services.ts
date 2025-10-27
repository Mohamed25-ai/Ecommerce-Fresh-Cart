export async function getUserOrders(userId:string){

    if(userId!=''){
        try {
            const allUserOrdersCall=await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`);
            const allUserOrdersRes=await allUserOrdersCall.json();
            return allUserOrdersRes;
        } catch (error) {
            return null
        }
    }

}

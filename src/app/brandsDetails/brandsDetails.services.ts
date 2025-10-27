import {  productBrand } from "../_interfaces/types";

export async function getSpecificBrand(id:string):Promise<productBrand|null> {
    try {
        const getCategorie=await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
        const categorieRes=await getCategorie.json();
        console.log('categorieRes',categorieRes)
        return categorieRes.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
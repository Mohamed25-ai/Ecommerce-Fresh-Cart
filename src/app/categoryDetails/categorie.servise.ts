import { allCategoriesData } from "../_interfaces/types";




export async function getSpecificCategorie(id:string):Promise<allCategoriesData|null> {
    try {
        const getCategorie=await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
        const categorieRes=await getCategorie.json();
        console.log('categorieRes',categorieRes)
        return categorieRes.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}
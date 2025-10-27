import { allCategoriesData } from "../_interfaces/types";




export async function getSpecificCategorie(id:string):Promise<allCategoriesData|null> {
    try {
        const getCategorie=await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
        const categorieRes=await getCategorie.json();
        return categorieRes.data;
    } catch (error) {
        return null;
    }
}

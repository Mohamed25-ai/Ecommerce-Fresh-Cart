'use client'

import { createContext, ReactNode, useEffect, useState } from "react"
import { barndsContextType } from "./brandsContext.types"
import { getAllCategories } from "../CategoriesContext/categoriesContext.actions";
import { getBrands } from "./brandsContext.action";
import { allCategoriesMeta, productBrand } from "@/app/_interfaces/types";

export const brandContext = createContext<barndsContextType>({
    brandsAction: (page?: number) =>{},
    brandsProducts:[],
    brandssMetaData:undefined,
    isLoading:false,
})
export default   function BrandsContext({ children }: { children: ReactNode }) {
    const [brandsProducts, setBrandsProducts] = useState<productBrand[]>([]);
    const [brandssMetaData, setBrandsMetaData] = useState<allCategoriesMeta | undefined>(undefined);
    const [isLoading, setisLoading] = useState(false);
    async function brandsAction(page?: number) {
        setisLoading(true);
        try {
            const brandsData = await getBrands(page || 1);
            setBrandsProducts(brandsData?.data || []);
            setBrandsMetaData(brandsData?.metadata || undefined);
            setisLoading(false);
        } catch (error) {
            setisLoading(true);
        }
    }

    useEffect(() => {
        brandsAction(1);
    }, [])
    return (
        <brandContext.Provider value={{
            isLoading,brandssMetaData,brandsAction,brandsProducts
        }}>
            {children}
        </brandContext.Provider>
    )
}

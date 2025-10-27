'use client'
import { createContext, ReactNode, useEffect, useState } from "react"
import { getAllCategories } from "./categoriesContext.actions"
import { categoriesContextType } from "./categoriesContext.types";
import { allCategoriesData, allCategoriesMeta } from "@/app/_interfaces/types";


export const categoriesContext = createContext<categoriesContextType>({
  categoriesAction: (page?: number) => { },
  categoriesProducts: [],
  categoriesMetaData:undefined,
  isLoading:false,
})
export default function CategoriesContext({ children }: { children: ReactNode }) {
  const [categoriesProducts, setcategoriesProducts] = useState<allCategoriesData[]>([]);
  const [categoriesMetaData, setcategoriesMetaData] = useState<allCategoriesMeta|undefined>(undefined);
  const [isLoading, setisLoading] = useState(false);
  async function categoriesAction(page?: number) {
    setisLoading(true);
    try {
      const categoriesData = await getAllCategories(page || 1);
      setcategoriesProducts(categoriesData?.data||[]);
      setcategoriesMetaData(categoriesData?.metadata||undefined);
    setisLoading(false);
    } catch (error) {
    setisLoading(true);
    }
  }

  useEffect(() => {
    categoriesAction(1);
  }, [])
  return (
    <categoriesContext.Provider value={
      {
        categoriesAction,categoriesProducts,categoriesMetaData,isLoading
      }}>
      {children}
    </categoriesContext.Provider>
  )
}

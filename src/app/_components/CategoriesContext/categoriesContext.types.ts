import { allCategoriesData, allCategoriesMeta } from "@/app/_interfaces/types"

export type categoriesContextType={
    categoriesAction:(page?:number)=>void,
    categoriesProducts:allCategoriesData[],
    categoriesMetaData:allCategoriesMeta|undefined,
    isLoading:boolean,
}
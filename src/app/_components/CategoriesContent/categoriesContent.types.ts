import { allCategoriesMeta } from "@/app/_interfaces/types"

export type categoriesContentProps={
    paginationFunction:(page:number)=> void,
    paginationMetaData:allCategoriesMeta,
}

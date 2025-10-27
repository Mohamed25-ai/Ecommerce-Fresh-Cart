import { allCategoriesMeta, productBrand } from "@/app/_interfaces/types";

export type barndsContextType = {
    brandsAction: (page?: number) => void,
    brandsProducts: productBrand[],
    brandssMetaData: allCategoriesMeta | undefined,
    isLoading: boolean,
}
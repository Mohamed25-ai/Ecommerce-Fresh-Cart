import { allProductsType, productMetaData } from "@/app/_interfaces/types"

export type prodctsType={
    products:allProductsType[],
    proMeta:productMetaData,
    currentPg:number,
}

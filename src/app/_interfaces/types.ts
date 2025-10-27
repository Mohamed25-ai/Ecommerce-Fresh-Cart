export type brand = {
    image: string,
    name: string,
    slug: string,
};
export type productImages = string[];
export type subCategoryContent = {
    _id: string,
    name: string,
    slug: string,
    category: string,
};
export type subCategory = subCategoryContent[];
export type productCategory = {
    _id: string,
    name: string,
    slug: string,
    image: string,
};
export type productBrand = {
    _id: string,
    name: string,
    slug: string,
    image: string,
    updatedAt: string,
    createdAt: string,
}
export type productMetaData = {
    currentPage: number,
    numberOfPages: number,
    limit: number,
    nextPage: number,
} | undefined;
export type allBrandsRes = {
    metadata: productMetaData,
    data: productBrand[],
}
export type allProductsType = {
    name?: string,
    images?: productImages,
    category?: productCategory,
    brand: productBrand,
    imageCover: string,
    id: string,
    _id?: string,
    title: string,
    price: number,
    ratingsAverage: number,
    description: string,
    priceAfterDiscount?: number,
    quantity: number,
    count?: number,
};
export type newAllProducts = {
    metadata: productMetaData,
    data: allProductsType[],
};

export type searchParamsProps = {

    searchParams?: Promise<{
        page?: string;
        status?: string | string[];
    }>;
};
export type allCategoriesData = {
    _id: string,
    name: string,
    slug: string,
    image: string,
    createdAt: string,
    updatedAt: string,
} | null;
export type allCategoriesMeta = {
    currentPage: number,
    numberOfPages: number,
    limit: number,
};
export type allCategories = {
    data: allCategoriesData[],
    metadata: allCategoriesMeta,
};
export type wishListResType = {
    status: string,
    message: string,
    data: string[],
};
export type productsInWishListType = {
    status: string,
    count: number,
    data: allProductsType[];
};

export interface CartItem {
    count: number;
    _id: string;
    product: allProductsType;
    price: number;
}

export type allOrdersProducts = {
    cartItems: CartItem[],
    paymentMethodType: string,
    totalOrderPrice: number,
    _id: string,
};
export type finalOrderType = allOrdersProducts[];


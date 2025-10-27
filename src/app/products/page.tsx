import AllProductsWithSearch from '../_components/AllProductsWithSearch/AllProductsWithSearch'
import { getAllProducts } from '../_components/Services/services'
import { searchParamsProps } from '../_interfaces/types';

export default async function page({searchParams}:searchParamsProps) {
  const productsCurrentPage=await Number(searchParams?.page)||1;
  const products=await getAllProducts(productsCurrentPage);
  return (
    <>
      <AllProductsWithSearch products={products?.data||[]} proMeta={products?.metadata} currentPg={productsCurrentPage} />
    </>
  )
}

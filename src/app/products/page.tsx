import AllProductsWithSearch from '../_components/AllProductsWithSearch/AllProductsWithSearch'
import { getAllProducts } from '../_components/Services/services'
import { searchParamsProps } from '../_interfaces/types';
type SP = { page?: string; status?: string | string[] };
export default async function page({searchParams}:searchParamsProps) {
   const sp = (await searchParams) as SP | undefined;
 const productsCurrentPage = Number(sp?.page ?? "1") || 1;

  const products = await getAllProducts(productsCurrentPage);
  return (
    <>
      <AllProductsWithSearch products={products?.data||[]} proMeta={products?.metadata} currentPg={productsCurrentPage} />
    </>
  )
}

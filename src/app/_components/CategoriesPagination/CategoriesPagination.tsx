'use client';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination";
import { categoriesContentProps } from "../CategoriesContent/categoriesContent.types";

export default function CategoriesPagination({paginationFunction,paginationMetaData}:categoriesContentProps) {
    const currentPage = paginationMetaData?.currentPage || 0;
    const numberOfPages = paginationMetaData?.numberOfPages || 0;
    const allPagesPagination = Array.from({ length: numberOfPages }, (_, i) => i + 1);
    function handlePrevious() {
        if(currentPage > 1){
            paginationFunction(currentPage - 1);
        }
        else {
            return;
        }
    }
    function handleNext() {
        if (currentPage < numberOfPages) {
            paginationFunction(currentPage + 1);
        }
        else {
            return
        }
    }
    function handlePages(e: React.MouseEvent, pag: number){
        e.preventDefault();
        if (pag === currentPage) {
            return;
        }
        paginationFunction(pag);
    }
    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem className='me-2 '>
                        <PaginationPrevious onClick={handlePrevious} className='cursor-pointer hover:bg-[var(--main-color)] hover:text-white' />
                    </PaginationItem>
                    <PaginationItem className='flex gap-3'>
                        {allPagesPagination.map(((page) => { return <PaginationLink key={page} onClick={(e) => { handlePages(e, page) }} className={page === currentPage ? 'bg-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white text-white' : 'hover:bg-[var(--main-color)] hover:text-white '} ><button  >{page}</button></PaginationLink> }))}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={handleNext} className='cursor-pointer hover:bg-[var(--main-color)] hover:text-white' />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

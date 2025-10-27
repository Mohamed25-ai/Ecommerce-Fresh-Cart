'use client'
import React, { useEffect, useState } from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"
import { allProMeta } from './AllProductsPagination.types';
import { getAllProducts } from '../Services/services';
import { allProductsType } from '@/app/_interfaces/types';
import { useRouter } from 'next/navigation';


export default function AllProductsPagination({proMeta}:allProMeta) {
    const router=useRouter()
    const numOfPg:number=proMeta?.numberOfPages ??0;
    const allPagesPagination=Array.from({length:numOfPg},(_,i)=>  i+1 );
    const currentPage:number=proMeta?.currentPage||1;
    const goToPage=(page:number)=>{
        router.push(`?page=${page}`)
    }
    
    function handlePrevious(){
        if(currentPage>1){
            goToPage(currentPage-1);
        }
        else{
            return;
        }
    }
    function handleNext(){
        if(currentPage<numOfPg){
            goToPage(currentPage+1);
        }
        else{
            return
        }
    }
    function handlePages(e:React.MouseEvent,pag:number){
        e.preventDefault();
        if(pag===currentPage){
            return;
        }
        goToPage(pag);
    }
    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem className='me-2 '>
                        <PaginationPrevious onClick={handlePrevious} className='cursor-pointer hover:bg-[var(--main-color)] hover:text-white'  />
                    </PaginationItem>
                    <PaginationItem className='flex gap-3'>
                        {allPagesPagination.map(((page)=> {return <PaginationLink key={page} href={`?page=${page}`} onClick={(e)=>{handlePages(e,page)}} className={page===currentPage?'bg-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white text-white':'hover:bg-[var(--main-color)] hover:text-white '} ><button  >{page}</button></PaginationLink>} ))}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext onClick={handleNext} className='cursor-pointer hover:bg-[var(--main-color)] hover:text-white'/>
                    </PaginationItem>

                </PaginationContent>
            </Pagination>
        </div>
    )
}

"use client"
import MangaComponent from "../components/MangaComponent"
import { Paginations } from "../components/Pagination"
import  fetchManga  from "../helper/fetchManga"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"


const RenderManga = () => {

  const router = useRouter()
  

  const searchParams = useSearchParams()

  const page = searchParams.get("page")
  const search = searchParams.get("search")
  
  const [mangas, setMangas] = useState()

  const userQuery = {
    search,
    page: page ? page : 1,
    limit:10,
  };

  const fetchDataManga = async () => {
    const dataManga = await fetchManga(userQuery)
    setMangas(dataManga)

  }
  useEffect(() => {
    fetchDataManga()
    // console.log(mangas);
    
  }, [page])
  
  
    const handlePageChange = (selectedPage) => {
    const pages = selectedPage.selected + 1;
    // console.log(pages, "pages");
    if (page) {
      // setCurrentPage(pageQuery);
      router.push(`/layouting?page=${page}${search ? "&search=" + search : "" }`);
    }
    if (+page !== +pages) {
      router.push(`/layouting?page=${pages}${search ? "&search=" + search : "" }`);
    }
    };
  
  return (
    <div className="flex flex-col gap-4">
    <div className=" grid grid-cols-5 gap-1.5 max-md:grid-cols-2">
      {
  mangas?.data?.map((el, index) => (
    <MangaComponent manga={el} key={index}/>
  ))
      }
      </div>
      <Paginations totalPages={Math.ceil(mangas?.total / mangas?.limit)} handlePageChange={handlePageChange} pageQuery={+page} />
  </div>
  )
  
}
  
export default RenderManga
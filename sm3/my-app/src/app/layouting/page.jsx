"use client"
import React from "react";
import SearchBar from "../../../components/SearchBar";
import { useRouter } from "next/navigation";
import RenderManga from "../../../components/RenderManga";


export default function page() {
  const router = useRouter()

  const handleSearchSubmit = (search) => {
    router.push(`/layouting?search=${search}&page=1`)
  }


  return (
    <div className="flex flex-col items-center justify-center flex-wrap gap-10 m-[25vh]">
      <SearchBar placeholder={"search manga here..."} submit={handleSearchSubmit}/>
      <div>
        <RenderManga/>
      </div>
    </div>
  );
}

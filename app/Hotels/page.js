"use client";

import { useSearchParams,useRouter } from "next/navigation";
import Mapcomponent from "../components/Mapcomponent";
import { data } from "../../data";
import HotelCard from "../components/HotelCard";
import useData from "../hooks/fakeApi";
import React, { useCallback, useRef ,useEffect} from "react";
// import { useRouter } from 'next/router';
import { BottomSheet ,BottomSheetRef } from "react-spring-bottom-sheet";
import Sheet from "react-modal-sheet"
import "./hotelspage.css";

export default function HotelPage(props) {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  // const [refresh,setrefresh] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const observer = useRef();
  const { hasmore, list, loading } = useData({ page,query:location });
  const sheetRef = useRef()
  const listRef = useRef()
  const lastele = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    []
  );
 useEffect(()=>{
  setPage(1)
 },[location])

 const scrollTotop = useCallback((idx)=>{
       if(listRef.current){
        let childEle = listRef.current.children[idx]
        if(childEle){
          console.log(childEle)
           childEle.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
       }
 },[page])
  
  return (
    <>
      <div className="w-screen md:h-79-vh relative">
        <h1 className="text-3xl mt-4 mb-2 text-center">
          Hotels near {location}{" "}
        </h1>
        <div className=" w-full p-4 grid md:grid-cols-3 border-l-black h-full grid-rows-13 gap-2  md:gap-0 md:grid-rows-1">
          
            <div ref={listRef} className=" order-last md:order-first md:col-span-2 row-span-6 md:h-full overflow-y-scroll flex flex-col col-span-3 items-center w-full h-86-vh">
              {list.map((item, idx) => {
                if (idx + 1 === list.length) {
                  return <HotelCard key={item.id} {...item} ref={lastele} />;
                }
                return <HotelCard key={item.id} {...item} />;
              })}
              {loading && <p>loading</p>} 
             </div>
             <div className="w-full md:hidden static col-span-3 order-2 row-span-1 h-4">
                 <p></p>
             </div>
          <div className=" col-span-3  md:col-span-1 md:h-full h-86-vh row-span-6  border-l-2 md:static">
            <Mapcomponent list={list} scrollTotop={scrollTotop} />
          </div>
        </div>
      </div>
    </>
  );
}

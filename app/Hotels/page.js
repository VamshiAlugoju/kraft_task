"use client";

import { useSearchParams } from "next/navigation";
import Mapcomponent from "../components/Mapcomponent";
import { data } from "../../data";
import HotelCard from "../components/HotelCard";
import useData from "../hooks/fakeApi";
import React,{useCallback, useRef} from "react";


export default function HotelPage(props) {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const [page,setPage] = React.useState(1);
  const observer = useRef();
  const {hasmore,list,loading} = useData({page});
  const lastele = useCallback((node)=>{
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver((entries)=>{
       if(entries[0].isIntersecting){
        setPage(prev=>prev+1)
       }
  })
     if(node) observer.current.observe(node);
  },[hasmore])

  console.log(page,"rasen")

  console.log(list)

  return (
    <>
      <div className="w-screen h-79-vh">
        <h1 className="text-3xl mt-4 mb-2 text-center">Hotels near {location} </h1>
        <div className="w-full p-4 grid grid-cols-3 border-l-black h-full">
           <div className="col-span-2 h-full  h-full overflow-y-scroll flex flex-col items-center">
             {list.map((item,idx)=>{
              if(idx+1 === list.length){
                return <HotelCard key={item.id} {...item} ref={lastele } />
              }
                return <HotelCard key={item.id} {...item} />
             })}
           </div>
           <div className="col-span-1 h-full border-l-2">
              {/* <Mapcomponent /> */}
           </div>
        </div>
      </div>
    </>
  );
}

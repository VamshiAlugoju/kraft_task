"use client"
import React, { useEffect } from "react";
import {data} from "../../data"

const arrlength = data.length;
  function useData(props){
   
    const page =  props.page ? props.page : 1;
    const [list,setList] = React.useState(data.slice(0,10));
    const [loading,setLoading ] = React.useState(false);
    let hasmore = page*10 < arrlength ? true : false;
    console.log(hasmore,page,arrlength)

    useEffect(()=>{
      setLoading(true);
      console.log(page,"hello")
      setList(prev=>{
        const splitarr = data.slice((page-1)*10,page*10)
        return [...new Set( [...prev,...splitarr])]
      })
     let ind =  setTimeout(() => {
          setLoading(false);
      }, 1000);
     return ()=>{
        clearTimeout(ind)
      }
    },[page])
    
    



   return {hasmore,list,page,loading}

  }

  export default useData;
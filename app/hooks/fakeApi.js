"use client"
import React, { useEffect } from "react";
import {restData} from "../../data"
const availableList = new Set( ["warangal","bengaluru","hyderabad","mumbai"])


function useData(props){
  
  let arr = [];
  const query = props.query;
  if(availableList.has(query)){
    arr = [...restData[query].data];
 }
 else{
  arr = restData["data"].data;
 }

 const arrlength = arr.length;
 const page =  props.page ? props.page : 1;
    const [list,setList] = React.useState([]);
    const [loading,setLoading ] = React.useState(false);
    let hasmore = page*10 < arrlength ? true : false;


   useEffect(()=>{
    setList([])
   },[props.query])

    useEffect(()=>{
      setLoading(true);
      let ind =  setTimeout(() => {
        
        console.log(arr)
          setLoading(false);
          setList(prev=>{
            const splitarr = arr.slice((page-1)*10,page*10)
            return [...new Set( [...prev,...splitarr])]
          })
      }, 1000);
    
    },[page,props.query])
    
   return {hasmore,list,page,loading}

  }

  export default useData;
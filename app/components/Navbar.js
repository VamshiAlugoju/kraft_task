
"use client"

import Image from "next/image"
import ariimage from "../../public/images/airbnb.png"
import airimg from "../../public/images/123_airbnb.jpg"
import "./navbar.css"
import Searchbar from "./Searchbar"
import React from "react"


export default function Navbar(){



    return (
        <nav className="bg-white-800 border-b  ">
  <div className="mx-auto  px-2 sm:px-6 lg:px-8 grid grid-cols-6">
   <div className="image-container hidden sm:block container col-span-1 d-flex justify-center lg:h-20 md:h-20 sm:h-20 h-20">
    <Image 
    src={airimg}
    // width={200}
    // height={200}
    className="image lg:h-20 md:h-20"
    alt="img"
    />
   </div>
   <div className="search_container container col-span-6 sm:col-span-4 outline-red-600 border-b-red-800 flex items-center justify-center h-20">
     <Searchbar />
   </div>
  </div>

 
</nav>

    )
}
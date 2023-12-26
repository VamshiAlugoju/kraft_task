"use client"

import { useSearchParams } from 'next/navigation'
import Mapcomponent from '@/app/components/Mapcomponent';

export default function HotelPage(props){
    

    const searchParams = useSearchParams();
    const location = searchParams.get("location")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate");

    console.log(startDate , endDate)
    
    return(
        <>
    

        </>
    )
}
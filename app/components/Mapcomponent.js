"use client";
import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFtc2hpMTQ0IiwiYSI6ImNscWpzMXRpZTI3OGwyaW5teHhoazluZ2QifQ.0u3PmqUWXVvPmvFQMvic3A";

function 
Mapcomponent({list,scrollTotop}) {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [pointers,setPointers] = useState([]);
 

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new mapboxgl.NavigationControl());
  }, []);


  function handleMarkerClick(idx){
       
    scrollTotop(idx)
  }

  useEffect(()=>{
     if(map.current,list){
      list.forEach((element,idx) => {

        let lng = parseFloat(element.lng)
        let lat = parseFloat(element.lat)
       
        const marker =  new mapboxgl.Marker().setLngLat([lng,lat]).addTo(map.current);
        const markerEle = marker.getElement();
        markerEle.addEventListener("click",()=> handleMarkerClick(idx));
        
        marker.setPopup(new mapboxgl.Popup().setHTML(`<h1>${element.name}</h1>`))
        if(idx === 0){
          const position = marker.getLngLat();
          map.current.setCenter(position);
        }

      });
     }
  },[list])

  return (
    <div className="h-full w-full flex justify-center">
      <div ref={mapContainer} className="map-container w-11/12 h-full" />
    </div>
  );
}

export default Mapcomponent;

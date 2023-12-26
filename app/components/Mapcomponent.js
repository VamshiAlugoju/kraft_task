"use client";
import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFtc2hpMTQ0IiwiYSI6ImNscWpzMXRpZTI3OGwyaW5teHhoazluZ2QifQ.0u3PmqUWXVvPmvFQMvic3A";

function Mapcomponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    const marker = new mapboxgl.Marker().setLngLat([lng,lat]).addTo(map.current)
    console.log(marker)
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container w-10/12 h-96" />
    </div>
  );
}

export default Mapcomponent;

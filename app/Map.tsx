import React, { useEffect, useRef } from "react";
import { Map } from "maplibre-gl";

const MyMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map>();

  useEffect(() => {
    map.current = new Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [11, 49],
      zoom: 4,
      hash: true,
    });
    map.current.on("remove", () => console.log("map removed"));
    return () => {
      map.current?.remove();
    };
  }, []);

  return <div className="absolute w-full h-full" ref={mapContainer}></div>;
};

export default MyMap;

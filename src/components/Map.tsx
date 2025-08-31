"use client";

import { GoogleMap, Libraries, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useRef } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 14.5995,
  lng: 120.9842,
};

const libraries: Libraries = ["marker"];

const Map = () => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    if (window.google && map) {
      const { AdvancedMarkerElement } = google.maps.marker;

      new AdvancedMarkerElement({
        map,
        position: center,
        title: "Manila",
      });
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
    />
  );
};

export default Map;

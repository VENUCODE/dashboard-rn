import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";

const Map = ({ zoom = 4, data = [] }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 20.593684, lng: 78.96288 },
        zoom: zoom,
      });

      data.forEach((user) => {
        if (user.coordinates && user.coordinates.lat && user.coordinates.long) {
          const marker = new window.google.maps.Marker({
            icon: { url: "https://icons8.com/icon/21441/user" },
            position: { lat: user.coordinates.lat, lng: user.coordinates.long },
            map: map,
            title: `${user.name} from ${user.location}`,
          });
        }
      });
      //  ------
    });
  }, [zoom, data]);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />
  );
};

export default Map;

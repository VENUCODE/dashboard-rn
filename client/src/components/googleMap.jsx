import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";
import { Circle } from "./Circle";

const apiKey = "";

const GoogleMap = ({ markerPosition, markerChanged = null }) => {
  const [markerPos, setMarkerPos] = useState(markerPosition);
  const mapRef = useRef(null);
  const [center, setCenter] = useState({ lat: 22, lng: 77 });

  useEffect(() => {
    setMarkerPos(markerPosition);
    setCenter(markerPosition);
  }, [markerPosition]);

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        ref={mapRef}
        style={{ width: "100%", height: "400px" }}
        defaultCenter={center}
        defaultZoom={8}
        gestureHandling={"greedy"}
        onClick={(e) => {
          const newMarkerPos = { lat: e.latLng.lat(), lng: e.latLng.lng() };
          setMarkerPos(newMarkerPos);
          if (markerChanged) markerChanged(newMarkerPos);
        }}
      >
        {markerPos && (
          <>
            <Marker
              position={markerPos}
              draggable={true}
              onDragEnd={(e) => {
                const newPosition = {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                };
                setMarkerPos(newPosition);
                if (markerChanged) markerChanged(newPosition);
              }}
            />
            <Circle
              center={markerPos}
              radius={1000}
              options={{
                fillColor: "lightblue",
                fillOpacity: 0.4,
                strokeColor: "red",
                strokeOpacity: 1,
                strokeWeight: 1,
              }}
            />
          </>
        )}
      </Map>
    </APIProvider>
  );
};

export default GoogleMap;

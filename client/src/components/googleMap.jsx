const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";
import {
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
  Marker,
} from "@vis.gl/react-google-maps";
import { Suspense, useEffect, useRef, useState } from "react";
import { Circle } from "./Circle";
import AutoComplete from "../pages/PropertiesPage/PropertyForm/AutoComplete";
const GoogleMap = ({ markerPosition, markerChanged = null }) => {
  const [markerPos, setMarkerPos] = useState(markerPosition);
  const mapRef = useRef(null);
  useEffect(() => {
    setMarkerPos(markerPosition);
  }, [markerPosition]);

  return (
    <APIProvider apiKey={apiKey}>
      <Suspense fallback={<div>Loading map.....</div>}>
        <Map
          ref={mapRef}
          style={{ width: "100%", height: "400px" }}
          defaultCenter={{ lat: 22, lng: 77 } || markerPos}
          defaultZoom={8}
          gestureHandling={"greedy"}
          onClick={(e) => {
            setMarkerPos(e.detail.latLng);
            markerChanged(markerPos);
          }}
        >
          <MapControl position={ControlPosition.TOP_CENTER}>
            <AutoComplete
              onPlaceSelect={(place) => {
                console.log(place);
              }}
            />
          </MapControl>
          {markerPosition && (
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
                  markerChanged ? markerChanged(newPosition) : "";
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
      </Suspense>
    </APIProvider>
  );
};
export default GoogleMap;

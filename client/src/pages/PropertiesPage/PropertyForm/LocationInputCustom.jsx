import React, { useState, useEffect, useRef } from "react";
import PlaceAutocomplete from "./PlaceAutocomplete";
import {
  APIProvider,
  ControlPosition,
  MapControl,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";

const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";

const LocationInput = ({
  onPlaceSelected,
  value = "",
  reset = false,
  ...props
}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [city, setCity] = useState();
  const { Loading, setLoading } = useState(true);
  useEffect(() => {
    if (selectedPlace) {
      setMarkerPosition(selectedPlace.geometry.location);
      setCity(selectedPlace.name);
    }
    console.log(selectedPlace);
  }, [selectedPlace]);

  return (
    <>
      {city && <div>{city}</div>}

      {Loading && <div>Loading map</div>}

      <APIProvider apiKey={apiKey}>
        <Map
          defaultZoom={8}
          style={{ width: "100%", height: "400px" }}
          center={markerPosition}
          gestureHandling={"greedy"}
        ></Map>
        <MapControl position={ControlPosition.INLINE_START_BLOCK_CENTER}>
          <div className="autocomplete-control">
            <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
          </div>
        </MapControl>
        {markerPosition && (
          <Marker
            position={markerPosition}
            draggable
            onDragEnd={(e) => {
              const { lat, lng } = e.latLng;
              console.log({ lat: lat(), lng: lng() });
            }}
          />
        )}
      </APIProvider>
    </>
  );
};

export default LocationInput;

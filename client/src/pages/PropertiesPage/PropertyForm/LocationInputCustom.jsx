import React, { useState, useEffect } from "react";
import PlaceAutocomplete from "./PlaceAutocomplete";
import {
  APIProvider,
  ControlPosition,
  MapControl,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";

const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";

const LocationInput = ({propertyState,setPropertyState}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [city, setCity] = useState(null);
  const [location, setLocation] = useState(null);
  const [locality, setLocality] = useState(null);

  useEffect(() => {
 
      if (selectedPlace) {
        const location = selectedPlace.geometry.location;
        const newMarkerPosition = { lat: location.lat(), lng: location.lng() };
        setMarkerPosition(newMarkerPosition);
      }
  }, [selectedPlace]);
  useEffect(()=>{
    const fetchAddress=async ()=>{
    try {
      const placeData = await getFormattedAddress(markerPosition);
      getAddress(placeData);
    } catch (error) {
      console.error(error);
    }
  }
  fetchAddress()

  },[markerPosition])

  const getFormattedAddress = (location) => {
    return new Promise((resolve, reject) => {
      const geocoder = new window.google.maps.Geocoder();
      const latlng = { lat: location.lat, lng: location.lng };

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            resolve(results[0]);
          } else {
            resolve("No results found");
          }
        } else {
          reject("Geocoder failed due to: " + status);
        }
      });
    });
  };

  const getAddress = (placeData) => {
    const loc = placeData.formatted_address;
    setLocation(loc);

    const localityComponents = placeData.address_components.filter(
      (component) =>
        component.types.includes("locality") ||
        component.types.includes("administrative_area_level_3")
    );
    const cityComponents = placeData.address_components.filter((component) =>
      component.types.includes("administrative_area_level_3")
    );
    const cityNames = cityComponents.map((component) => component.long_name).join(", ");
    const localityNames = localityComponents.map((component) => component.long_name).join(", ");
    setCity(cityNames);
    setLocality(localityNames);    
    setPropertyState((prevState) => ({
      ...prevState,
      location: loc,
      latitude: markerPosition.lat,
      longitude: markerPosition.lng,
      city: cityNames,
      locality: localityNames,
    }));
  };

  const handleDragEnd = async (e) => {
    const newLat = e.latLng.lat();
    const newLng = e.latLng.lng();
    setMarkerPosition({ lat: newLat, lng: newLng });
    
  };

  return (
    <>
      {city && <div>City: {city}</div>}
      {location && <div>Location: {location}</div>}
      {locality && <div>Locality: {locality}</div>}

      <APIProvider apiKey={apiKey}>
        <Map
          defaultZoom={8}
          style={{ width: "100%", height: "400px" }}
          defaultCenter={{ lat: 22, lng: 77 }}
          center={markerPosition}
          gestureHandling={"greedy"}
          onClick={(e)=>{setMarkerPosition({lat:e.detail.latLng.lat,lng:e.detail.latLng.lng})}}
        >
          <MapControl position={ControlPosition.INLINE_START_BLOCK_CENTER}>
            <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
          </MapControl>

          {markerPosition && (
            <Marker
              position={markerPosition}
              draggable
              onDragEnd={handleDragEnd}
            />
          )}
        </Map>
      </APIProvider>
    </>
  );
};

export default LocationInput;

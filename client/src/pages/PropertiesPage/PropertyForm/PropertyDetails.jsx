import React, { useEffect, useState } from "react";
import GoogleMap from "../../../components/googleMap";
import { useJsApiLoader } from "@react-google-maps/api";
import LocationInput from "./LocationInputCustom";

const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";
const libraries = ["places"];
const PropertyDetails = () => {
  const [location, setLocation] = useState();
  const [markerLocation, setMarkerLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [reset, setReset] = useState(false);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: libraries,
  });

  const getFormattedAddress = (location) => {
    return new Promise((resolve, reject) => {
      if (!isLoaded) {
        reject("Google Maps API is not loaded");
      }

      const geocoder = new window.google.maps.Geocoder();
      const latlng = { lat: location.lat, lng: location.lng };

      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            resolve(results[0].formatted_address);
          } else {
            resolve("No results found");
          }
        } else {
          reject("Geocoder failed due to: " + status);
        }
      });
    });
  };

  const markerChanged = async (position) => {
    if (position) {
      setReset((p) => !p);
      try {
        const formattedAddress = await getFormattedAddress(position);
        setAddress(formattedAddress);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    }
  };

  const handlePlaceSelected = ({ lat, lng }) => {
    setMarkerLocation({ lat, lng });
  };
  useEffect(() => {
    setLocation(markerLocation);
  }, [markerLocation]);
  return (
    <>
      <LocationInput
        onPlaceSelected={handlePlaceSelected}
        reset={reset}
        value={address}
      />
      <GoogleMap markerPosition={location} markerChanged={markerChanged} />
    </>
  );
};

export default PropertyDetails;

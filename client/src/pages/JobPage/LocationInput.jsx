import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

import { TextField } from "@mui/material";

const LocationInput = ({ onPlaceSelected, reset = false, ...props }) => {
  const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";
  const [autocomplete, setAutocomplete] = useState(null);
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation("");
  }, [reset]);
  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["places"],
    });
    loader.load().then((google) => {
      const autocompleteInstance = new google.maps.places.Autocomplete(
        document.getElementById("locationInput")
      );
      setAutocomplete(autocompleteInstance);

      autocompleteInstance.addListener("place_changed", () =>
        handlePlaceChanged(autocompleteInstance, onPlaceSelected)
      );
    });
  }, [onPlaceSelected]);

  const handlePlaceChanged = (result, onPlaceSelected) => {
    if (result) {
      const place = result.getPlace();

      const { name, formatted_address, geometry } = place;
      const { lat, lng } = geometry.location;

      setLocation(formatted_address);
      onPlaceSelected({ name, formatted_address, lat: lat(), lng: lng() });
    }
  };
  return (
    <div>
      <TextField
        id="locationInput"
        value={location}
        {...props}
        label="Location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        placeholder="Search location"
        className="form-control"
      />
    </div>
  );
};

export default LocationInput;

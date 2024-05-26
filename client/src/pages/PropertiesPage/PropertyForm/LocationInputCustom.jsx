import React, { useState, useEffect } from "react";
import PlaceAutocomplete from "./PlaceAutocomplete";
import {
  APIProvider,
  ControlPosition,
  MapControl,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import { Box, TextField, Typography } from "@mui/material";

const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";

const LocationInput = ({ propertyState, setPropertyState }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [location, setLocation] = useState(null);
  const [locality, setLocality] = useState(null);
  useEffect(() => {
    if (selectedPlace) {
      const location = selectedPlace.geometry.location;
      const newMarkerPosition = { lat: location.lat(), lng: location.lng() };
      setMarkerPosition(newMarkerPosition);
    }
  }, [selectedPlace]);
  useEffect(() => {
    if (location && markerPosition && city && locality) {
      setPropertyState((prevState) => ({
        ...prevState,
        location: location,
        latitude: markerPosition.lat,
        longitude: markerPosition.lng,
        city: city,
        locality: locality,
      }));
    }
  }, [propertyState]);
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const placeData = await getFormattedAddress(markerPosition);
        getAddress(placeData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAddress();
  }, [markerPosition]);

  const getFormattedAddress = (location = { lat: 22, lng: 77 }) => {
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
    const cityNames = cityComponents
      .map((component) => component.long_name)
      .join(", ");
    const localityNames = localityComponents
      .map((component) => component.long_name)
      .join(", ");
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
      <Typography fullWidth variant="subtitle2" className="text-end">
        zoom and Click or search for location or drag and drop marker
      </Typography>
      <APIProvider apiKey={apiKey}>
        <Map
          defaultZoom={8}
          style={{ width: "100%", height: "400px" }}
          defaultCenter={{ lat: 22, lng: 77 }}
          center={markerPosition}
          gestureHandling={"greedy"}
          onClick={(e) => {
            setMarkerPosition({
              lat: e.detail.latLng.lat,
              lng: e.detail.latLng.lng,
            });
          }}
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
      <Box className="p-3 mb-2  border rounded">
        {propertyState.city && (
          <Typography variant="body1" className="mb-2">
            <strong>City:</strong> {propertyState.city}
          </Typography>
        )}
        {propertyState.location && (
          <Typography variant="body1" className="mb-2">
            <strong>Location:</strong> {propertyState.location}
          </Typography>
        )}
        {propertyState.locality && (
          <Typography variant="body1" className="mb-2">
            <strong>Locality:</strong> {propertyState.locality}
          </Typography>
        )}
        <TextField
          name="landmark"
          label="landmark"
          fullWidth
          placeholder="Enter landmark"
          value={propertyState.landmark || ""}
          onChange={(e) => {
            setPropertyState((prev) => ({
              ...prev,
              landmark: e.target.value,
            }));
          }}
        ></TextField>
      </Box>
    </>
  );
};

export default LocationInput;

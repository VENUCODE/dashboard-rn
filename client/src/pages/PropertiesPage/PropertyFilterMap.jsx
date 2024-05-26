import React, { useState, useEffect } from "react";
import {
  APIProvider,
  ControlPosition,
  MapControl,
  Map,
  Marker,
  InfoWindow,
  useMap,
} from "@vis.gl/react-google-maps";
import { Typography, Button, Chip } from "@mui/material";
import PlaceAutocomplete from "./PropertyForm/PlaceAutocomplete";
import { Circle } from "../../components/Circle";
import { hostUri } from "../../fetch";
import { FaBuilding, FaRupeeSign } from "react-icons/fa";

const apiKey = "AIzaSyDoHTfjnTnbU_EPSxffAB7ZP18PMp0jcog";

const PropertyFilterMap = ({ current }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [center, setCenter] = useState({ lat: 22, lng: 77 });
  const [windowVisible, setWindowVisible] = useState(false);
  const [panto, setPanto] = useState(null);
  const calculateCentroid = (points) => {
    if (!points.length) return null;

    let sumLat = 0;
    let sumLng = 0;

    points.forEach((point) => {
      sumLat += point.latitude;
      sumLng += point.longitude;
    });

    const centroid = {
      lat: sumLat / points.length,
      lng: sumLng / points.length,
    };

    return centroid;
  };
  useEffect(() => {
    if (selectedPlace) {
      const location = selectedPlace.geometry.location;
      const newMarkerPosition = { lat: location.lat(), lng: location.lng() };
      setMarkerPosition(newMarkerPosition);
    }
  }, [selectedPlace]);
  useEffect(() => {
    if (current.length > 0) {
      console.log(
        current.map((item) => ({ lat: item.latitude, lng: item.longitude }))
      );
    }
  }, [current]);
  useEffect(() => {
    if (markerPosition) {
      setPanto(markerPosition);
      setCenter(markerPosition);
      const fetchAddress = async () => {
        try {
          const placeData = await getFormattedAddress(markerPosition);
          getAddress(placeData);
        } catch (error) {
          console.error(error);
        }
      };
      fetchAddress();
    }
  }, [markerPosition]);

  const getFormattedAddress = (location) => {
    if (!location) return;
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
    const localityComponents = placeData.address_components.filter(
      (component) =>
        component.types.includes("locality") ||
        component.types.includes("administrative_area_level_3")
    );
    const cityComponents = placeData.address_components.filter((component) =>
      component.types.includes("administrative_area_level_2")
    );
    const stateComponents = placeData.address_components.filter((component) =>
      component.types.includes("administrative_area_level_1")
    );
    console.log({ localityComponents, cityComponents, stateComponents });
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
          defaultZoom={10}
          style={{ width: "100%", height: "400px" }}
          defaultCenter={center}
          panTo={center}
          gestureHandling={"auto"}
          disableDefaultUI={true}
          zoomControl={true}
          scaleControl={true}
          streetViewControl={true}
          onClick={(e) => {
            setCenter({
              lat: e.detail.latLng.lat,
              lng: e.detail.latLng.lng,
            });
          }}
        >
          {panto && <InfoWindow position={panto}></InfoWindow>}
          <MapControl position={ControlPosition.BLOCK_START_INLINE_END}>
            <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
          </MapControl>
          {windowVisible.visible && (
            <InfoWindow
              pixelOffset={[0, -40]}
              position={windowVisible.location}
              style={{ height: "200px", width: "200px", overflow: "hidden" }}
              onClose={() => setWindowVisible(false)}
            >
              <div className="container-fluid">
                <Typography
                  level="subtitle1"
                  style={{
                    maxWidth: "190px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {windowVisible.data.name}
                </Typography>
                <>
                  <Chip
                    size="small"
                    style={{
                      overflow: "hidden",
                      padding: 0,
                      textOverflow: "ellipis",
                      whiteSpace: "nowrap",
                    }}
                    label={windowVisible.data.type}
                    className="bg-success-subtle text-success-emphasis  rounded-4 text-capitalize text-small fw-bold "
                  />

                  <Chip
                    size="small"
                    style={{
                      overflow: "hidden",
                      padding: 0,
                      textOverflow: "ellipis",
                      whiteSpace: "nowrap",
                    }}
                    label={
                      <>
                        <FaRupeeSign />
                        {windowVisible.data.price}
                      </>
                    }
                    className=" p-0 m-0 bg-success-subtle text-success-emphasis rounded-4 text-capitalize text-small fw-bold "
                  />
                </>
                <div className="my-1  card shadow border border-1 border-danger overflow-hidden">
                  {windowVisible.data.image && (
                    <img
                      height="100px"
                      width="200px"
                      style={{ objectFit: "cover" }}
                      src={hostUri + "/" + windowVisible.data.image}
                    />
                  )}
                </div>
                <Button size="small" variant="contained" color="primary">
                  Explore
                </Button>
              </div>
            </InfoWindow>
          )}
          {current.map((prop) => {
            return (
              <Marker
                onClick={(e) => {
                  setWindowVisible({
                    visible: true,
                    location: { lat: prop.latitude, lng: prop.longitude },
                    data: {
                      name: prop.landmark || prop.description,
                      type: prop.propertyType,
                      price:
                        prop?.expectedPrice ||
                        prop?.roomPrices?.single ||
                        prop?.roomPrices?.double ||
                        prop?.roomPrices?.triple ||
                        prop?.roomPrices?.four ||
                        prop?.saleAmount ||
                        prop?.rentAmount,
                      image: prop.images?.length > 0 ? prop.images[0] : null,
                    },
                  });
                }}
                position={{ lat: prop.latitude, lng: prop.longitude }}
              />
            );
          })}

          <>{center && <Circle center={center} radius={1000} />}</>
        </Map>
      </APIProvider>
    </>
  );
};

export default PropertyFilterMap;

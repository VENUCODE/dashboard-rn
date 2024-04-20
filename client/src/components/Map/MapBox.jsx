import ReactMapGl, {
  // GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import { Box, Button } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import Geocoder from "./Geocoder";
const MapBox = ({ Location, setLocation }) => {
  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/streets-v11"
  );
  const handleMapStyleChange = () => {
    setMapStyle((prevStyle) =>
      prevStyle === "mapbox://styles/mapbox/streets-v11"
        ? "mapbox://styles/mapbox/satellite-v9"
        : "mapbox://styles/mapbox/streets-v11"
    );
  };

  const mapref = useRef();
  useEffect(() => {
    if (mapref.current) {
      mapref.current.flyTo({ center: [Location.long, Location.lat] });
    }
  }, [Location]);
  const REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoidmVudTY3OSIsImEiOiJjbHV6OTh5YjcxODd2MmtvM2Z6amdzdzN3In0._c7gUKHPj667Iv1MApWAQw";
  return (
    <Box
      sx={{
        height: "400px",
        maxWidth: "90dvw",
        minWidth: "300px",
        width: "400px",
        position: "realative",
        background: "black",
      }}
    >
      <ReactMapGl
        mapboxAccessToken={REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          latitude: Location.lat,
          longitude: Location.long,
          zoom: 10,
        }}
        projection="globe"
        mapStyle={mapStyle}
        terrain={{
          source: "mapbox-dem",
          exaggeration: 5,
        }}
        ref={mapref}
      >
        {/* <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(e) => {
            setLat(e.coords.latitude);
            setlang(e.coords.longitude);
          }}
        /> */}
        <Marker
          longitude={Location.long}
          latitude={Location.lat}
          color="#ff2342"
        />
        <Geocoder setLocation={setLocation} mapref={mapref} />
        <NavigationControl position="bottom-right" />
        <Box
          sx={{
            position: "absolute",
            bottom: 2,
            left: 2,
            zIndex: 10000,
            width: "100%",
          }}
        >
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              padding: "2px 5px",
              fontSize: "clamp(5px,8px,10px)",
              ":hover": { backgroundColor: "white", color: "black" },
            }}
            onClick={handleMapStyleChange}
          >
            {mapStyle === "mapbox://styles/mapbox/streets-v11"
              ? "satellite view"
              : "street view"}
          </Button>
        </Box>
      </ReactMapGl>{" "}
    </Box>
  );
};
export default MapBox;

import React, { useState } from "react";
import { Source, Layer, Marker, Popup } from "react-map-gl";
import PropertyCard from "./PropertyCard";
const PropertyPlots = () => {
  const [currentPlot, setCurrentPlot] = useState(null);
  const coordinates = [
    [-122.4, 37.7],
    [-122.4, 38.1],
    [-122.6, 37.8],
    [-122.5, 37.7],
  ];

  const center = coordinates.reduce(
    (acc, [x, y]) => [
      acc[0] + x / coordinates.length,
      acc[1] + y / coordinates.length,
    ],
    [0, 0]
  );
  const polygonFeature = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [coordinates],
    },
  };
  //TODO - fetching the plots and then using the coordinates have to pass to the source for mapping
  return (
    <>
      <Source id="polygon" type="geojson" data={polygonFeature}>
        <Layer
          id="polygon"
          type="fill"
          paint={{
            "fill-color": "#088",
            "fill-opacity": 0.4,
          }}
          onClick={(e) => {
            setCurrentPlot("this plot's id");
          }}
        />
      </Source>
      <Marker
        latitude={12}
        longitude={12}
        onClick={() => setCurrentPlot("this plot's id")}
      ></Marker>

      <Popup
        longitude={12}
        latitude={12}
        anchor="left"
        offset={10}
        onClose={() => setCurrentPlot(null)}
      >
        <PropertyCard />
      </Popup>
    </>
  );
};

export default PropertyPlots;

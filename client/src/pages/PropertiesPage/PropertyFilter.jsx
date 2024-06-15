import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { FaGlobeAsia } from "react-icons/fa";
import PropertyFilterMap from "./PropertyFilterMap";
import { useProperties } from "../../context/useProperties";
import PropertyLocation from "./PropertyLocation";
import { Chip } from "@mui/material";

// const toRadians = (degrees) => {
//   return degrees * (Math.PI / 180);
// };

// const haversineDistance = (lat1, lng1, lat2, lng2) => {
//   const R = 6371; // Radius of the Earth in km
//   const dLat = toRadians(lat2 - lat1);
//   const dLng = toRadians(lat2 - lng1);

//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(toRadians(lat1)) *
//       Math.cos(toRadians(lat2)) *
//       Math.sin(dLng / 2) *
//       Math.sin(dLng / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c;
// };

const PropertyFilter = ({ propertyType, current, setCurrent }) => {
  const [mapVisible, setMapVisible] = useState(false);
  const [place, setPlace] = useState({});
  const { properties, unverified, rejected } = useProperties();
  const [location, setLocation] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    let filteredProperties;

    if (location) {
      filteredProperties = current.filter((p) =>
        p.landmark.toLowerCase().includes(location.toLowerCase())
      );
      setCurrent(filteredProperties);
    } else {
      if (propertyType === "verified") {
        setCurrent(properties);
      } else if (propertyType === "notverified") {
        setCurrent(unverified);
      } else {
        setCurrent(rejected);
      }
    }

    if (sortOrder) {
      setCurrent((prevCurrent) =>
        [...prevCurrent].sort((a, b) => {
          const dateA = new Date(a.timestamp);
          const dateB = new Date(b.timestamp);
          return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
        })
      );
    }
  }, [location, propertyType, properties, rejected, unverified, sortOrder]);
  // useEffect(() => {
  //   if (propertyType === "verified") {
  //     setCurrent(properties);
  //   } else if (propertyType === "notverified") {
  //     setCurrent(unverified);
  //   } else {
  //     setCurrent(rejected);
  //   }
  // }, [properties, rejected, unverified, place]);
  const handleOnPlaceSelected = ({ lat, lng }) => {
    setPlace({
      lat,
      lng,
    });
  };

  return (
    <div className="manager-filter py-2 px-1">
      <div className="d-flex flex-row justify-content-between px-2 py-2 bg-white">
        <div className="justify-content-center align-items-center d-flex">
          <PropertyLocation
            location={location}
            setLocation={setLocation}
            onPlaceSelected={handleOnPlaceSelected}
          />
        </div>
        <div>
          <Chip
            size="small"
            className="bg-primary text-white"
            label={sortOrder === "asc" ? "oldest" : "newest"}
            onClick={() => {
              setSortOrder((prevSortOrder) =>
                prevSortOrder === "asc" ? "desc" : "asc"
              );
            }}
          />
          <FaGlobeAsia
            size={25}
            color="blue"
            className="c-pointer"
            onClick={() => setMapVisible(true)}
          />
          <Modal
            title={"Select the Location"}
            open={mapVisible}
            onCancel={() => setMapVisible(false)}
            centered
            width={1000}
          >
            <PropertyFilterMap current={current} />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;

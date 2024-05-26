import React, { useState, useEffect } from "react";
import LocationInput from "../JobPage/LocationInput";
import { FaGlobeAsia } from "react-icons/fa";
import { Modal } from "antd";
import PropertyFilterMap from "./PropertyFilterMap";
const PropertyFilter = ({ current, setCurrent }) => {
  const [mapVisible, setMapVisible] = useState(false);

  const handleOnPlaceSelected = (e) => {
    console.log({ dataFromPlaceSelected: e });
  };
  return (
    <div className="manager-filter  py-2 px-1">
      <div className="d-flex flex-row justify-content-between px-2 py-2 bg-white">
        <div className="justify-content-center align-items-center d-flex">
          <LocationInput onPlaceSelected={handleOnPlaceSelected} />
        </div>
        <div>
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

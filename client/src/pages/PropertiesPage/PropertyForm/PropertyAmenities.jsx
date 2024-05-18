import React from "react";
import Amenities from "./Amenitites";
import { useState } from "react";

const ProperyAmenities = () => {
  const [amenities, setAmenities] = useState([]);

  return (
    <div>
      <Amenities
        selectedAmenities={amenities}
        setSelectedAmenities={setAmenities}
      />
    </div>
  );
};

export default ProperyAmenities;

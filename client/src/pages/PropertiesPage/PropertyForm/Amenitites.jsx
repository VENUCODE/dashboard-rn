import React from "react";
import { Grid, Typography, Checkbox, FormControlLabel } from "@mui/material";
import {
  MdPool,
  MdFitnessCenter,
  MdLocalParking,
  MdPets,
  MdSecurity,
  MdElevator,
  MdSpa,
  MdWifi,
  MdKitchen,
  MdBalcony,
  MdDirectionsBike,
  MdFireplace,
  MdAir,
  MdLocalLaundryService,
  MdHotTub,
} from "react-icons/md";

const amenitiesList = [
  { name: "Swimming Pool", icon: <MdPool /> },
  { name: "Gym", icon: <MdFitnessCenter /> },
  { name: "Parking", icon: <MdLocalParking /> },
  { name: "Pet Friendly", icon: <MdPets /> },
  { name: "Security", icon: <MdSecurity /> },
  { name: "Elevator", icon: <MdElevator /> },
  { name: "Spa", icon: <MdSpa /> },
  { name: "WiFi", icon: <MdWifi /> },
  { name: "Modern Kitchen", icon: <MdKitchen /> },
  { name: "Balcony", icon: <MdBalcony /> },
  { name: "Cycling Track", icon: <MdDirectionsBike /> },
  { name: "Fireplace", icon: <MdFireplace /> },
  { name: "Air Conditioning", icon: <MdAir /> },
  { name: "Laundry Service", icon: <MdLocalLaundryService /> },
  { name: "Hot Tub", icon: <MdHotTub /> },
];

const Amenities = ({ selectedAmenities, setSelectedAmenities }) => {
  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Amenities
      </Typography>
      <Grid container>
        {amenitiesList.map((amenity) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            key={amenity.name}
            className={`rounded-3 p-0 my-1 ps-4 ${
              selectedAmenities.includes(amenity.name)
                ? "bg-primary-subtle"
                : ""
            }`}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedAmenities.includes(amenity.name)}
                  onChange={() => handleAmenityChange(amenity.name)}
                  icon={amenity.icon}
                  checkedIcon={amenity.icon}
                />
              }
              label={amenity.name}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Amenities;

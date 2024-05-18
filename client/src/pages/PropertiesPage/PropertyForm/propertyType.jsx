import React, { useState, useCallback } from "react";
import { Divider, Typography } from "antd";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const PropertyType = () => {
  const [propertyType, setPropertyType] = useState("residential");
  const [subType, setSubType] = useState(null);
  const [buildingType, setBuildingType] = useState(null);

  const handlePropertyTypeChange = useCallback(
    (e) => {
      setPropertyType(e.target.value);
      setSubType(null);
    },
    [setPropertyType, setSubType]
  );

  const handleSubTypeChange = useCallback(
    (e) => {
      setSubType(e.target.value);
    },
    [setSubType]
  );

  const handleBuildingTypeChange = useCallback(
    (e) => {
      setBuildingType(e.target.value);
    },
    [buildingType]
  );
  const renderSubTypeOptions = () => {
    switch (propertyType) {
      case "residential":
        return (
          <Grid
            container
            fullWidth
            className="justify-content-center"
            spacing={1}
          >
            {["rental", "sale", "pg/hostel", "flatmates"].map((type) => (
              <Grid item key={type}>
                <FormControlLabel
                  value={type}
                  control={<Radio />}
                  label={type.charAt(0).toUpperCase() + type.slice(1)}
                  checked={subType === type}
                  onChange={handleSubTypeChange}
                />
              </Grid>
            ))}
            <Grid item xs={10}>
              <FormControl className="w-100">
                <InputLabel className="bg-white text-dark">
                  Building Type
                </InputLabel>
                <Select
                  value={buildingType}
                  onChange={handleBuildingTypeChange}
                  size="small"
                >
                  {[
                    "Apartment",
                    "Independent house/villa",
                    "Gated community villa",
                  ].map((type) => (
                    <MenuItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      case "commercial":
        return (
          <>
            <Grid container spacing={1} className="justify-content-center">
              {["rent", "sale"].map((type) => (
                <Grid item key={type}>
                  <FormControlLabel
                    value={type}
                    control={<Radio />}
                    label={type.charAt(0).toUpperCase() + type.slice(1)}
                    checked={subType === type}
                    onChange={handleSubTypeChange}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container>
              <Grid item xs={10} className="mx-auto">
                <FormControl fullWidth>
                  <InputLabel className="bg-white">Commercial Type</InputLabel>
                  <Select
                    value={buildingType}
                    className="w-100"
                    onChange={handleBuildingTypeChange}
                    size="small"
                  >
                    {[
                      "office space",
                      "co-working",
                      "Shop",
                      "showroom",
                      "godown/warehouse",
                      "Industrial Shed",
                      "Industrial Building",
                      "Other business",
                      "Restaurent/cafe",
                    ].map((type) => (
                      <MenuItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </>
        );
      case "land":
        return (
          <Grid container spacing={1} className="justify-content-center">
            <Grid item>
              <FormControlLabel
                value="resale"
                control={<Radio />}
                label="Resale"
                checked={subType === "resale"}
                onChange={handleSubTypeChange}
              />
            </Grid>
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <Divider>Property Type</Divider>
      <FormControl component="fieldset">
        <RadioGroup
          row
          value={propertyType}
          onChange={handlePropertyTypeChange}
        >
          {["residential", "commercial", "land"].map((type) => (
            <FormControlLabel
              key={type}
              value={type}
              control={<Radio />}
              label={type.charAt(0).toUpperCase() + type.slice(1)}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <div className="d-flex flex-column align-items-center gap-2 w-100">
        {renderSubTypeOptions()}
      </div>
    </div>
  );
};

export default PropertyType;

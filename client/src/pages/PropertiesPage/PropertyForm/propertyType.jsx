import React, { useState, useCallback } from "react";
import {
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  FaBed,
  FaWarehouse,
  FaTable,
  FaFan,
  FaWifi,
  FaTv,
  FaTshirt,
  FaBroom,
  FaTint,
} from "react-icons/fa";

const PropertyType = ({ propertyState, setPropertyState, setValid}) => {
  const [propertyType, setPropertyType] = useState();
  const [subType, setSubType] = useState(null);
  const [buildingType, setBuildingType] = useState();
  const handlePropertyChange = (event) => {
    const { name, value } = event.target;

    setPropertyState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event, category) => {
    const value = event.target.value;
    setPropertyState((prevState) => ({
      ...prevState,
      [category]: prevState[category]?.includes(value)
        ? prevState[category].filter((item) => item !== value)
        : [...(prevState[category] || []), value],
    }));
  };
  const handleToggleChange = (event, newValue) => {
    const name = event.target.name;
    if (newValue !== null) {
      handlePropertyChange({ target: { name, value: newValue } });
    }
  };
  const handlePriceChange = (event) => {
    const { name, value } = event.target;

    // Check if the name corresponds to a room type
    if (propertyState.roomTypes.includes(name)) {
      // Update room prices
      setPropertyState((prevState) => ({
        ...prevState,
        roomPrices: {
          ...prevState.roomPrices,
          [name]: value,
        },
      }));
    } else {
      // Update other property state values
      setPropertyState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handlePropertyTypeChange = useCallback(
    (e) => {
      setPropertyType(e.target.value);
      setSubType(null);
      setBuildingType("")
      setPropertyState({});
      setValid(false);

    },
    [setPropertyType, setSubType]
  );

  const handleSubTypeChange = useCallback(
    (e) => {
      setSubType(e.target.value);
      setPropertyState({});
      setValid(false);

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
          <Grid container fullWidth className="">
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Transaction Type</FormLabel>
                <RadioGroup row value={subType} onChange={handleSubTypeChange}>
                  {["fullhouse", "pg/hostel"].map((type) => (
                    <FormControlLabel
                      key={type}
                      value={type}
                      control={<Radio required />}
                      checked={subType === type}
                      onChange={handleSubTypeChange}
                      label={type.charAt(0).toUpperCase() + type.slice(1)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl className="w-100">
                <FormLabel component="legend">Building Type</FormLabel>
                <RadioGroup
                  value={buildingType || ""}
                  onChange={handleBuildingTypeChange}
                  row
                >
                  {[
                    "Apartment",
                    "Independent house/villa",
                    "Gated community villa",
                  ].map((type) => (
                    <FormControlLabel
                      key={type}
                      value={type}
                      control={<Radio required />}
                      label={type.charAt(0).toUpperCase() + type.slice(1)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>

            {subType === "pg/hostel" && (
              <div className="d-flex w-100 flex-wrap">
                {/* Accommodation Type */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Accommodation Type</FormLabel>
                    <RadioGroup
                      row
                      name="accommodationType"
                      value={propertyState.accommodationType || ""}
                      onChange={handlePropertyChange}
                    >
                      {["pg", "hostel"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* Tenant Type */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Tenant Type</FormLabel>
                    <RadioGroup
                      row
                      name="tenantType"
                      value={propertyState.tenantType || ""}
                      onChange={handlePropertyChange}
                    >
                      {["male", "female", "other"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* Room Type */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Room Types</FormLabel>
                    <RadioGroup
                      row
                      name="roomTypes"
                      value={propertyState.roomType || ""}
                      // onChange={(e) => {
                      //   handlePriceChange(e);
                      // setPropertyState((prevState) => ({
                      //   ...prevState,
                      //   roomPrices: {},
                      // }));
                      // }}
                    >
                      {["single", "double", "triple", "four"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Checkbox />}
                          checked={
                            propertyState.roomTypes?.includes(type) || false
                          }
                          onChange={(e) => {
                            handleCheckboxChange(e, "roomTypes");
                            setPropertyState((prevState) => ({
                              ...prevState,
                              roomPrices: {},
                            }));
                          }}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend" className="my-2">
                      Room Prices
                    </FormLabel>
                    <Grid container spacing={2}>
                      {propertyState.roomTypes?.length > 0 &&
                        propertyState.roomTypes.map((type) => (
                          <Grid item xs={6}>
                            <TextField
                              key={type}
                              name={type}
                              className="w-100"
                              label={
                                type.charAt(0).toUpperCase() +
                                type.slice(1) +
                                " price"
                              }
                              type="number"
                              value={propertyState.roomPrices[type] || ""}
                              onChange={handlePriceChange}
                            />
                          </Grid>
                        ))}
                    </Grid>
                  </FormControl>
                </Grid>

                {/* Amenities */}
                <Grid container className="d-flex flex-wrap mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Amenities</FormLabel>
                    <FormGroup row>
                      {[
                        { label: "Bed", icon: <FaBed /> },
                        { label: "Warehouse", icon: <FaWarehouse /> },
                        { label: "Study table", icon: <FaTable /> },
                        { label: "Fan-AC", icon: <FaFan /> },
                        { label: "Wifi", icon: <FaWifi /> },
                        { label: "TV", icon: <FaTv /> },
                        { label: "Laundry", icon: <FaTshirt /> },
                        { label: "Cleaning service", icon: <FaBroom /> },
                        { label: "Water purifier", icon: <FaTint /> },
                      ].map((item) => (
                        <FormControlLabel
                          key={item.label}
                          value={item.label}
                          control={<Checkbox />}
                          label={
                            <span>
                              {item.icon}{" "}
                              {item.label.charAt(0).toUpperCase() +
                                item.label.slice(1)}
                            </span>
                          }
                          checked={
                            propertyState.amenities?.includes(item.label) ||
                            false
                          }
                          onChange={(e) => handleCheckboxChange(e, "amenities")}
                          className="mr-3" // Add margin to the right for spacing
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>

                {/* Shared Facilities */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Shared Facilities</FormLabel>
                    <RadioGroup
                      row
                      name="sharedFacilities"
                      value={propertyState.sharedFacilities || ""}
                      onChange={handlePropertyChange}
                    >
                      {["Attached bathroom", "Shared Bathroom"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* Security */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Security</FormLabel>
                    <FormGroup row>
                      {["CCTV", "Security guard"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Checkbox />}
                          label={
                            <span>
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </span>
                          }
                          checked={
                            propertyState.security?.includes(type) || false
                          }
                          onChange={(e) => handleCheckboxChange(e, "security")}
                          className="mr-3" // Add margin to the right for spacing
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>

                {/* Rules and Regulations */}
                <Grid container className="d-flex flex-wrap mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Rules and Regulations
                    </FormLabel>
                    <FormGroup row>
                      {[
                        "Visitor policy",
                        "Noise restriction",
                        "Smoking/alcohol policies",
                      ].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Checkbox />}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                          checked={
                            propertyState.rulesAndRegulations?.includes(type) ||
                            false
                          }
                          onChange={(e) =>
                            handleCheckboxChange(e, "rulesAndRegulations")
                          }
                          className="mr-3"
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>

                {/* Parking Possibility */}
                <Grid container className="d-flex mb-3" spacing={2}>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Parking Possibility
                      </FormLabel>
                      <RadioGroup
                        row
                        name="parkingPossibility"
                        value={propertyState.parkingPossibility || ""}
                        onChange={handlePropertyChange}
                      >
                        {["Yes", "No"].map((type) => (
                          <FormControlLabel
                            key={type}
                            value={type}
                            control={<Radio required />}
                            label={type.charAt(0).toUpperCase() + type.slice(1)}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            )}
            {subType === "fullhouse" && (
              <div className="d-flex w-100 flex-wrap">
                {/* Property Type */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Property type</FormLabel>
                    <RadioGroup
                      row
                      name="fhpropertyType"
                      value={propertyState.fhpropertyType || ""}
                      onChange={handlePropertyChange}
                    >
                      {[
                        "apartment",
                        "villa",
                        "independent house",
                        "farm house",
                        "other",
                      ].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* BHK Type */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">BHK type</FormLabel>
                    <RadioGroup
                      row
                      name="bhkType"
                      value={propertyState.bhkType || ""}
                      onChange={handlePropertyChange}
                    >
                      {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"].map(
                        (type) => (
                          <FormControlLabel
                            key={type}
                            value={type}
                            control={<Radio required />}
                            label={type.charAt(0).toUpperCase() + type.slice(1)}
                          />
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* Number of bathrooms */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">No of bathrooms</FormLabel>
                    <RadioGroup
                      row
                      name="bathrooms"
                      value={propertyState.bathrooms || ""}
                      onChange={handlePropertyChange}
                    >
                      {["1", "2", "3", "4", "4+"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {/* Room Type */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Furnish Status</FormLabel>
                    <RadioGroup
                      row
                      name="furnished"
                      value={propertyState.furnished || ""}
                      onChange={handlePropertyChange}
                    >
                      {["Fully Furnished", "Semi Furnished", "Unfurnished"].map(
                        (type) => (
                          <FormControlLabel
                            key={type}
                            value={type}
                            control={<Radio required />}
                            label={type.charAt(0).toUpperCase() + type.slice(1)}
                          />
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* Parking Type */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Parking Status</FormLabel>
                    <RadioGroup
                      row
                      name="parking"
                      value={propertyState.parking || ""}
                      onChange={handlePropertyChange}
                    >
                      {["Covered", "Open", "None"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* water supply */}
                <Grid container className="d-flex mb-3">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Water supply</FormLabel>
                    <RadioGroup
                      row
                      name="waterSupply"
                      value={propertyState.waterSupply || ""}
                      onChange={handlePropertyChange}
                    >
                      {["Corporate", "Borewell", "Both", "None"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {/* Description */}
                <Grid container className="mb-2" spacing={2}>
                  <Grid item xs={12}>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">Description</FormLabel>
                      <TextField
                        required
                        size="small"
                        name="description"
                        value={propertyState.description || ""}
                        onChange={handlePropertyChange}
                        multiline
                        rows={4}
                        className="w-100"
                        placeholder="Describe the property"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <FormLabel>AvailableFrom</FormLabel>
                      <TextField
                        required
                        type="date"
                        name="availableFrom"
                        value={propertyState.availableFrom || ""}
                        onChange={handlePropertyChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <FormLabel>Expected Price</FormLabel>
                      <TextField
                        required
                        type="number"
                        name="expectedPrice"
                        value={propertyState.expectedPrice || ""}
                        onChange={handlePropertyChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Price Negotiable</FormLabel>
                      <ToggleButtonGroup
                        value={propertyState.priceNegotiable}
                        exclusive
                        size="small"
                        color="primary"
                        
                        onChange={handleToggleChange}
                        aria-label="Price Negotiable"
                      >
                        <ToggleButton
                          name="priceNegotiable"
                          value={true}
                          aria-label="Yes"
                        >
                          Yes
                        </ToggleButton>
                        <ToggleButton
                          name="priceNegotiable"
                          value={false}
                          aria-label="no"
                        >
                          No
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </div>
            )}
          </Grid>
        );
      case "commercial":
        return (
          <>
            <Grid container>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Transaction Type</FormLabel>
                  <RadioGroup
                    row
                    value={subType}
                    onChange={handleSubTypeChange}
                  >
                    {["rent", "sale"].map((type) => (
                      <FormControlLabel
                        key={type}
                        value={type}
                        control={<Radio required />}
                        checked={subType === type}
                        onChange={handleSubTypeChange}
                        label={type.charAt(0).toUpperCase() + type.slice(1)}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} container alignItems="center">
                <Grid item xs={12}>
                  <Typography className="text-dark my-2" level={12}>
                    Property Dimensions
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    fullWidth
                    label="Property Area"
                    name="propertyArea"
                    type="number"
                    value={propertyState.propertyArea || ""}
                    onChange={handlePropertyChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel className="bg-white" id="propertyAreaUnitLabel">
                      Unit
                    </InputLabel>
                    <Select
                      required
                      labelId="propertyAreaUnitLabel"
                      name="propertyAreaUnit"
                      value={propertyState.propertyAreaUnit || "cent"}
                      onChange={handlePropertyChange}
                    >
                      {[
                        "guntha",
                        "murabba",
                        "cent",
                        "ground",
                        "square yard",
                        "maria",
                        "chatak",
                        "square feet",
                        "square meter",
                        "acre",
                        "bigha",
                        "hectare",
                        "kanal",
                        "marla",
                        "kattha",
                        "dismil",
                        "purcha",
                        "rood",
                        "biswa",
                        "gaj",
                      ].map((unit) => (
                        <MenuItem key={unit} value={unit}>
                          {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} className="my-4">
                  <TextField
                    required
                    fullWidth
                    label="Number of FLoors"
                    name="noOfFloors"
                    type="number"
                    value={propertyState.noOfFloors || ""}
                    onChange={handlePropertyChange}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} className="d-flex flex-wrap mb-3">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Property Features</FormLabel>
                  <FormGroup row>
                    {[
                      "Elevator",
                      "Parking space",
                      "Loading dock",
                      "Security system",
                      "Air conditioner",
                      "Heating system",
                      "Wifi",
                    ].map((feature) => (
                      <FormControlLabel
                        key={feature}
                        value={feature}
                        control={<Checkbox />}
                        label={
                          feature.charAt(0).toUpperCase() + feature.slice(1)
                        }
                        checked={
                          propertyState.propertyFeatures?.includes(feature) ||
                          false
                        }
                        onChange={(e) =>
                          handleCheckboxChange(e, "propertyFeatures")
                        }
                        className="mr-3"
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} className="d-flex flex-wrap mb-3">
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Additional Facilities
                  </FormLabel>
                  <FormGroup row>
                    {[
                      "Conference hall",
                      "Kitchen/cafeteria",
                      "Restrooms",
                      "Storage space",
                    ].map((facility) => (
                      <FormControlLabel
                        key={facility}
                        value={facility}
                        control={<Checkbox />}
                        label={
                          facility.charAt(0).toUpperCase() + facility.slice(1)
                        }
                        checked={
                          propertyState.additionalFacilities?.includes(
                            facility
                          ) || false
                        }
                        onChange={(e) =>
                          handleCheckboxChange(e, "additionalFacilities")
                        }
                        className="mr-3"
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </Grid>
              {subType === "sale" && (
                <>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <FormLabel>Sale Amount</FormLabel>
                      <TextField
                        required
                        fullWidth
                        name="saleAmount"
                        type="number"
                        value={propertyState.saleAmount || ""}
                        onChange={handlePropertyChange}
                      />
                    </FormControl>
                  </Grid>
                </>
              )}
              {subType === "rent" && (
                <>
                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Lease Type</FormLabel>
                      <RadioGroup
                        row
                        name="leaseType"
                        value={propertyState.leaseType || ""}
                        onChange={handlePropertyChange}
                      >
                        {[
                          "Net",
                          "Gross",
                          "Modified Gross",
                          "Percentage",
                          "Other",
                        ].map((type) => (
                          <FormControlLabel
                            key={type}
                            value={type}
                            control={<Radio required />}
                            label={type.charAt(0).toUpperCase() + type.slice(1)}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Grid>{" "}
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <FormLabel>Rent Amount</FormLabel>
                      <TextField
                        required
                        fullWidth
                        name="rentAmount"
                        type="number"
                        value={propertyState.rentAmount || ""}
                        onChange={handlePropertyChange}
                      />
                    </FormControl>
                  </Grid>
                </>
              )}
            </Grid>

            <Grid container>
              <Grid item xs={12} className="mx-auto">
                <FormControl fullWidth>
                  <FormLabel className="bg-white">Commercial Type</FormLabel>
                  <Select
                    required
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
      case "land_plot":
        return (
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Transaction Type</FormLabel>
                <RadioGroup row value={subType} onChange={handleSubTypeChange}>
                  {["resale"].map((type) => (
                    <FormControlLabel
                      key={type}
                      value={type}
                      control={<Radio required />}
                      checked={subType === "resale"}
                      onChange={handleSubTypeChange}
                      label={type.charAt(0).toUpperCase() + type.slice(1)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            {subType == "resale" && (
              <>
                <Grid item xs={12}>
                  <Typography level={12} className="text-dark">
                    Propery Area
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    fullWidth
                    label="Property Area"
                    name="pplotArea"
                    type="number"
                    value={propertyState.pplotArea || ""}
                    onChange={handlePropertyChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel className="bg-white" id="propertyAreaUnitLabel">
                      Unit
                    </InputLabel>
                    <Select
                      required
                      labelId="propertyAreaUnitLabel"
                      name="propertyAreaUnit"
                      value={propertyState.propertyAreaUnit || "cent"}
                      onChange={handlePropertyChange}
                    >
                      {[
                        "guntha",
                        "murabba",
                        "cent",
                        "ground",
                        "square yard",
                        "maria",
                        "chatak",
                        "square feet",
                        "square meter",
                        "acre",
                        "bigha",
                        "hectare",
                        "kanal",
                        "marla",
                        "kattha",
                        "dismil",
                        "purcha",
                        "rood",
                        "biswa",
                        "gaj",
                      ].map((unit) => (
                        <MenuItem key={unit} value={unit}>
                          {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Width in feets"
                    name="pwidth"
                    type="number"
                    value={propertyState.pwidth || ""}
                    onChange={handlePropertyChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Height in feets"
                    name="plength"
                    type="number"
                    value={propertyState.plength || ""}
                    onChange={handlePropertyChange}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    label="Floors Allowed"
                    name="pfloorsAllowed"
                    type="number"
                    value={propertyState.pfloorsAllowed || ""}
                    onChange={handlePropertyChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gated security</FormLabel>
                    <RadioGroup
                      row
                      name="pGated_Security"
                      value={propertyState.pGated_Security || ""}
                      onChange={handlePropertyChange}
                    >
                      {["Yes", "No"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          checked={propertyState.pGated_Security === type}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Inside Gated project
                    </FormLabel>
                    <RadioGroup
                      row
                      name="gatedProject"
                      value={propertyState.gatedProject || ""}
                      onChange={handlePropertyChange}
                    >
                      {["Yes", "No"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          checked={propertyState.gatedProject === type}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Approved By panchayat
                    </FormLabel>
                    <RadioGroup
                      row
                      name="panchayatApproval"
                      value={propertyState.panchayatApproval || ""}
                      onChange={handlePropertyChange}
                    >
                      {["Yes", "No"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          checked={propertyState.panchayatApproval === type}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Road Facing</FormLabel>
                    <RadioGroup
                      row
                      name="pWidthofFacingRoad"
                      value={propertyState.pWidthofFacingRoad || ""}
                      onChange={handlePropertyChange}
                    >
                      {["east", "west", "north", "south"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          checked={propertyState.pWidthofFacingRoad === type}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Sewage connection</FormLabel>
                    <RadioGroup
                      row
                      name="pSewage_Connection"
                      value={propertyState.pSewage_Connection || ""}
                      onChange={handlePropertyChange}
                    >
                      {["underground", "open", "none"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          checked={propertyState.pSewage_Connection === type}
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Electricity connection
                    </FormLabel>
                    <RadioGroup
                      row
                      name="pElectricity_Connection"
                      value={propertyState.pElectricity_Connection || ""}
                      onChange={handlePropertyChange}
                    >
                      {["Grid", "Solar", "Both", "None"].map((type) => (
                        <FormControlLabel
                          key={type}
                          value={type}
                          control={<Radio required />}
                          checked={
                            propertyState.pElectricity_Connection === type
                          }
                          label={type.charAt(0).toUpperCase() + type.slice(1)}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Water supply</FormLabel>
                    <RadioGroup
                      row
                      name="pWater_Supply"
                      value={propertyState.pWater_Supply || ""}
                      onChange={handlePropertyChange}
                    >
                      {["corporation", "Borewell", "Both", "None"].map(
                        (type) => (
                          <FormControlLabel
                            key={type}
                            value={type}
                            control={<Radio required />}
                            checked={propertyState.pWater_Supply === type}
                            label={type.charAt(0).toUpperCase() + type.slice(1)}
                          />
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <FormLabel>AvailableFrom</FormLabel>
                    <TextField
                      required
                      type="date"
                      name="availableFrom"
                      value={propertyState.availableFrom || ""}
                      onChange={handlePropertyChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <FormLabel>Expected Price</FormLabel>
                    <TextField
                      required
                      type="number"
                      name="expectedPrice"
                      value={propertyState.expectedPrice || ""}
                      onChange={handlePropertyChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Price Negotiable</FormLabel>
                    <ToggleButtonGroup
                      value={propertyState.priceNegotiable}
                      exclusive
                      size="small"
                      onChange={handleToggleChange}
                      aria-label="under loan"
                    >
                      <ToggleButton
                        name="priceNegotiable"
                        value={true}
                        aria-label="Yes"
                      >
                        Yes
                      </ToggleButton>
                      <ToggleButton
                        name="priceNegotiable"
                        value={false}
                        aria-label="no"
                      >
                        No
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Currently under loan
                    </FormLabel>
                    <ToggleButtonGroup
                      value={propertyState.underLoan}
                      exclusive
                      size="small"
                      onChange={handleToggleChange}
                      aria-label="under loan"
                    >
                      <ToggleButton
                        name="underLoan"
                        value={true}
                        aria-label="Yes"
                      >
                        Yes
                      </ToggleButton>
                      <ToggleButton
                        name="underLoan"
                        value={false}
                        aria-label="no"
                      >
                        No
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </FormControl>
                </Grid>
              </>
            )}
          </Grid>
        );
      default:
        return null;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPropertyState((prevState) => ({
      ...prevState,
      propertyType: propertyType,
      transactionTypes: [subType],
    }));
    setValid(true);

  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Propery Type</FormLabel>{" "}
          <RadioGroup
            row
            value={propertyType}
            onChange={handlePropertyTypeChange}
          >
            {["residential", "commercial", "land_plot"].map((type) => (
              <FormControlLabel
                key={type}
                value={type}
                control={<Radio required />}
                label={type.charAt(0).toUpperCase() + type.slice(1)}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <div className="d-flex flex-column align-items-center gap-2 w-100">
          {renderSubTypeOptions()}
          <Button type="submit" fullWidth variant="outlined" className="m-3">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PropertyType;

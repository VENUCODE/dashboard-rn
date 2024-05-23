import PropertyDetails from "./PropertyDetails";
import PropertyPictures from "./PropertyPictures";
import PropertyLocality from "./PropertyLocality";
import PropertyType from "./propertyType";
import { Grid } from "@mui/material";
import { Card } from "antd";
import ProperyAmenities from "./PropertyAmenities";
import { useState } from "react";

const PropertyAddForm = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className="h-100">
            <PropertyType />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="h-100">
            <PropertyDetails />
            <PropertyPictures />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyAddForm;

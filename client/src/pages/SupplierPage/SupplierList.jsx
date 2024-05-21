import React from "react";
import SupplierCard from "./SupplierCard";
import { Grid } from "@mui/material";
const SupplierList = ({ current }) => {
  return (
    <>
      <Grid container spacing={2} className="my-2">
        {current.map((data, index) => {
          return <SupplierCard key={index} supplier={data} />;
        })}
      </Grid>
    </>
  );
};

export default SupplierList;

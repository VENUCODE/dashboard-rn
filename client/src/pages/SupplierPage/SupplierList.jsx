import React from "react";
import SupplierCard from "./SupplierCard";
import { Grid } from "@mui/material";
import PaginationComponent from "../PropertiesPage/PaginationComponent";
const SupplierList = ({ current }) => {
  return (
    <>
      <div className="mb-5 p-0 container-fluid">
        {
          <PaginationComponent items={current} itemsPerPage={8}>
            {(current) => (
              <>
                <Grid container spacing={2} className="my-2">
                  {current.map((data, index) => {
                    return <SupplierCard key={index} supplier={data} />;
                  })}
                </Grid>
              </>
            )}
          </PaginationComponent>
        }
      </div>
    </>
  );
};

export default SupplierList;

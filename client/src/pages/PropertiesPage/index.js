import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { Grid } from "@mui/material";
const PropertiesPage = () => {
  const [Properties, setProperties] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rightneeds.azurewebsites.net/properties",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {};
  }, []);

  return (
    <div className="content-body ">
      <div className="container-fluid">
        <h1>Properties Page</h1>
        <div>{Loading && <span>Fetching properties</span>}</div>
        <Grid container>
          {Properties?.map((prop) => {
            return (
              <>
                <PropertyCard data={prop} />
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default PropertiesPage;

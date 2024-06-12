import React, { useEffect, useState } from "react";
import PropertySaleCount from "./PropertySaleCount";
import TotalPropertiesCount from "./TotalPropertiesCount";
import TotalRevenue from "./TotalNewArrivals";
import { Grid } from "@mui/material";
import { endpoints, hostUri } from "../../../fetch";
const PropertyCount = () => {
  const [statData, setStatData] = useState({
    total: 1,
    res: 0,
    com: 0,
    lan: 0,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  });
  useEffect(() => {
    const getCounts = async () => {
      try {
        const response = await fetch(hostUri + endpoints.getPropertyStats);
        if (!response.ok) {
          message.error("failed to fetch");
          throw new Error("Failed to fetch property stats");
        }
        const result = await response.json();
        setStatData({
          total: result.totalPropertiesCount,
          res: result.residentialCount,
          com: result.commercialCount,
          lan: result.landPlotCount,
          data: [...Object.values(result.monthlyArrivals)],
        });
      } catch (error) {
        message.error("Error fetching property stats", 1);
      }
    };
    getCounts();
  }, []);

  return (
    <>
      <div className="col-xl-6 col-xxl-6 d-flex ">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TotalPropertiesCount
              percentage={
                (
                  (statData.res + statData.com + statData.lan) /
                  statData.total
                ).toFixed(2) * 100
              }
              total={statData.total}
            />
          </Grid>
          <Grid item xs={4}>
            <PropertySaleCount
              total={statData.total}
              saleCount={statData.res}
              title="Residential"
              percetage={
                ((statData.res * 100) / statData.total).toFixed(0) + "%"
              }
              styleClass="primary"
            />
          </Grid>
          <Grid item xs={4}>
            <PropertySaleCount
              total={statData.total}
              saleCount={statData.com}
              title="Commercial"
              percetage={
                ((statData.com * 100) / statData.total).toFixed(0) + "%"
              }
              styleClass="success"
            />
          </Grid>
          <Grid item xs={4}>
            <PropertySaleCount
              total={statData.total}
              saleCount={statData.lan}
              title="Land/plot"
              percetage={
                ((statData.lan * 100) / statData.total).toFixed(0) + "%"
              }
              styleClass="danger"
            />
          </Grid>
        </Grid>
      </div>
      <TotalRevenue data={statData.data} />{" "}
    </>
  );
};

export default PropertyCount;

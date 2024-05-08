import React from "react";
import PropertySaleCount from "./PropertySaleCount";
import TotalPropertiesCount from "./TotalPropertiesCount";
import TotalRevenue from "./TotalNewArrivals";

const PropertyCount = () => {
  return (
    <>
      <div className="col-xl-6 col-xxl-6">
        <div className="row">
          <TotalPropertiesCount />
          <PropertySaleCount
            saleCount="2306"
            title="Property Sale count"
            percetage="78%"
            targetText="Target 3k/month"
            styleClass="primary"
          />
          <PropertySaleCount
            saleCount="2206"
            title="Properties for Rent"
            percetage="22%"
            targetText="Target 3k/month"
            styleClass="success"
          />
        </div>
      </div>
      <TotalRevenue />
    </>
  );
};

export default PropertyCount;

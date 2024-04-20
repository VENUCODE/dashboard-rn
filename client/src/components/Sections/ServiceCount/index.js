import React from "react";
import PropertySaleCount from "./ServiceCategoryCount";
import TotalPropertiesCount from "./TotalCategoriesCount";
import TotalRevenue from "./TotalRevenue";

const ServiceCount = () => {
  return (
    <>
      <div className="col-xl-6 col-xxl-6">
        <div class="row">
          <TotalPropertiesCount
            title={"Total Services available"}
            subtitle={"Active services"}
            totalCount="1231"
            percentage="50"
            classes="bg-info"
          />
          <PropertySaleCount
            saleCount="236"
            title="Service Categories"
            percetage="78%"
            targetText=""
            styleClass="primary"
          />
          <PropertySaleCount
            saleCount="226"
            title="Active Service Categories"
            percetage="22%"
            targetText=""
            styleClass="success"
          />
        </div>
      </div>
      <TotalRevenue color="#232343" />
    </>
  );
};

export default ServiceCount;

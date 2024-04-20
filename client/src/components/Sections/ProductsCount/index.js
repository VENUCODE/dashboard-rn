import React from "react";
import PropertySaleCount from "./ProductCategoryCount";
import TotalPropertiesCount from "./TotalCategoriesCount";
import TotalRevenue from "./TotalRevenue";

const ProductCount = () => {
  return (
    <>
      <div className="col-xl-6 col-xxl-6">
        <div class="row">
          <TotalPropertiesCount
            title={"Total Products available"}
            subtitle={"Products Sold till date"}
            totalCount="1231"
            percentage="50"
            classes="bg-warning"
          />
          <PropertySaleCount
            saleCount="236"
            title="Product Categories"
            percetage="78%"
            targetText=""
            styleClass="primary"
          />
          <PropertySaleCount
            saleCount="226"
            title="Active Product Categories"
            percetage="22%"
            targetText=""
            styleClass="success"
          />
        </div>
      </div>
      <TotalRevenue color="#121212" />
    </>
  );
};

export default ProductCount;

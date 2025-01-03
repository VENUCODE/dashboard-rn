import React from "react";
import DashBoardWelcome from "../../components/Sections/DashBoardWelcome";
import PropertyCount from "../../components/Sections/PropertyCount/PropertyCount";
import ServiceCount from "../../components/Sections/ServiceCount";
import ProductsCount from "../../components/Sections/ProductsCount";
import JobsCount from "../../components/Sections/JobsCount";

const LandingSection = () => {
  return (
    <div className="content-body">
      <div className="container-fluid ">
        <DashBoardWelcome />
        <div className="row form-head  page-titles d-flex bg-danger gradient-1  shadow  border-secondary  align-items-center">
          <div className="me-auto  d-lg-block d-block">
            <h4 className="mb-1 text-white">PROPERTY OVERVIEW</h4>
          </div>
        </div>
        <div className="row">
          <PropertyCount />
        </div>
        <div className="row form-head  page-titles d-flex bg-info gradient-3  shadow  border-secondary  align-items-center">
          <div className="me-auto  d-lg-block d-block">
            <h4 className="mb-1 text-white">SERVICES OVERVIEW</h4>
          </div>
        </div>
        <div className="row">
          <ServiceCount />
        </div>
        <div className="row form-head  page-titles d-flex bg-warning gradient-7  shadow  border-secondary  align-items-center">
          <div className="me-auto  d-lg-block d-block">
            <h4 className="mb-1 text-white">PRODUCTS OVERVIEW</h4>
          </div>
        </div>
        <div className="row">
          <ProductsCount />
        </div>
        <JobsCount />
      </div>
    </div>
  );
};

export default LandingSection;

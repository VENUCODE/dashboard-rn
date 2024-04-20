import React from "react";
import DashBoardWelcome from "../../components/Sections/DashBoardWelcome";
import PropertyCount from "../../components/Sections/PropertyCount/PropertyCount";
import ServiceCount from "../../components/Sections/ServiceCount";
import ProductsCount from "../../components/Sections/ProductsCount";
import JobsCount from "../../components/Sections/JobsCount";
import AgentCard from "../AgentPage/AgentsCard";

const LandingSection = () => {
  return (
    <>
      <div className="container-fluid ">
        <DashBoardWelcome />
        <div class="row form-head  page-titles d-flex bg-danger gradient-1  shadow  border-secondary  align-items-center">
          <div class="me-auto  d-lg-block d-block">
            <h4 class="mb-1 text-white">PROPERTY OVERVIEW</h4>
          </div>
        </div>
        <div className="row">
          <PropertyCount />
        </div>
        <div class="row form-head  page-titles d-flex bg-info gradient-3  shadow  border-secondary  align-items-center">
          <div class="me-auto  d-lg-block d-block">
            <h4 class="mb-1 text-white">SERVICES OVERVIEW</h4>
          </div>
        </div>
        <div className="row">
          <ServiceCount />
        </div>
        <div class="row form-head  page-titles d-flex bg-warning gradient-12  shadow  border-secondary  align-items-center">
          <div class="me-auto  d-lg-block d-block">
            <h4 class="mb-1 text-white">PRODUCTS OVERVIEW</h4>
          </div>
        </div>
        <div className="row">
          <ProductsCount />
        </div>
        <JobsCount />
        <AgentCard />
      </div>
    </>
  );
};

export default LandingSection;

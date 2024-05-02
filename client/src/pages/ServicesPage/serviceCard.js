import React from "react";
import "./serviceCard.css";
const ServiceCard = ({ service }) => {
  return (
    <div class="col-lg-3 col-md-4 col-sm-6  mb-4 mb-lg-0">
      <div class="card-flyer">
        <div class="text-box d-flex flex-md-column flex-row">
          <div class="image-box">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
              alt=""
            />
          </div>
          <div class="text-container text-left text-sm-center">
            <h6>{service.serviceName}</h6>
            <p>{service.serviceDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

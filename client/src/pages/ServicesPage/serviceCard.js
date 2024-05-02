import React from "react";
import "./serviceCard.css";
import { Button } from "@mui/material";
import { FaCalendarTimes, FaCity, FaRegTrashAlt } from "react-icons/fa";
import { BsBodyText } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import Time from "../../components/TimeAgo";
const ServiceCard = ({ service }) => {
  return (
    <div class="col-lg-3 col-md-4 col-sm-6  mb-4 mb-lg-0">
      <div class="card-flyer shadow">
        <div class="text-box pb-2">
          <div class="image-box">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
              alt=""
            />
          </div>
          <div class="text-container  ps-3">
            <h6>{service.serviceName}</h6>
            <p className=" text-muted my-1">
              <BsBodyText className="me-2 text-black" />
              {service.serviceDescription}
            </p>
            <div className=" text-muted my-1 gap-2 ">
              <FaCity className="me-2 text-black" />
              {service.city}
            </div>
            <div className=" text-muted my-1 ">
              <FaCalendarTimes className="me-2 text-black" />{" "}
              <Time date={service.timestamp} />
            </div>
          </div>
          <div className=" d-flex col-12 justify-content-around align-items-center gap-1">
            <Button
              variant="outlined"
              color="error"
              className=" px-4 shadow-sm py-1 rounded-4 col-4"
            >
              <FaRegTrashAlt size={15} className="text-danger" />
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              className=" px-4 shadow-sm py-1 rounded-4 col-4"
            >
              <LuView size={15} className="text-secondary" />
            </Button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

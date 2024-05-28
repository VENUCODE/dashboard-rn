import React, { useState } from "react";
import "./serviceCard.css";

import { Button, CircularProgress } from "@mui/material";

import { FaCalendarTimes, FaCity, FaRegTrashAlt } from "react-icons/fa";

import { BsBodyText } from "react-icons/bs";

import { LuView } from "react-icons/lu";
import Time from "../../components/TimeAgo";
import ImageCarousel from "../PropertiesPage/ImageCarousel";

import { hostUri, endpoints } from "../../fetch";

import { useServices } from "../../context/useServices";

import { message } from "antd";

import { Modal, Row, Col, Image } from "antd";

import { Typography } from "@mui/material";

const ServiceCard = ({ service }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { getServices } = useServices();
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDeleteService = async (pid) => {
    try {
      setDeleteLoading(true);

      const response = await fetch(hostUri + endpoints.deleteService, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          pid,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        getServices();
        setDeleteLoading(false);
        message.success(data.message, 1);
      } else {
        message.error(data.message, 1);
      }
    } catch (error) {
      console.log(error.message);
      message.error(error.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div
      class="col-lg-3 col-md-4 col-sm-6  mb-4 mb-lg-0"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      {" "}
      <div class="shadow">
        {" "}
        <div class=".card text-box pb-2">
          {" "}
          <div class="image-box">
            {" "}
            <ImageCarousel images={service.images} path={hostUri + "/"} />{" "}
          </div>{" "}
          <div class="text-container  ps-3">
            {" "}
            <h6> {service.serviceName}</h6>{" "}
            <p
              className=" text-muted my-1 w-100 text-nowrap overflow-hidden"
              style={{
                whiteSpace: "wrap",
                textOverflow: "ellipsis",
              }}
            >
              {" "}
              <BsBodyText className="me-2 text-black" />{" "}
              {service.serviceDescription}
            </p>{" "}
            <div className=" text-muted my-1 gap-2 ">
              {" "}
              <FaCity className="me-2 text-black" />{" "}
              {service.location || service.city}
            </div>{" "}
            <div className=" text-muted my-1 ">
              {" "}
              <FaCalendarTimes className="me-2 text-black" />{" "}
              <Time date={service.createdAt || service.timestamp} />{" "}
            </div>{" "}
          </div>{" "}
          <div className=" d-flex col-12 justify-content-around align-items-center gap-1">
            {" "}
            <Button
              variant="outlined"
              color="error"
              disabled={deleteLoading}
              className=" px-4 shadow-sm py-1 rounded-4 col-4"
              onClick={() => {
                handleDeleteService(service._id);
              }}
            >
              {" "}
              {deleteLoading && <CircularProgress size={15} />}
              <FaRegTrashAlt size={15} className="text-danger" />{" "}
            </Button>{" "}
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setIsModalVisible(true)}
              className=" px-4 shadow-sm py-1 rounded-4 col-4"
            >
              {" "}
              <LuView size={15} className="text-secondary" />{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Modal
        title={service.serviceName}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        centered
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            {" "}
            Close{" "}
          </Button>,
        ]}
      >
        {" "}
        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {" "}
          <Row gutter={[16, 16]}>
            {" "}
            <Col span={24}>
              {" "}
              <div class="image-box">
                {" "}
                <ImageCarousel
                  images={service.images}
                  path={hostUri + "/"}
                />{" "}
              </div>{" "}
            </Col>{" "}
            <Col span={24}>
              {" "}
              <Typography variant="h6">
                {" "}
                Price: ₹ {service.servicePrice}
              </Typography>{" "}
            </Col>{" "}
            <Col span={24}>
              {" "}
              <Typography variant="body1">
                {" "}
                <strong>Description: </strong>{" "}
                {service.serviceDescription !== "no des"
                  ? service.serviceDescription
                  : "No description available"}
              </Typography>{" "}
            </Col>{" "}
            <Col span={24}>
              {" "}
              <Typography variant="body1">
                {" "}
                <strong>City: </strong> {service.location}
              </Typography>{" "}
            </Col>{" "}
            <Col span={24}>
              {" "}
              <Typography variant="body1">
                {" "}
                <strong>Category: </strong> {service.categoryName}
              </Typography>{" "}
            </Col>{" "}
          </Row>{" "}
        </div>{" "}
      </Modal>{" "}
    </div>
  );
};

export default ServiceCard;

import React from "react";
import { Col, Card, Row, Button, Modal } from "antd"; // Assuming you're using Ant Design components
import {
  FaHeart,
  FaStar,
  FaThumbsUp,
  FaLocationDot,
  FaWhatsapp,
  FaTrash,
} from "react-icons/fa6";
import { CardMedia, Chip, CircularProgress, Grid } from "@mui/material";
import { TiInfoLargeOutline } from "react-icons/ti";

import ImageCarousel from "../PropertiesPage/ImageCarousel";
import { hostUri, endpoints } from "../../fetch";
import { useState } from "react";
import { useProducts } from "../../context/useProducts";
import { message } from "antd";
import Time from "../../components/TimeAgo";
import ReactImageGallery from "react-image-gallery";

export default function ProductCard({ data }) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { getProducts } = useProducts();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => setIsModalVisible(false);
  const {
    productName = "productName",
    productPrice = "NA",
    rating = "4",
    productDescription = "some description",
    nrat = 8,
    categoryName = "category",
    address = "adress",
    phoneNumber = "1231231231",
  } = data;

  const handleDeleteProduct = async (pid) => {
    try {
      console.log(pid);
      setDeleteLoading(true);
      const response = await fetch(hostUri + endpoints.deleteProduct, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pid }),
      });
      const data = await response.json();
      if (response.ok) {
        getProducts();
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
    <Grid item xs={12} md={6} data-aos="zoom-in" data-aos-delay="100">
      <Card>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={24} lg={8} style={{ height: "240px" }}>
            <CardMedia className="h-100">
              <ImageCarousel images={data.images} path={hostUri + "/"} />
            </CardMedia>
          </Col>
          <Col xs={24} sm={16} lg={16} className="ps-3">
            <div>
              {/* Row 1: Product Name and Actions */}
              <div className="d-flex justify-content-between align-items-center mb-2 flex-row flex-wrap">
                <div className="fs-3 fw-bold text-capitalize">
                  {productName}
                </div>
                <div className="d-flex gap-3 justify-content-end">
                  <FaWhatsapp size={20} color="green" />
                  <FaThumbsUp size={20} className="text-info" />
                  <FaHeart size={20} color="red" />
                </div>
              </div>

              {/* Row 2: Product Description */}
              <div className="fs-4 my-2 text-dark text-capitalize wrap-text w-100 ">
                {productDescription}
              </div>

              {/* Row 3: Product Rating */}
              <div className="align-items-center justify-content-center mb-2">
                <span className="bg-success text-black rounded-3 px-2 py-1 me-2">
                  {rating}
                </span>
                <span className="px-2 align-items-center">
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                  <FaStar className="text-warning" />
                </span>
                <span className="text-muted">({nrat} Ratings)</span>
              </div>

              {/* Row 4: Product Address */}
              <p className="overflow-hidden">
                <FaLocationDot color="red" size={17} className="me-2" />
                <span className="text-capitalize text-dark">{address}</span>
                <Chip
                  label={categoryName}
                  size="small"
                  className="mx-2 text-capitalize bg-success-subtle text-success"
                />
              </p>

              {/* Row 5: Product Actions */}
              <div className="w-100">
                <div className="row">
                  <div className="col-md-6 col-12 mb-2 mb-md-0">
                    <Button
                      variant="outlined"
                      onClick={() => handleDeleteProduct(data._id)}
                      disabled={deleteLoading}
                      className="px-2 py-1 w-100 btn btn-danger light border border-2 border-danger"
                    >
                      {deleteLoading && (
                        <CircularProgress
                          color="warning"
                          thickness={1.4}
                          size={20}
                          className=".MuiCircularProgress-indeterminate"
                        />
                      )}
                      <FaTrash size={15} className="me-2" /> Delete
                    </Button>
                  </div>
                  <div className="col-md-6 col-12">
                    <Button
                      variant="outlined"
                      onClick={() => setIsModalVisible(true)}
                      className="px-2 py-1 w-100 btn btn-primary light border border-2 border-primary"
                    >
                      <TiInfoLargeOutline size={15} />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <Modal
        title={<p className="text-capitalize">{data.productName}</p>}
        open={isModalVisible}
        onCancel={handleCancel}
        centered
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div
          style={{ maxHeight: "400px", overflowY: "auto", overflowX: "hidden" }}
        >
          <ReactImageGallery
            items={data.images.map((item) => ({
              original: hostUri + "/" + item,
              thumbnail: hostUri + "/" + item,
            }))}
          />
          <p>Price: {data.productPrice}</p>
          <p>Description: {data.productDescription}</p>
          <p>Category: {data.categoryName}</p>
          <p>
            Posted: <Time date={data.timestamp} />
          </p>
        </div>
      </Modal>
    </Grid>
  );
}

import { useState } from "react";
import {
  FaChartArea,
  FaBuilding,
  FaCalendar,
  FaCity,
  FaLandmarkDome,
  FaLocationPin,
} from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";
import { Chip, Grid, Button } from "@mui/material";
import { Card, Modal } from "antd";
import Time from "../../components/TimeAgo";
export default function PropertyCard({ data, buttons }) {
  const {
    description = "description",
    propertyType = "Rent",
    city = "City",
    availableFrom = "12-03-2024",
    expectedPrice = "12345",
    images = ["https://picsum.photos/seed/picsum/200/300"],
    pLength = 23,
    transactionTypes = ["nothing"],
    pWidth = 21,
    papproved,
    location,
    pfloorsAllowed = 14,
    landmark = "landmark",
  } = data;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <Grid item xs={12} sm={12} md={6}>
        <Card
          className="p-0 my-2 mx-1 outline-light shadow"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="row d-flex ">
            <div className="col-12 col-md-5 ">
              <ImageCarousel
                images={[
                  "https://picsum.photos/200/300?grayscale",
                  "https://picsum.photos/200/300?grayscale",
                  "https://picsum.photos/200/300?grayscale",
                ]}
              />
              <Chip
                size={"small"}
                className={papproved ? "bg-success-subtle" : "bg-danger-subtle"}
                label={papproved ? "Approved" : "Not Approved"}
              />
              <Chip
                size={"small"}
                className="bg-info-subtle"
                label={transactionTypes[0]}
              />
            </div>
            <div className="col-12 col-md-7 d-flex flex-column justify-content-between">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-capitalize">{landmark || description}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="text-muted">
                    <FaCity style={{ color: "#3f51b5" }} /> {city}
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted">
                    <FaLandmarkDome style={{ color: "#3f51b5" }} />{" "}
                    {propertyType}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="text-muted">
                    <FaChartArea style={{ color: "#3f51b5" }} /> {pWidth} x{" "}
                    {pLength}
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted">
                    <FaBuilding style={{ color: "#3f51b5" }} /> {pfloorsAllowed}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p className="text-muted">
                    <FaRupeeSign style={{ color: "#3f51b5" }} /> {expectedPrice}
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted">
                    <FaCalendar style={{ color: "#3f51b5" }} />{" "}
                    <Time date={availableFrom} />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p
                    className="text-muted"
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      right: "0",
                    }}
                  >
                    <FaLocationPin
                      style={{
                        color: "#3f51b5",
                      }}
                    />{" "}
                    {location}
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-muted">
                    <FaLandmarkDome style={{ color: "#3f51b5" }} />{" "}
                    {propertyType}
                  </p>
                </div>
              </div>
              <Grid classsName="row text-center" container spacing={1}>
                {buttons}
                <Grid classsName="row text-center" item xs={12}>
                  <Button
                    onClick={() => setIsModalVisible(true)}
                    fullWidth
                    variant="outlined"
                    color="primary"
                  >
                    View
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </Grid>
      <Modal
        title={data.description || data.landmark}
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
          {data.landmark || data.description}
        </div>
      </Modal>
    </>
  );
}

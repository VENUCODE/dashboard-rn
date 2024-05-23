import { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
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
import { Chip, Grid, Button, CardMedia } from "@mui/material";
import { Card, Modal } from "antd";
import Time from "../../components/TimeAgo";
import { hostUri } from "../../fetch";
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
              <CardMedia className="justify-content-center">
                <ImageCarousel images={images} path={hostUri + "/"} />
              </CardMedia>
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
              <Grid className="row text-center" container spacing={1}>
                {buttons}
                <Grid className="row text-center" item xs={12}>
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
        title={data.landmark || data.description}
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
          <div>
            <ImageGallery
              items={data.images.map((item) => ({
                original: hostUri + "/" + item,
                thumbnail: hostUri + "/" + item,
              }))}
            />
          </div>
          <p>
            <strong>Description:</strong> {data.description || data.landmark}
          </p>
          <p>
            <strong>Property Type:</strong> {data.propertyType}
          </p>
          <p>
            <strong>City:</strong> <FaCity /> {data.city}
          </p>
          <p>
            <strong>Available From:</strong> <FaCalendar />{" "}
            <Time date={data.availableFrom} />
          </p>
          <p>
            <strong>Expected Price:</strong> <FaMoneyBillWave />{" "}
            {data.expectedPrice}
          </p>

          <p>
            <strong>Property Length:</strong> <FaChartArea /> {data.pLength}
          </p>
          <p>
            <strong>Transaction Types:</strong>{" "}
            {data.transactionTypes.map((type, index) => (
              <span key={index}>
                <FaBuilding /> {type}{" "}
              </span>
            ))}
          </p>
          <p>
            <strong>Property Width:</strong> <FaChartArea /> {data.pWidth}
          </p>
          <p>
            <strong>Floors Allowed:</strong> <FaBuilding />{" "}
            {data.pfloorsAllowed}
          </p>
          <p>
            <strong>Location:</strong> <FaLocationPin /> {data.location}
          </p>
          <p>
            <strong>Landmark:</strong> <FaLandmarkDome /> {data.landmark}
          </p>
          {/* Render unknown properties */}
          {Object.entries(data).map(
            ([key, value]) =>
              ![
                "description",
                "propertyType",
                "city",
                "availableFrom",
                "expectedPrice",
                "images",
                "pLength",
                "transactionTypes",
                "pWidth",
                "pfloorsAllowed",
                "location",
                "landmark",
                "_id",
              ].includes(key) && (
                <p key={key}>
                  <span className="text-dark text-capitalize">{key}:</span>{" "}
                  <span className="text-capitalize">{value}</span>
                </p>
              )
          )}
        </div>
      </Modal>
    </>
  );
}

import { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
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
    timestamp,
    landmark = "landmark",
  } = data;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <Grid item xs={12} sm={12} md={6} className="p-1">
        <Card
          className="p-0 my-2 mx-1 outline-light shadow h-100"
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
                  <p className="text-dark">
                    <FaCalendar style={{ color: "#3f51b5" }} />
                    {new Date(availableFrom).toLocaleDateString()}
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
            <strong className="poppins-medium">Description:</strong>{" "}
            <span className="poppins-regular">
              {data.description || data.landmark}
            </span>
          </p>
          <p>
            <strong className="poppins-medium">Property Type:</strong>{" "}
            <span className="poppins-regular">{data.propertyType}</span>
          </p>
          <p>
            <strong className="poppins-medium">City:</strong>{" "}
            <span className="poppins-regular">
              <FaCity /> {data.city}
            </span>
          </p>

          <p>
            <strong className="poppins-medium">Property Length:</strong>{" "}
            <span className="poppins-regular">
              <FaChartArea /> {data.pLength}
            </span>
          </p>
          <p>
            <strong className="poppins-medium">Transaction Types:</strong>{" "}
            <span className="poppins-regular">
              {data.transactionTypes.map((type, index) => (
                <span key={index}>
                  <FaBuilding /> {type}{" "}
                </span>
              ))}
            </span>
          </p>
          <p>
            <strong className="poppins-medium">Floors Allowed:</strong>{" "}
            <span className="poppins-regular">
              <FaBuilding /> {data.pfloorsAllowed}
            </span>
          </p>
          <p>
            <strong className="poppins-medium">Location:</strong>{" "}
            <span className="poppins-regular">
              <FaLocationPin /> {data.location}
            </span>
          </p>
          <p>
            <strong className="poppins-medium">Landmark:</strong>{" "}
            <span className="poppins-regular">
              <FaLandmarkDome /> {data.landmark}
            </span>
          </p>
          {/* Render unknown properties */}
          {Object.entries(data).map(([key, value]) => {
            // Skip specific keys
            if (
              [
                "description",
                "propertyType",
                "city",
                "commercial_propertyType",
                "images",
                "transactionTypes",
                "pfloorsAllowed",
                "location",
                "landmark",
                "timestamp",
                "_id",
              ].includes(key)
            ) {
              return null;
            }

            // Function to render value based on its type
            const renderValue = (value) => {
              if (Array.isArray(value)) {
                return (
                  <ul>
                    {value.map((item, index) => (
                      <li key={index} className="poppins-regular">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              } else if (typeof value === "object" && value !== null) {
                return (
                  <ul>
                    {Object.entries(value).map(
                      ([subKey, subValue], subIndex) => (
                        <li key={subIndex}>
                          <span className="text-black text-capitalize poppins-medium">
                            {subKey}:
                          </span>{" "}
                          <span className="text-capitalize poppins-regular">
                            {subValue}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                );
              } else {
                return (
                  <span className="text-capitalize poppins-regular">
                    {value}
                  </span>
                );
              }
            };

            return (
              <p key={key}>
                <span className="text-black text-capitalize poppins-medium">
                  {key}:
                </span>{" "}
                {renderValue(value)}
              </p>
            );
          })}
        </div>
      </Modal>
    </>
  );
}

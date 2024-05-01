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
import { Chip, Grid } from "@mui/material";
import { Button, Card } from "antd";
import Time from "../../components/TimeAgo";
export default function PropertyCard({ data }) {
  const {
    description = "description",
    propertyType = "Rent",
    city = "City",
    availableFrom = "12-03-2024",
    expectedPrice = "12345",
    images = ["https=//placehold.co/400"],
    pLength = 23,
    transactionTypes = ["nothing"],
    pWidth = 21,
    papproved,
    location,
    pfloorsAllowed = 14,
  } = data;
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
              <ImageCarousel images={images} />
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
              <div>
                <div className="row">
                  <div className="col-12">
                    <h3 className="text-capitalize">{description}</h3>
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
                      <FaBuilding style={{ color: "#3f51b5" }} />{" "}
                      {pfloorsAllowed}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="text-muted">
                      <FaRupeeSign style={{ color: "#3f51b5" }} />{" "}
                      {expectedPrice}
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
                    <p className="text-muted">
                      <FaLocationPin
                        style={{
                          color: "#3f51b5",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
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
              </div>

              <div>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="error">
                      Delete
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" fullWidth color="success">
                      View More
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Card>
      </Grid>
    </>
  );
}

import {
  FaHeart,
  FaStar,
  FaThumbsUp,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { TiInfoLargeOutline } from "react-icons/ti";
import { Row, Col, Card } from "antd";
import { Button } from "@mui/material";
import ImageCarousel from "../PropertiesPage/ImageCarousel";
export default function ServiceCard({ data }) {
  const {
    title = "Mohit Plumbers",
    rating = 4.1,
    description = "some description",
    nrat = 8,
    address = "adress",
    phoneNumber = "1231231231",
  } = data;

  return (
    <>
      <Col xs={24} sm={12} lg={12}>
        <Card>
          <Row align="middle">
            <Col xs={8} sm={8} lg={8}>
              <ImageCarousel images={[1, 2, 3, 4]} />
            </Col>
            <Col xs={16} sm={16} lg={16} className="ps-3 ">
              <div className="">
                <div className="d-flex justify-content-between align-items-center mb-2 flex-row flex-wrap">
                  <div className="fs-3 fw-bold text-capitalize">{title}</div>

                  <div className=" d-flex gap-3 justify-content-end  ">
                    <FaWhatsapp size={20} color="green" />
                    <FaThumbsUp size={20} className="text-info" />
                    <FaHeart size={20} color="red" />
                  </div>
                </div>
                <div className="fs-4 my-2  text-dark text-capitalize">
                  {description}
                </div>

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
                  <span className="text-muted">({nrat} Ratings)</span>{" "}
                </div>
                <p className=" overflow-hidden">
                  <FaLocationDot color="red" size={17} className="me-2" />
                  <span className="text-capitalize text-dark">{address}</span>
                </p>

                <div className="w-100 ">
                  <div className="row">
                    <div className="col-md-6 col-12 mb-2 mb-md-0">
                      <Button
                        variant="contained"
                        color="success"
                        className="px-2 py-1 w-100"
                      >
                        <FaPhone size={10} className="te" /> {phoneNumber}
                      </Button>
                    </div>
                    <div className="col-md-6 col-12">
                      <Button
                        variant="container"
                        className="px-2 py-1 w-100 text-white bg-primary shadow"
                      >
                        <TiInfoLargeOutline size={15} />
                        Enquire
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
}

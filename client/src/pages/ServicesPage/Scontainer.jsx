import {
  FaBoltLightning,
  FaFilter,
  FaHouse,
  FaBuilding,
  FaStar,
} from "react-icons/fa6";
import "./serv.css";
import ServiceCard from "./SCard";
import { Row } from "antd";

export default function ServiceDummy() {
  const data = {
    location: "Mumbai",
  };

  return (
    <>
      <div className="container-fluid">
        <div className="ser-container">
          <Row gutter={[16, 16]}>
            <ServiceCard data={data} />
          </Row>
        </div>
      </div>
    </>
  );
}

import React from "react";
import TimelineChart from "./TimelineChart";
import { FaBuilding } from "react-icons/fa";

const TotalNewArrivals = ({ data }) => {
  return (
    <div className="col-xl-6 col-xxl-6">
      <div className="card">
        <div className="card-header border-0 pb-0">
          <h3 className="fs-18 text-black">Total Properties Arrival</h3>
        </div>
        <div className="card-body  pb-0">
          <div className="d-flex flex-wrap align-items-center">
            <span className="fs-28 text-black font-w600 me-3 justify-content-center">
              <FaBuilding className="me-2" color="#E35A60" />
              {data.reduce((acc, curr) => acc + curr, 0)}
            </span>
          </div>
          <div id="chartTimeline">
            <TimelineChart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalNewArrivals;

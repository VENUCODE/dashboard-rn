import React from "react";
import { GrShop } from "react-icons/gr";

const TotalPropertiesCount = ({
  percentage = "10",
  totalCount = "4603",
  title,
  subtitle,
  classes,
}) => {
  return (
    <div className="col-xl-12">
      <div className={`card ${classes} property-bx text-white`}>
        <div className="card-body">
          <div className="media d-sm-flex d-block align-items-center">
            <span className="me-4 d-block mb-sm-0 mb-3">
              <GrShop size={70} />
            </span>
            <div className="media-body mb-sm-0 mb-3 me-5">
              <h4 className="fs-22 text-white">{title}</h4>
              <div className="progress mt-3 mb-2" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-white progress-animated"
                  style={{ width: `${percentage}%`, height: "8px" }}
                  role="progressbar"
                >
                  <span className="sr-only">{percentage}% Complete</span>
                </div>
              </div>
              <span className="fs-14">{subtitle}</span>
            </div>
            <span className="fs-35 font-w500">{totalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPropertiesCount;

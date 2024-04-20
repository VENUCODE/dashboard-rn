import React from "react";
import { GrServices } from "react-icons/gr";

const TotalPropertiesCount = ({
  percentage = "10",
  totalCount = "4603",
  title,
  subtitle,
  classes,
}) => {
  return (
    <div class="col-xl-12">
      <div class={`card ${classes} property-bx text-white`}>
        <div class="card-body">
          <div class="media d-sm-flex d-block align-items-center">
            <span class="me-4 d-block mb-sm-0 mb-3">
              <GrServices size={70} />
            </span>
            <div class="media-body mb-sm-0 mb-3 me-5">
              <h4 class="fs-22 text-white">{title}</h4>
              <div class="progress mt-3 mb-2" style={{ height: "8px" }}>
                <div
                  class="progress-bar bg-white progress-animated"
                  style={{ width: `${percentage}%`, height: "8px" }}
                  role="progressbar"
                >
                  <span class="sr-only">{percentage}% Complete</span>
                </div>
              </div>
              <span class="fs-14">{subtitle}</span>
            </div>
            <span class="fs-35 font-w500">{totalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPropertiesCount;

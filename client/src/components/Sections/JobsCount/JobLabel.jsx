import React from "react";
import { FaRegUser, FaBuilding, FaSuitcase } from "react-icons/fa";
const JobLabel = () => {
  return (
    <>
      <div className="col-xl-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="media align-items-center">
              <div className="media-body">
                <h3>245</h3>
                <span className="fs-14 text-black">Total Job postings</span>
              </div>
              <span className="bg-success-subtle shadow rounded p-3">
                <FaRegUser color="green" size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3  col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="media align-items-center">
              <div className="media-body">
                <h3>562</h3>
                <span className="fs-14 text-black">Filled Job posts</span>
              </div>
              <span className="bg-primary-subtle shadow rounded p-3">
                <FaBuilding color="indigo" size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6 ">
        <div className="card house-bx">
          <div className="card-body d-flex">
            <div className="media align-items-center">
              <FaSuitcase color="white" size={50} />
            </div>
            <div className="media-body">
              <h4 className="fs-22 text-white">JOB-POSTING</h4>
              <p className="mb-0 text-light">
                Overall and occupied job posting have been represented in the
                statistical count manner
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobLabel;

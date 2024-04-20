import React from "react";
import { FaRegUser, FaBuilding, FaSuitcase } from "react-icons/fa";
const JobLabel = () => {
  return (
    <>
      <div class="col-xl-3 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center">
              <div class="media-body">
                <h3>245</h3>
                <span class="fs-14 text-black">Total Job postings</span>
              </div>
              <span class="bg-success-subtle shadow rounded p-3">
                <FaRegUser color="green" size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3  col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="media align-items-center">
              <div class="media-body">
                <h3>562</h3>
                <span class="fs-14 text-black">Filled Job posts</span>
              </div>
              <span class="bg-primary-subtle shadow rounded p-3">
                <FaBuilding color="indigo" size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 ">
        <div class="card house-bx">
          <div class="card-body d-flex">
            <div class="media align-items-center">
              <FaSuitcase color="white" size={50} />
            </div>
            <div class="media-body">
              <h4 class="fs-22 text-white">JOB-POSTING</h4>
              <p class="mb-0 text-light">
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

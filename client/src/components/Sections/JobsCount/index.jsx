import React from "react";
import JobLabel from "./JobLabel";

const JobsCount = () => {
  return (
    <>
      <div className="row form-head page-titles d-flex bg-black shadow  align-items-center">
        <div className="me-auto  d-lg-block d-block">
          <h4 className="mb-1 text-white">JOB POSTING OVERVIEW</h4>
        </div>
      </div>
      <div className="row">
        <JobLabel />
      </div>
    </>
  );
};

export default JobsCount;

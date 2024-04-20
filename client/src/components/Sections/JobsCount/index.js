import React from "react";
import JobLabel from "./JobLabel";

const JobsCount = () => {
  return (
    <>
      <div class="row form-head page-titles d-flex bg-black shadow  align-items-center">
        <div class="me-auto  d-lg-block d-block">
          <h4 class="mb-1 text-white">JOB POSTING OVERVIEW</h4>
        </div>
      </div>
      <div class="row">
        <JobLabel />
      </div>
    </>
  );
};

export default JobsCount;

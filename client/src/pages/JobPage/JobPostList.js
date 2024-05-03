import React, { useEffect, useState } from "react";
import { useJobs } from "../../context/useJobPosts";
import { Spin, message } from "antd";
import JobCard from "./Jobcard";
import JobFilter from "./JobFilter";
import { Grid, LinearProgress } from "@mui/material";
import { endpoints, hostUri } from "../../fetch";
const JobPostList = () => {
  const { jobs, closeJob, deleteJob, loading } = useJobs();
  const [jobPosts, setJobPosts] = useState([...jobs]);
  const [current, setCurrent] = useState(jobPosts);

  useEffect(() => {
    setJobPosts([...jobs]);
  }, [jobs]);

  const handleCloseJob = async (jobId, status, setCloseLoading) => {
    try {
      setCloseLoading(true);
      const response = await fetch(`${hostUri}${endpoints.updateJobStatus}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobId, status }),
      });

      if (response.ok) {
        console.log("Job closed successfully");
        message.success("Job closed successfully", 1);
        closeJob(jobId, status);
      } else {
        console.error("Failed to close job");
      }
    } catch (error) {
      console.error("Error closing job:", error);
    } finally {
      setCloseLoading(false);
    }
  };
  const handleDeleteJob = async (jobId, setDeleteLoading) => {
    try {
      setDeleteLoading(true);
      const response = await fetch(`${hostUri}${endpoints.deleteJobPost}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jobId }),
      });

      if (response.ok) {
        console.log("Job deleted successfully");
        message.success("Job deletd successfully", 1);
        deleteJob(jobId);
      } else {
        console.error("Failed to delete job");
      }
    } catch (error) {
      console.error("Error delete job:", error);
    } finally {
      setDeleteLoading(false);
    }
  };
  return (
    <div className="container-fluid">
      <JobFilter jobs={jobs} count={current.length} setCurrent={setCurrent} />
      {loading && <LinearProgress color="secondary" />}

      <Grid
        item
        xs={12}
        className="d-flex justify-content-end align-items-center pe-2 pt-2 pb-0 mb-0 "
      >
        {current.length > 0 && (
          <span>
            {current.length !== 0
              ? current.length +
                " job" +
                (current.length === 1 ? "" : "s") +
                " found"
              : "No jobs found"}
          </span>
        )}
        {current.length === 0 && !loading && "No jobs found"}
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          className="d-flex justify-content-center align-items-center my-2 "
        ></Grid>
        {current.map((post) => (
          <JobCard
            key={post._id}
            data={post}
            handleCloseJob={handleCloseJob}
            handleDeleteJob={handleDeleteJob}
          />
        ))}
      </Grid>
    </div>
  );
};

export default JobPostList;

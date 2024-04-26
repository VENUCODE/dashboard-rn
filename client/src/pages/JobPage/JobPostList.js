import React, { useEffect, useState } from "react";
import { useJobs } from "../../context/useJobPosts";
import { Spin, message } from "antd";
import JobCard from "./Jobcard";
import JobFilter from "./JobFilter";
import { Grid } from "@mui/material";

const JobPostList = () => {
  const { jobs, closeJob, deleteJob, loading } = useJobs();
  const [jobPosts, setJobPosts] = useState([...jobs]);
  const [current, setCurrent] = useState(jobPosts);
  useEffect(() => {
    setJobPosts([...jobs]);
  }, [jobs]);

  const handleCloseJob = async (jobId, status, setLoading) => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3300/api/jobs/update-status",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jobId, status }),
        }
      );

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
      setLoading(false);
    }
  };
  const handleDeleteJob = async (jobId, setLoading) => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3300/api/jobs/delete-job",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ jobId }),
        }
      );

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
      setLoading(false);
    }
  };
  return (
    <div className="container-fluid">
      <>
        <JobFilter jobs={jobs} count={current.length} setCurrent={setCurrent} />

        <Grid container>
          {current.map((post) => (
            <JobCard
              key={post._id}
              data={post}
              handleCloseJob={handleCloseJob}
              handleDeleteJob={handleDeleteJob}
            />
          ))}
        </Grid>
      </>
    </div>
  );
};

export default JobPostList;

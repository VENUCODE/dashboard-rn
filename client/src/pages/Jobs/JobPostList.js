import React, { useEffect, useState } from "react";
import Time from "../../components/TimeAgo";
import { useJobs } from "../../context/useJobPosts";
import { message } from "antd";

const JobPostList = () => {
  const { jobs, closeJob, deleteJob } = useJobs();
  const [jobPosts, setJobPosts] = useState([...jobs]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setJobPosts([...jobs]);
  }, [jobs]);

  const handleCloseJob = async (jobId, status) => {
    try {
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
    }
  };
  const handleDeleteJob = async (jobId) => {
    try {
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
    }
  };
  return (
    <div className="container-fluid">
      <h2>Job Post List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {jobPosts.map((post) => (
            <div
              key={post._id}
              className={`${
                post.status === "open" ? "bg-success-subtle" : "bg-gray-subtle"
              }`}
            >
              <h3>{post.jobTitle}</h3>
              <p>Category: {post.category}</p>
              <p>Location: {post.location}</p>
              <p>
                Posted <Time date={post.createdAt} />
              </p>
              <button
                onClick={() =>
                  handleCloseJob(
                    post._id,
                    post.status === "open" ? "closed" : "open"
                  )
                }
              >
                {post.status === "open" ? "Close" : "Open"}
              </button>
              <button onClick={() => handleDeleteJob(post._id)}>Delete</button>

              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobPostList;

// JobContext.js
import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import { hostUri, endpoints } from "../fetch";
const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  const getJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${hostUri}${endpoints.getAllJobs}`);
      const data = await response.json();
      if (response.ok) {
        const sortedJobPosts = data.data.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateA - dateB;
        });
        setJobs(sortedJobPosts);
      } else {
        console.error("Failed to fetch job posts:", data.message);
        message.error("Failed to fetch jobs", 2);
      }
    } catch (error) {
      console.error("Error fetching job posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const closeJob = (jobId, status) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === jobId ? { ...job, status: status } : job
      )
    );
  };
  const deleteJob = (jobId) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
  };
  useEffect(() => {
    getJobs();
    // return () => {};
  }, []);
  return (
    <JobContext.Provider
      value={{ jobs, addJob, closeJob, deleteJob, getJobs, loading }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);

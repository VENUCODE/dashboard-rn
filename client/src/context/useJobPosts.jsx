// JobContext.js
import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import { hostUri, endpoints } from "../fetch";
const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const addJob = () => {
    getJobs();
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
          return dateB - dateA;
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

  const closeJob = () => {
    getJobs();
  };
  const deleteJob = () => {
    getJobs();
  };
  useEffect(() => {
    getJobs();
    return () => {};
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

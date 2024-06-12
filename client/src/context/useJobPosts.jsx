// JobContext.js
import { message } from "antd";
import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { hostUri, endpoints } from "../fetch";

const JobContext = createContext();

const fetchJobs = async () => {
  const response = await fetch(hostUri + endpoints.getAllJobs);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  const sortedJobPosts = data.data.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
  return sortedJobPosts;
};

export const JobProvider = ({ children }) => {
  const {
    data: jobs = [],
    isLoading: loading,
    refetch: refetchJobs,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    onError: (error) => {
      console.error("Failed to fetch job posts:", error.message);
      message.error("Failed to fetch jobs", 2);
    },
  });

  const addJob = async () => {
    try {
      await refetchJobs();
    } catch (error) {
      console.error("Error adding job:", error.message);
      message.error("Failed to add job", 2);
    }
  };

  const closeJob = async () => {
    try {
      await refetchJobs();
    } catch (error) {
      console.error("Error closing job:", error.message);
      message.error("Failed to close job", 2);
    }
  };

  const deleteJob = async () => {
    try {
      await refetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error.message);
      message.error("Failed to delete job", 2);
    }
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, closeJob, deleteJob, loading }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => useContext(JobContext);

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { endpoints, hostUri } from "../fetch";

const ServicesContext = createContext();

const fetchServices = async () => {
  const response = await fetch(hostUri + endpoints.getAllServices, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch services");
  }
  return data;
};

const fetchServiceCategories = async () => {
  const response = await fetch(hostUri + endpoints.getServiceCategories);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch service categories");
  }
  return data;
};

export const ServiceProvider = ({ children }) => {
  const {
    data: services = [],
    isLoading: loadingServices,
    refetch: refetchServices,
  } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
    onError: (error) => {
      console.error("Error fetching services:", error.message);
      message.error(error.message, 2);
    },
  });

  const {
    data: serviceCategories = [],
    isLoading: loadingCategories,
    refetch: refetchCategories,
  } = useQuery({
    queryKey: ["serviceCategories"],
    queryFn: fetchServiceCategories,
    onError: (error) => {
      console.error("Error fetching service categories:", error.message);
      message.error(error.message, 2);
    },
  });

  return (
    <ServicesContext.Provider
      value={{
        services,
        loading: loadingServices || loadingCategories,
        getServices: refetchServices,
        serviceCategories,
        getServiceCategories: refetchCategories,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);

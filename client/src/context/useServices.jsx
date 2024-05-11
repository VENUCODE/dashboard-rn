// AgentContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { endpoints, hostUri } from "../fetch";

const ServicesContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [serviceCategories, setServiceCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const getServices = async () => {
    try {
      setLoading(true);
      const response = await fetch(hostUri + endpoints.getAllServices, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setServices(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching Services:", error);
    } finally {
      setLoading(false);
    }
  };
  const getServiceCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(hostUri + endpoints.getServiceCategories);
      const data = await response.json();
      if (response.ok) {
        setServiceCategories(data);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServices();
    getServiceCategories();
    return () => {};
  }, []);
  return (
    <ServicesContext.Provider
      value={{
        services,
        loading,
        getServices,
        serviceCategories,
        getServiceCategories,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);

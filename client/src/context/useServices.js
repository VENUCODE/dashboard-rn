// AgentContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { endpoints, hostUri } from "../fetch";

const ServicesContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
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
  useEffect(() => {
    getServices();
    return () => {};
  }, []);
  return (
    <ServicesContext.Provider value={{ services, loading }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);

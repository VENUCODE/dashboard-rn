// AgentContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const ServicesContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const getServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3300/api/services/all", {
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
  }, []);
  return (
    <ServicesContext.Provider value={{ services, loading }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);

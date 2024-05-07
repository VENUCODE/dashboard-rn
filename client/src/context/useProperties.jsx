// AgentContext.
import React, { createContext, useContext, useEffect, useState } from "react";
import { endpoints } from "../fetch";

const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch(endpoints.getAllProperties, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProperties();
    return () => {};
  }, []);
  return (
    <PropertiesContext.Provider value={{ properties, loading }}>
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => useContext(PropertiesContext);

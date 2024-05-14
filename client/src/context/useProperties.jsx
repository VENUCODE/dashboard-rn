// AgentContext.
import React, { createContext, useContext, useEffect, useState } from "react";
import { hostUri, endpoints } from "../fetch";
import { message } from "antd";

const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [unverified, setUnverified] = useState([]);
  const [rejected, setRejected] = useState([]);

  const [loading, setLoading] = useState(false);

  const getProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch(hostUri + endpoints.getAllProperties, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      } else {
        message.error("failed to fetch Properties", 2);
      }
    } catch (error) {
      console.log("Error fetching properties:", error.message);
    } finally {
      setLoading(false);
    }
  };
  const getUnverifiedProperties = async () => {
    try {
      const response = await fetch(hostUri + endpoints.getUnverifiedProperties);
      const data = await response.json();
      if (response.ok) {
        setUnverified(data);
      } else {
        message.error(data.message);
      }
    } catch (error) {}
  };
  const getRejected = async () => {
    try {
      const response = await fetch(hostUri + endpoints.getRejectedProperties);
      const data = await response.json();
      if (response.ok) {
        setRejected(data);
      } else {
        message.error(data.message);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getProperties();
    getUnverifiedProperties();
    getRejected();
    return () => {};
  }, []);
  return (
    <PropertiesContext.Provider
      value={{
        properties,
        loading,
        unverified,
        rejected,
        getProperties,
        getRejected,
        getUnverifiedProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => useContext(PropertiesContext);

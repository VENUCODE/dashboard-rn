// AgentContext.js
import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import { hostUri, endpoints } from "../fetch";
const ManagerContext = createContext();

export const ManagersProvider = ({ children }) => {
  const [managers, setManagers] = useState([]);

  const [loading, setLoading] = useState(false);

  const getManagers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${hostUri}${endpoints.getAllManagers}`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        setManagers(data);
      } else {
        console.error("Failed to fetch Managers:", data.message);
        message.error("Failed to fetch Managers", 2);
      }
    } catch (error) {
      console.error("Error fetching agents:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getManagers();
  }, []);

  return (
    <ManagerContext.Provider value={{ managers, loading, getManagers }}>
      {children}
    </ManagerContext.Provider>
  );
};

export const useManager = () => useContext(ManagerContext);

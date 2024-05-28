// AgentContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { endpoints, hostUri } from "../fetch";
import { message } from "antd";

const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSuppliers = async () => {
    try {
      setLoading(false);
      const response = await fetch(hostUri + endpoints.getAllSuppliers);

      const data = await response.json();
      if (response.ok) {
        setSuppliers(data.data);
      } else {
        message.error(data.message, 1);
      }
    } catch (error) {
      console.log(error.message);
      message.error("Failed to fetch Suppliers", 1);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSuppliers();
    return () => {};
  }, []);
  return (
    <SupplierContext.Provider value={{ suppliers, loading, getSuppliers }}>
      {children}
    </SupplierContext.Provider>
  );
};

export const useSuppliers = () => useContext(SupplierContext);

import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { endpoints, hostUri } from "../fetch";
import { message } from "antd";

const SupplierContext = createContext();

const fetchSuppliers = async () => {
  const response = await fetch(hostUri + endpoints.getAllSuppliers);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch suppliers");
  }
  return data.data;
};

export const SupplierProvider = ({ children }) => {
  const {
    data: suppliers = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["suppliers"],
    queryFn: fetchSuppliers,
    onError: (error) => {
      message.error(error.message, 1);
    },
  });

  return (
    <SupplierContext.Provider
      value={{ suppliers, loading: isLoading, getSuppliers: refetch }}
    >
      {children}
    </SupplierContext.Provider>
  );
};

export const useSuppliers = () => useContext(SupplierContext);

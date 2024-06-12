import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { message } from "antd";
import { hostUri, endpoints } from "../fetch";

const ManagerContext = createContext();

export const useManager = () => useContext(ManagerContext);

const fetchManagers = async () => {
  const response = await fetch(`${hostUri}${endpoints.getAllManagers}`, {
    method: "GET",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch managers");
  }
  return data;
};

export const ManagersProvider = ({ children }) => {
  const {
    data: managers = [],
    isLoading: loading,
    refetch: getManagers,
  } = useQuery({
    queryKey: ["managers"],
    queryFn: fetchManagers,
    onError: (error) => {
      console.error("Error fetching managers:", error);
      message.error(error.message || "Failed to fetch managers", 2);
    },
  });

  return (
    <ManagerContext.Provider value={{ managers, loading, getManagers }}>
      {children}
    </ManagerContext.Provider>
  );
};

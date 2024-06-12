// AgentContext.js
import React, { createContext, useContext } from "react";
import {
  useQuery,
  useQueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { hostUri, endpoints } from "../fetch";
import { message } from "antd";
import queryClient from "./queryClient";

const PropertiesContext = createContext();

const fetchProperties = async () => {
  const response = await fetch(hostUri + endpoints.getAllProperties, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Properties");
  }
  return response.json();
};

const fetchUnverifiedProperties = async () => {
  const response = await fetch(hostUri + endpoints.getUnverifiedProperties);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return response.json();
};

const fetchRejectedProperties = async () => {
  const response = await fetch(hostUri + endpoints.getRejectedProperties);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return response.json();
};

export const PropertiesProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const {
    data: properties = [],
    isLoading: loadingProperties,
    refetch: refetchProperties,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
    onError: (error) => message.error(error.message, 2),
  });

  const {
    data: unverified = [],
    isLoading: loadingUnverified,
    refetch: refetchUnverified,
  } = useQuery({
    queryKey: ["unverified"],
    queryFn: fetchUnverifiedProperties,
    onError: (error) => message.error(error.message, 2),
  });

  const {
    data: rejected = [],
    isLoading: loadingRejected,
    refetch: refetchRejected,
  } = useQuery({
    queryKey: ["rejected"],
    queryFn: fetchRejectedProperties,
    onError: (error) => message.error(error.message, 2),
  });

  const getProperties = async () => {
    try {
      await refetchProperties();
    } catch (error) {
      console.error("Error refetching properties:", error);
    }
  };

  const getUnverifiedProperties = async () => {
    try {
      await refetchUnverified();
    } catch (error) {
      console.error("Error refetching unverified properties:", error);
    }
  };

  const getRejected = async () => {
    try {
      await refetchRejected();
    } catch (error) {
      console.error("Error refetching rejected properties:", error);
    }
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        loading: loadingProperties || loadingUnverified || loadingRejected,
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

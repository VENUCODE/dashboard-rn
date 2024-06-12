import React, { createContext, useContext } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { endpoints, hostUri } from "../fetch";
import { message } from "antd";

// Create the AdContext
const AdContext = createContext();

export const useAd = () => {
  return useContext(AdContext);
};

// Function to fetch ads
const fetchallAds = async () => {
  const response = await fetch(hostUri + endpoints.getAllAds);
  if (!response.ok) {
    throw new Error("Failed to fetch ads");
  }
  const result = await response.json();
  return result.data; // Assuming result has a data property containing ads
};

export const AdProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const {
    data: ads = [],
    isLoading: loading,
    refetch: fetchAds,
  } = useQuery({
    queryKey: ["ads"],
    queryFn: fetchallAds,
    onError: (error) => {
      console.error("Error fetching ads:", error);
      message.error("Failed to fetch ads", 2);
    },
  });

  const value = {
    ads,
    loading,
    fetchAds,
  };

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>;
};

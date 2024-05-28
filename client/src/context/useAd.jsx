import React, { createContext, useContext, useState, useEffect } from "react";
import { endpoints, hostUri } from "../fetch";

// Create the AdContext
const AdContext = createContext();

export const useAd = () => {
  return useContext(AdContext);
};

export const AdProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchAds = async () => {
    try {
      setLoading(true);
      const response = await fetch(hostUri + endpoints.getAllAds);
      if (!response.ok) {
        throw new Error("Failed to fetch ads");
      }
      const result = await response.json();
      setAds(result.data); // Assuming result has a data property containing ads
    } catch (error) {
      console.error("Error fetching ads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const value = {
    ads,
    loading,
    fetchAds,
  };

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>;
};

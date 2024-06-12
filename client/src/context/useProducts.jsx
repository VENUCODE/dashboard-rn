// ProductContext.js
import { message } from "antd";
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { endpoints, hostUri } from "../fetch";

const ProductContext = createContext();

const fetchProducts = async () => {
  const response = await fetch(hostUri + endpoints.getAllProducts);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data.data.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
};

const fetchProductCategories = async () => {
  const response = await fetch(hostUri + endpoints.getProductCategories);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data.data;
};

export const ProductProvider = ({ children }) => {
  const {
    data: products = [],
    isLoading: loadingProducts,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    onError: (error) => message.error(error.message),
  });

  const {
    data: categories = [],
    isLoading: loadingCategories,
    refetch: refetchCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchProductCategories,
    onError: (error) => message.error(error.message),
  });

  const getProducts = async () => {
    try {
      await refetchProducts();
    } catch (error) {
      message.error(error.message);
    }
  };

  const getProductCategories = async () => {
    try {
      await refetchCategories();
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        loading: loadingProducts || loadingCategories,
        categories,
        getProductCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

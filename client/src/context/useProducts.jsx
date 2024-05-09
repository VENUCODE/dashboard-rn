import { message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { endpoints, hostUri } from "../fetch";

const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(hostUri + endpoints.getAllProducts);
      const data = await response.json();
      if (response.ok) {
        setProducts(
          data.data.sort(
            (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
          )
        );
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getProductCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(hostUri + endpoints.getProductCategories);
      const data = await response.json();
      if (response.ok) {
        setCategories(data.data);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
    getProductCategories();
    return () => {};
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        loading,
        categories,
        getProductCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => useContext(ProductContext);

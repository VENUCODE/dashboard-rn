import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useProducts } from "../../context/useProducts";

const ProductPage = () => {
  const { loading } = useProducts();
  const [category, setCategory] = useState("all");
  return (
    <div className="content-body">
      <div className="container-fluid">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPage;

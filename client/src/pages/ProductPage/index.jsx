import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Button } from "@mui/material";
import AddProduct from "./addProduct";
import AddProductCategory from "./addProductCategory";
import { Card } from "antd";
import { useProducts } from "../../context/useProducts";
import ProductFilter from "./ProductFilter";

const ProductPage = () => {
  const [show, toggleShow] = useState(false);
  const { products } = useProducts();
  const [current, setCurrent] = useState(products);
  useEffect(() => {
    setCurrent(products);
  }, [products]);
  return (
    <div className="content-body">
      <div className="container-fluid ">
        <div className=" bg-white  shadow-sm d-flex justify-content-between p-2 align-items-center">
          <div>
            <h2 className="text-black font-w600">Products Page</h2>
          </div>
          <div>
            <Button
              variant="outlined"
              color={!show ? "success" : "error"}
              className="shadow w-100"
              onClick={() => toggleShow((prevShow) => !prevShow)}
            >
              {!show ? "Add Product" : "Hide Form"}
            </Button>
          </div>
        </div>
        {show && (
          <>
            <div className="container-fluid">
              <Card>
                <AddProduct />
              </Card>
            </div>
            <div className="container-fluid">
              <Card>
                <AddProductCategory />
              </Card>
            </div>
          </>
        )}
        <div className="container-fluid px-0 ">
          <ProductFilter setCurrent={setCurrent} />
        </div>
        <div className="container-fluid">
          <ProductList current={current} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

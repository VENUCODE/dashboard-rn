import React, { useState } from "react";
import ProductList from "./ProductList";
import { Button } from "@mui/material";
import AddProduct from "./addProduct";

const ProductPage = () => {
  const [show, toggleShow] = useState(false);
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
              color={!show ? "success" : "error"} // Assuming "error" is used for danger
              className="shadow w-100"
              onClick={() => toggleShow((prevShow) => !prevShow)}
            >
              {!show ? "Add Product" : "Hide Form"}
            </Button>
          </div>
        </div>
        <div className="container-fluid">
          <AddProduct />
        </div>
        <div className="container-fluid">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

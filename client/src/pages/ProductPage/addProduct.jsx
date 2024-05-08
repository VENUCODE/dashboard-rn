import React, { useState } from "react";
import ImageUpload from "../../components/ImageUpload";
import { endpoints, hostUri } from "../../fetch";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
const initialFormData = {
  productName: "",
  productPrice: "",
  productDescription: "",
  categoryName: "",
};
import { message } from "antd";
export const AddProduct = () => {
  const [fileList, setFileList] = useState([]);

  const [product, setProduct] = useState(initialFormData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProduct((prevProduct) => ({
      ...prevProduct,
    }));
    try {
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("productPrice", product.productPrice);
      formData.append("productDescription", product.productDescription);
      formData.append("categoryName", product.categoryName);
      fileList.forEach((file) => {
        formData.append("images", file.originFileObj);
      });
      const response = await fetch(hostUri + endpoints.addProduct, {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      if (response.ok) {
        message.success(responseData.message, 1);
        setProduct(initialFormData);
        setFileList([]);
      } else {
        console.error("Error adding product:", responseData.message);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <>
      <Container component="main">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="productName"
                label="product name"
                name="productName"
                value={product.productName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="productPrice"
                label="product price"
                name="productPrice"
                value={product.productPrice}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="productDescription"
                label="product description"
                name="productDescription"
                value={product.productDescription}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="categoryName"
                label="product Category"
                name="categoryName"
                value={product.categoryName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="text-muted ms-3">Product Images</div>
              <ImageUpload fileList={fileList} setFileList={setFileList} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className="d-flex flex-row align-items-center"
            >
              <Button
                type="submit"
                className="py-3 btn light btn-danger btn-outline-danger"
                fullWidth
                color="error"
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};
export default AddProduct;

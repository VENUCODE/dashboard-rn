import React, { useEffect, useState } from "react";
import ImageUpload from "../../components/ImageUpload";
import { endpoints, hostUri } from "../../fetch";
import {
  TextField,
  Button,
  Grid,
  Container,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
const initialFormData = {
  productName: "",
  productPrice: "",
  productDescription: "",
  categoryName: "",
};
import { message } from "antd";
import { useProducts } from "../../context/useProducts";
export const AddProduct = () => {
  const { getProducts, categories } = useProducts();
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
        getProducts();
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
              <FormControl fullWidth size="small" className="h-100">
                <InputLabel className="bg-white">Product Category</InputLabel>
                <Select
                  name="categoryName"
                  size="small"
                  className="h-100"
                  value={product.categoryName}
                  onChange={handleChange}
                  required
                >
                  {categories.map((item, index) => (
                    <MenuItem key={index} value={item.categoryName}>
                      {item.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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

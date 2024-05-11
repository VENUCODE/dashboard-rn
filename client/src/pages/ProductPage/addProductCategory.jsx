import { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  CircularProgress,
} from "@mui/material";
import { useAuth } from "../../context/useAuth";
import { endpoints, hostUri } from "../../fetch";
import { message } from "antd";
import { useProducts } from "../../context/useProducts";
const AddProductCategory = () => {
  const { userData } = useAuth();
  const { getProductCategories } = useProducts();
  const [loading, setLoading] = useState(false);
  const [productCategory, setProductCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productCategory.trim()) {
      message.info("Category can't be empty");
      setProductCategory("");
      return;
    }
    try {
      const data = {
        categoryName: productCategory,
        agentId: userData.id,
      };
      setLoading(true);
      const response = await fetch(hostUri + endpoints.addProductCategory, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        message.success(result.message, 1);
        getProductCategories();
      } else {
        message.error(result.message, 1);
      }
    } catch (error) {
      console.error(error);
      message.error(error.message, 1);
    } finally {
      setProductCategory("");
      setLoading(false);
    }
  };

  return (
    <Container component="main">
      <h2>Add Product Category</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="productCategory"
              label="product category"
              name="productCategory"
              value={productCategory}
              onChange={(e) => {
                setProductCategory(e.target.value);
              }}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className="d-flex flex-row align-items-center"
          >
            <Button
              type="submit"
              disabled={loading}
              className="py-3 btn light btn-primary btn-outline-primary"
              fullWidth
            >
              {loading && <CircularProgress size={25} />}Add Category
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddProductCategory;

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
import { Card, message } from "antd";
import { useServices } from "../../context/useServices";
const AddServiceCategory = () => {
  const { userData } = useAuth();
  const { getServiceCategories } = useServices();
  const [serviceCategory, setServiceCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (!serviceCategory.trim()) {
      message.info("Category can't be empty");
      setServiceCategory("");
      return;
    }

    try {
      const data = {
        categoryName: serviceCategory.trim(),
        agentId: userData.id,
      };
      setLoading(true);
      const response = await fetch(hostUri + endpoints.addServiceCategory, {
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
        getServiceCategories();
      } else {
        message.error(result.message, 1);
      }
    } catch (error) {
      console.error(error);
      message.error(error.message, 1);
    } finally {
      setLoading(false);
      setServiceCategory("");
    }
  };

  return (
    <Card>
      <Container component="main">
        <h2>Add Service Category</h2>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="serviceCategory"
                label="service category"
                name="serviceCategory"
                value={serviceCategory}
                onChange={(e) => {
                  setServiceCategory(e.target.value);
                }}
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
                variant="contained"
                disabled={loading}
                className="py-3 btn light btn-primary "
                fullWidth
              >
                {loading && <CircularProgress size={25} />}Add Category
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Card>
  );
};

export default AddServiceCategory;

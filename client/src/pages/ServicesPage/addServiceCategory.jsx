import { useState } from "react";
import { TextField, Button, Grid, Container } from "@mui/material";
import { useAuth } from "../../context/useAuth";
import { endpoints, hostUri } from "../../fetch";
import { Card, message } from "antd";
const AddServiceCategory = () => {
  const { userData } = useAuth();
  const [serviceCategory, setServiceCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    P;
    try {
      const data = {
        categoryName: serviceCategory,
        agentId: userData.id,
      };
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
        getProductCategories();
      } else {
        message.error(result.message, 1);
      }
    } catch (error) {
      console.error(error);
      message.error(error.message, 1); // Assuming message is an antd notification, you may need to handle it differently
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
                className="py-3 btn light btn-primary btn-outline-primary"
                fullWidth
              >
                Add Category
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Card>
  );
};

export default AddServiceCategory;

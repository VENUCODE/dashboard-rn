import React, { useState } from "react";
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
import { Card, message } from "antd";
import { useServices } from "../../context/useServices";
import LocationInput from "../JobPage/LocationInput";
import { useAuth } from "../../context/useAuth";
const AddService = () => {
  const { userData } = useAuth();
  const initialFormData = {
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    serviceName: "",
    servicePrice: "",
    serviceDescription: "",
    location: "",
    images: [],
    categoryName: "",
    agentId: userData.id,
  };
  const [fileList, setFileList] = useState([]);
  const { getServices } = useServices();
  const [service, setServices] = useState(initialFormData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setServices((prevProduct) => ({
      ...prevProduct,
    }));
    try {
      const formData = new FormData();
      formData.append("serviceName", service.serviceName);
      formData.append("servicePrice", service.servicePrice);
      formData.append("serviceDescription", service.serviceDescription);
      formData.append("categoryName", service.categoryName);
      fileList.forEach((file) => {
        formData.append("images", file.originFileObj);
      });
      const response = await fetch(hostUri + endpoints.addService, {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      if (response.ok) {
        message.success(responseData.message, 1);
        setServices(initialFormData);
        setFileList([]);
      } else {
        console.error("Error adding service:", responseData.message);
      }
    } catch (error) {
      console.error("Error adding service:", error);
    }
  };
  const handlePlaceSelected = (place) => {
    setFormData({
      ...formData,
      location: place.name,
      coordinates: {
        latitude: place.lat,
        longitude: place.lng,
      },
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <Card>
      <Container component="main">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="serviceName"
                label="service name"
                name="serviceName"
                value={service.serviceName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="servicePrice"
                label="service price"
                name="servicePrice"
                value={service.servicePrice}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="serviceDescription"
                label="service description"
                name="serviceDescription"
                value={service.serviceDescription}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <LocationInput onPlaceSelected={handlePlaceSelected} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className="d-flex align-items-center gap-2"
            >
              <InputLabel className="bg-white">Images</InputLabel>

              <ImageUpload fileList={fileList} setFileList={setFileList} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small" className="h-100">
                <InputLabel className="bg-white">service Category</InputLabel>
                <Select
                  name="categoryName"
                  size="small"
                  className="h-100"
                  value={service.categoryName}
                  onChange={handleChange}
                  required
                >
                  {/* {categories.map((item, index) => (
                    <MenuItem key={index} value={item.categoryName}>
                      {item.categoryName}
                    </MenuItem>
                  ))} */}
                </Select>
              </FormControl>
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
    </Card>
  );
};
export default AddService;

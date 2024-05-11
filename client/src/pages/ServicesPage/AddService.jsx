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
  CircularProgress,
} from "@mui/material";
import { Card, message } from "antd";
import { useServices } from "../../context/useServices";
import LocationInput from "../JobPage/LocationInput";
import { useAuth } from "../../context/useAuth";

const AddService = () => {
  const { userData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
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
  };

  const [fileList, setFileList] = useState([]);
  const { getServices, serviceCategories } = useServices();
  const [service, setService] = useState(initialFormData);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("serviceName", service.serviceName);
      formData.append("servicePrice", service.servicePrice);
      formData.append("serviceDescription", service.serviceDescription);
      formData.append("categoryName", service.categoryName);
      formData.append("coordinates[latitude]", service.coordinates.latitude);
      formData.append("coordinates[longitude]", service.coordinates.longitude);
      formData.append("agentId", userData.id);
      formData.append("location", service.location);

      fileList.forEach((file) => {
        formData.append("images", file.originFileObj);
      });

      setLoading(true);
      const response = await fetch(hostUri + endpoints.addService, {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      if (response.ok) {
        message.success(responseData.message, 1);
        getServices();
        setService(initialFormData);
        setFileList([]);
      } else {
        message.error(responseData.message, 1);
        console.error("Error adding service:", responseData.message);
      }
    } catch (error) {
      console.error("Error adding service:", error);
    } finally {
      setReset((p) => !p);
      setService(initialFormData);
      setLoading(false);
      setFileList([]);
    }
  };

  const handlePlaceSelected = (place) => {
    setService({
      ...service,
      location: place.name,
      coordinates: {
        latitude: place.lat,
        longitude: place.lng,
      },
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setService((prevService) => ({
      ...prevService,
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
                label="Service name"
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
                label="Service price"
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
                label="Service description"
                name="serviceDescription"
                value={service.serviceDescription}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocationInput
                onPlaceSelected={handlePlaceSelected}
                reset={reset}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="d-flex my-2">
              <div className="text-muted ms-3 justify-content-center align-items-center d-flex me-2">
                Images
              </div>
              <ImageUpload fileList={fileList} setFileList={setFileList} />
            </Grid>
            <Grid item xs={12} sm={6} className=" py-0 my-1 ">
              <FormControl fullWidth required className="h-100">
                <InputLabel className="bg-white">Service category</InputLabel>
                <Select
                  name="categoryName"
                  size="small"
                  className="h-100 py-2 "
                  label="Service category"
                  value={service.categoryName}
                  onChange={handleChange}
                  required
                >
                  {serviceCategories?.map((cat, index) => (
                    <MenuItem value={cat} key={index}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              className="d-flex flex-row align-items-center  py-0 my-1"
            >
              <Button
                type="submit"
                disabled={loading}
                fullWidth
                variant="contained"
                className="btn btn-danger light h-100 "
                color="primary"
              >
                {loading && <CircularProgress size={25} />} Add Service
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Card>
  );
};

export default AddService;

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
  Card,
  CardHeader,
  CircularProgress,
} from "@mui/material";
import { Spin, message } from "antd";
import { useAuth } from "../../context/useAuth";
import { useAd } from "../../context/useAd";
const initialFormData = {
  adTitle: "",
  adCategory: "",
  adRedirectLink: "",
  timestamps: "",
  adStatus: "",
  adOrigins: "",
  adLocation: "",
};

const AddAdvert = () => {
  const [fileList, setFileList] = useState([]);
  const [advert, setAdvert] = useState(initialFormData);
  const { userData } = useAuth();
  const [loading, setLoading] = useState(false);
  const { fetchAds } = useAd();
  const handleSubmit = async (event) => {
    event.preventDefault();

    setAdvert((prevAdvert) => ({
      ...prevAdvert,
    }));
    try {
      if (!userData) {
        message.error("userData not found");
        return;
      }
      const formData = new FormData();
      formData.append("adTitle", advert.adTitle);
      formData.append("adCategory", advert.adCategory);
      formData.append("adRedirectLink", advert.adRedirectLink);
      formData.append("adStatus", advert.adStatus);
      formData.append("adOrigins", advert.adOrigins);
      formData.append("adLocation", advert.adLocation);
      formData.append("agentId", userData?.id);
      fileList.forEach((file) => {
        formData.append("images", file.originFileObj);
      });
      setLoading(true);
      const response = await fetch(hostUri + endpoints.addAdvertisement, {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      if (response.ok) {
        message.success(responseData.message, 1);
        console.log(responseData.data);
        setAdvert(initialFormData);
        setFileList([]);
        fetchAds();
      } else {
        console.error("Error adding advert:", responseData.message);
      }
    } catch (error) {
      console.error("Error adding advert:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdvert((prevAdvert) => ({
      ...prevAdvert,
      [name]: value,
    }));
  };

  return (
    <>
      <Container component="main">
        <Card className="p-2">
          <CardHeader title="Add an Advertisement" />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="adTitle"
                  label="Ad Title"
                  name="adTitle"
                  value={advert.adTitle}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth className=" h-100" size="small">
                  <InputLabel className="bg-white">Ad Category</InputLabel>
                  <Select
                    className="h-100"
                    name="adCategory"
                    value={advert.adCategory}
                    onChange={handleChange}
                    required
                  >
                    {[
                      "services",
                      "products",
                      "properties",
                      "jobs",
                      "antiques",
                    ].map((item, index) => (
                      <MenuItem
                        className="text-capitalize"
                        key={index}
                        value={item}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="adRedirectLink"
                  label="Ad Redirect Link"
                  placeholder="https://........."
                  name="adRedirectLink"
                  value={advert.adRedirectLink}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl className="h-100" fullWidth size="small">
                  <InputLabel className="bg-white">Ad Status</InputLabel>
                  <Select
                    name="adStatus"
                    className="h-100"
                    value={advert.adStatus}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="running">Running</MenuItem>
                    <MenuItem value="stopped">Stopped</MenuItem>
                    <MenuItem value="hold">Hold</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className="h-100" fullWidth size="small">
                  <InputLabel className="bg-white">Ad Origins</InputLabel>
                  <Select
                    className="h-100"
                    name="adOrigins"
                    value={advert.adOrigins}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="web">Web</MenuItem>
                    <MenuItem value="app">App</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl className="h-100" fullWidth size="small">
                  <InputLabel className="bg-white">Ad Location</InputLabel>
                  <Select
                    className="h-100"
                    name="adLocation"
                    value={advert.adLocation}
                    onChange={handleChange}
                    required
                  >
                    {["home", "services", "products", "properties", "jobs"].map(
                      (loc) => (
                        <MenuItem
                          key={loc}
                          value={loc}
                          className="text-capitalize"
                        >
                          {loc}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="text-muted ms-3">Ad Images</div>
                <div className="p-2">
                  <ImageUpload
                    fileList={fileList}
                    aspect={9 / 6}
                    cropShape="rect"
                    setFileList={setFileList}
                  />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className="d-flex flex-row align-items-center"
              >
                <Button
                  disabled={fileList.length === 0}
                  type="submit"
                  className="py-3 btn light btn-danger border border-2 border-danger"
                  fullWidth
                  color="error"
                >
                  {loading && (
                    <CircularProgress
                      size={20}
                      className="me-4"
                      color="error"
                    />
                  )}
                  Add Ad
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Container>
    </>
  );
};

export default AddAdvert;

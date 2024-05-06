import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Alert,
} from "@mui/material";
import { Image, Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import { hostUri } from "../fetch";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const PropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyType: "",
    transactionTypes: [],
    name: "",
    category: "",
    phoneNumber: "",
  });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTransactionTypeChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, transactionTypes: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { propertyType, transactionTypes, name, category, phoneNumber } =
      formData;
    if (
      !propertyType ||
      transactionTypes.length === 0 ||
      !name ||
      !category ||
      !phoneNumber
    ) {
      Alert.alert(
        "Missing Fields",
        "Please fill in all required fields.",
        [
          {
            text: "OK",
          },
        ],
        { cancelable: false }
      );
      return; // Exit the function
    }

    // Construct form data to be sent to the backend
    const formDataToUpload = new FormData();
    formDataToUpload.append("propertyType", propertyType);
    formDataToUpload.append(
      "transactionTypes",
      JSON.stringify(transactionTypes)
    );
    formDataToUpload.append("name", name);
    formDataToUpload.append("category", category);
    formDataToUpload.append("phoneNumber", phoneNumber);
    // Append other form fields as needed

    // Append uploaded images to the form data
    fileList.forEach((file) => {
      formDataToUpload.append("images", file.originFileObj);
    });

    // Send form data to the backend
    try {
      console.log(formDataToUpload.values().forEach((i) => console.log(i)));
      const response = await fetch(hostUri + "/upload/img", {
        method: "POST",
        body: formDataToUpload,
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({
          propertyType: "",
          transactionTypes: [],
          name: "",
          category: "",
          phoneNumber: "",
        });
        setFileList([]);
        console.log(data);
        console.log("Form data uploaded successfully!");
      } else {
        console.log("Error:" + data.message);
      }
    } catch (error) {
      console.error("Error uploading form data:", error);
    }
  };

  return (
    <div className="content-body">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel id="property-type-label">Property Type</InputLabel>
            <Select
              labelId="property-type-label"
              id="property-type"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <MenuItem value="residential">Residential</MenuItem>
              <MenuItem value="commercial">Commercial</MenuItem>
              <MenuItem value="land_plot">Land/Plot</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="transaction-types-label">
              Transaction Types
            </InputLabel>
            <Select
              labelId="transaction-types-label"
              id="transaction-types"
              name="transactionTypes"
              multiple
              value={formData.transactionTypes}
              onChange={handleTransactionTypeChange}
              required
            >
              <MenuItem value="FullHouse">Full House</MenuItem>
              <MenuItem value="Rent">Rent</MenuItem>
              <MenuItem value="Sale">Sale</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <ImgCrop rotationSlider>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={onChange}
              showUploadList
            >
              {fileList.length < 5 && "+ Upload"}
            </Upload>
          </ImgCrop>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;

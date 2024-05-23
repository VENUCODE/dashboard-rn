import React, { useState } from "react";
import ImageUpload from "../../../components/ImageUpload";
import { Typography } from "@mui/material";

const PropertyPictures = () => {
  const [fileList, setFileList] = useState([]);
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Property Images
      </Typography>
      <ImageUpload fileList={fileList} setFileList={setFileList} />
    </div>
  );
};

export default PropertyPictures;

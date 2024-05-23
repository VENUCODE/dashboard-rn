import React, { useEffect, useState } from "react";
import ImageUpload from "../../../components/ImageUpload";
import { Typography } from "@mui/material";
import { useAuth } from "../../../context/useAuth";
const PropertyPictures = ({ propertyState, setPropertyState }) => {
  const [fileList, setFileList] = useState([]);
  const { userData } = useAuth();

  useEffect(() => {
    setPropertyState((prev) => ({ ...prev, images: fileList }));
    if (userData) {
      setPropertyState((prev) => ({
        ...prev,
        images: [...fileList],
        VerificationStatus: "Verified",
        user_id: userData.id,
      }));
    }
  }, [fileList, setPropertyState, userData]);
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

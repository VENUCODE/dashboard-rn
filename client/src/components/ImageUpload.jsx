import React, { useState } from "react";
import { Image, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { getBase64 } from "../helperFunctions/helper";
import { FiUpload } from "react-icons/fi";
import "./uploadstyle.css";
const ImageUpload = ({ fileList, setFileList }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  return (
    <div className="d-flex flex-row">
      <div className="p-4">
        <ImgCrop rotationSlider>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={onChange}
            showUploadList
          >
            {fileList.length < 5 && <FiUpload />}
          </Upload>
        </ImgCrop>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: "none",
              height: "20px",
              width: "20px",
              borderRadius: "25px",
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

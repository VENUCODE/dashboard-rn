const express = require("express");
const uploadFiles = require("../utils/UploadFiles");
const {
  getServices,
  getServiceCategories,
  addService,
  deleteServiceById,
  addServiceCategory,
} = require("../controllers/ServiceControllers");
const handleFileUpload = uploadFiles("serviceImages").array("images", 5);
const router = express.Router();
router.get("/all", getServices);
router.post("/add-service", handleFileUpload, addService);
router.get("/categories", getServiceCategories);
router.delete("/delete-service", deleteServiceById);
router.post("/add-category", addServiceCategory);
module.exports = router;

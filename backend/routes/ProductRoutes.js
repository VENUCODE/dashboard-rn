const express = require("express");
const {
  getAllProducts,
  getProductCategories,
  addProductCategory,
  deleteProductById,
  addProduct,
} = require("../controllers/ProductControllers");
const router = express.Router();
router.get("/all", getAllProducts);
router.get("/categories", getProductCategories);
router.post("/add-category", addProductCategory);

const uploadFiles = require("../utils/UploadFiles");
const handleFileUpload = uploadFiles("productImages").array("images", 5);
router.post("/add-product", handleFileUpload, addProduct);
router.delete("/delete-product", deleteProductById);
module.exports = router;

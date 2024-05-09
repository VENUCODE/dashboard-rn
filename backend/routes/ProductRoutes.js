const express = require("express");
const {
  getAllProducts,
  getProductCategories,
  addProductCategory,
  deleteProductById,
} = require("../controllers/ProductControllers");
const router = express.Router();
router.get("/all", getAllProducts);
router.get("/categories", getProductCategories);
router.post("/add-category", addProductCategory);
router.delete("/delete-product", deleteProductById);
module.exports = router;

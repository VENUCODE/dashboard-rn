const express = require("express");
const {
  getAllProducts,
  getProductCategories,
  addProductCategory,
} = require("../controllers/ProductControllers");
const router = express.Router();
router.get("/all", getAllProducts);
router.get("/categories", getProductCategories);
router.post("/add-category", addProductCategory);
module.exports = router;

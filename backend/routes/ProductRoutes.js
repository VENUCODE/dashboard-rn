const express = require("express");
const {
  getAllProducts,
  getProductCategories,
} = require("../controllers/ProductControllers");
const router = express.Router();
router.get("/all", getAllProducts);
router.get("/categories", getProductCategories);
module.exports = router;

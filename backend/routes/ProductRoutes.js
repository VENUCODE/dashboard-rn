const express = require("express");
const { getAllProducts } = require("../controllers/ProductControllers");
const router = express.Router();
router.get("/all", getAllProducts);
module.exports = router;

const express = require("express");
const {
  getAllSuppliers,
  getSupplierAddons,
} = require("../controllers/SupplierController");
const router = express.Router();
router.get("/all", getAllSuppliers);
router.get("/supplier-addons", getSupplierAddons);
module.exports = router;

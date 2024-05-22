const express = require("express");
const {
  getAllSuppliers,
  getSupplierAddons,
} = require("../controllers/SupplierController");
const router = express.Router();
router.get("/all", getAllSuppliers);
router.post("/supplier-addons", getSupplierAddons);
module.exports = router;

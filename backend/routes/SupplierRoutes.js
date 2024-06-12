const express = require("express");
const {
  getAllSuppliers,
  getSupplierAddons,
  addSupplier,
} = require("../controllers/SupplierController");
const router = express.Router();
router.get("/all", getAllSuppliers);
router.post("/add-supplier", addSupplier);
router.post("/supplier-addons", getSupplierAddons);
module.exports = router;

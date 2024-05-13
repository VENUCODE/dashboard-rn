const express = require("express");
const {
  getAllSuppliers,
  getSupplierSupplies,
} = require("../controllers/SupplierController");
const router = express.Router();
router.get("/all", getAllSuppliers);
router.get("/:sid/supplies", getSupplierSupplies);

module.exports = router;

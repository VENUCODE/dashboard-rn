const express = require("express");
const { getAllProperties } = require("../controllers/PropertyController");
const router = express.Router();
router.get("/all", getAllProperties);
module.exports = router;

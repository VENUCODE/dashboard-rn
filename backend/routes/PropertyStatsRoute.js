const express = require("express");
const router = express.Router();
const getPropertyCounts = require("../controllers/PropertyStatisticCountController");
router.get("/properties", getPropertyCounts);
module.exports = router;

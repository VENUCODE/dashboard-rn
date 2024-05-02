const express = require("express");
const { getServices } = require("../controllers/ServiceControllers");
const router = express.Router();
router.get("/all", getServices);
module.exports = router;

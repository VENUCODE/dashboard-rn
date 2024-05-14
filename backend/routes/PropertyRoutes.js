const express = require("express");
const {
  getAllProperties,
  getUnverifiedProperties,
  verifyProperty,
  getRejectedProperties,
  rejectProperty,
} = require("../controllers/PropertyController");
const router = express.Router();
router.get("/verified", getAllProperties);
router.get("/unverified", getUnverifiedProperties);
router.get("/rejected", getRejectedProperties);
router.put("/verify", verifyProperty);
router.put("/reject", rejectProperty);

module.exports = router;

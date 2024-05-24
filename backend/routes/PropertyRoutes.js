const express = require("express");
const {
  getAllProperties,
  getUnverifiedProperties,
  verifyProperty,
  getRejectedProperties,
  rejectProperty,
  addProperty,
  deleteProperty,
} = require("../controllers/PropertyController");
const router = express.Router();

router.get("/verified", getAllProperties);
router.get("/unverified", getUnverifiedProperties);
router.get("/rejected", getRejectedProperties);
router.put("/verify", verifyProperty);
router.put("/reject", rejectProperty);
router.delete("/delete", deleteProperty);
const uploadFiles = require("../utils/UploadFiles");
const handleFileUpload = uploadFiles("property").array("images", 5);
router.post("/add", handleFileUpload, addProperty);

module.exports = router;

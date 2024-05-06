const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const {
  fileExtensionChecker,
  fileSizeHandler,
} = require("../middleware/ImageLimitter");
const fs = require("fs");
const IMAGES_DIRECTORY = "images";
if (!fs.existsSync(IMAGES_DIRECTORY)) {
  fs.mkdirSync(IMAGES_DIRECTORY);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, IMAGES_DIRECTORY);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });
router.post(
  "/img",
  fileExtensionChecker,
  fileSizeHandler,
  upload.array("images", 5),
  (req, res) => {
    try {
      const { propertyType, transactionTypes, name, category, phoneNumber } =
        req.body;

      const imagePaths = req.files.map((file) => file.path);

      const responseData = {
        propertyType,
        transactionTypes: JSON.parse(transactionTypes),
        name,
        category,
        phoneNumber,
        imagePaths,
      };
      res.json(responseData);
    } catch (error) {
      console.error("Error uploading form data:", error);
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;

const router = require("express").Router();
const {
  getAllAds,
  addNewAd,
  deleteAd,
} = require("../controllers/AdController.js");
const upload = require("../utils/UploadFiles");
const handleFileUpload = upload("adImages").array("images", 5);
router.get("/all", getAllAds);
router.post("/add", handleFileUpload, addNewAd);
router.delete("/delete", deleteAd);
module.exports = router;

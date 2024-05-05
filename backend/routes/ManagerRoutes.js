const express = require("express");
const {
  GetAllManagers,
  addManager,
} = require("../controllers/ManagerController");
const router = express.Router();
router.get("/all", GetAllManagers);
router.post("/add-manager", addManager);
module.exports = router;

const express = require("express");
const { LoginRoute, SignUpRoute } = require("../controllers/UserControllers");
const router = express.Router();
router.post("/login", LoginRoute);
router.post("/signup", SignUpRoute);
module.exports = router;

const mongoose = require("mongoose");
const supplierSchema = new mongoose.Schema(
  {
    usertype: { type: String, default: "supplier" },
    name: String,
    email: String,
    mobile: String,
    password: String,
    registered_Date: { type: Date, default: Date.now },
  },
  { strict: false, collection: "UserInfo", timestamps: true }
);
const supplier = new mongoose.model("UserInfo", supplierSchema);
module.exports = supplier;

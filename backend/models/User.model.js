// const mongoose = require("mongoose");
// const UserSchema = new mongoose.Schema(
//   {
//     usertype: {
//       type: String,
//       enum: ["admin", "agent", "manager", "normal_user", "supplier"],
//       required: [true, "userType required"],
//     },
//     name: {
//       type: String,
//       required: [true, "username requiredd"],
//     },
//     email: {
//       type: String,
//       required: [true, "user email required"],
//       unique: true,
//     },
//     mobile: String,
//     password: String,
//     profileImage: String,
//   },
//   { strict: false, collection: "UserInfo" }
// );
// const User = new mongoose.model("UserInfo", UserSchema);
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    usertype: String,
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    mobile: String,
    password: String,
    profileImage: String,
    status: String,
    registered_Date: { type: Date, default: Date.now },
    otp: { type: String },
    otpExpiry: { type: Date },
  },
  { strict: false, collection: "UserInfo" }
);
const User = new mongoose.model("UserInfo", UserSchema);
module.exports = User;

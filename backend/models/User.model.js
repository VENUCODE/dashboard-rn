const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    usertype: {
      type: String,
      enum: ["admin", "agent", "manager", "normal_user", "supplier"],
      required: [true, "userType required"],
    },
    name: {
      type: String,
      required: [true, "username requiredd"],
    },
    email: {
      type: String,
      required: [true, "user email required"],
      unique: true,
    },
    mobile: String,
    password: String,
    profileImage: String,
  },
  { strict: false, collection: "UserInfo" }
);
const User = new mongoose.model("UserInfo", UserSchema);
module.exports = User;

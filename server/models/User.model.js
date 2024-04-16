const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required  for user creation"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      default: "ADMIN",
    },
    description: {
      type: String,
      default:
        "Super admin of the dashboard page who has read and write access to everything in the databse/website",
    },
  },
  { collection: "users" }
);
const User = new mongoose.model("user", UserSchema);
module.exports = User;

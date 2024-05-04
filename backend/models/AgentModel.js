const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of agent is required"],
    },
    status: {
      type: String,
      enum: ["running", "hold"],
      default: "running",
      required: [true, "Name of agent is required"],
    },
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ApprovedBy requird"],
    },
    role: {
      type: String,
      enum: ["agent", "manager"],
      default: "agent",
    },
    usertype: {
      type: String,
      enum: ["agent", "manager", "normal_user"],
      default: "agent",
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email of agent is required"],
    },
    password: {
      type: String,
      required: [true, "Password of agent is required"],
    },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    location: {
      type: String,
      required: [true, "Place can't be empty"],
    },
    agentVerification: {
      type: String,
      enum: ["accepted", "requested", "rejected"],
    },

    occupation: {
      type: String,
      required: [true, "occupation can't be empty"],
    },
    coordinates: {
      lat: { type: Number, required: [true, "Latitude is required"] },
      long: { type: Number, required: [true, "Longitude is required"] },
    },
  },

  { timestamps: true, collection: "UserInfo", statics: false }
);

module.exports = mongoose.model("Agent", AgentSchema);

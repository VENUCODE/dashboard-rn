const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of agent is required"],
    },
    approvedBy: {
      type: String,
      required: [true, "ApprovedBy requird"],
    },
    role: {
      type: String,
      enum: ["agent", "manager"],
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
      required: [true, "Manager ID is required"],
    },
    place: {
      type: String,
      required: [true, "Place can't be empty"],
    },
    location: {
      lat: { type: Number, required: [true, "Latitude is required"] },
      long: { type: Number, required: [true, "Longitude is required"] },
    },
  },

  { timestamps: true, collection: "UserInfo" }
);

module.exports = mongoose.model("Agent", AgentSchema);

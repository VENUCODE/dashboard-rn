const mongoose = require("mongoose");

// Define the schema
const serviceSchema = new mongoose.Schema(
  {
    serviceName: {
      type: String,
      required: [true, "Service name is required"],
    },
    servicePrice: {
      type: Number,
    },
    serviceDescription: {
      type: String,
    },
    city: {
      type: String,
    },
    coordinates: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    images: {
      type: [String],
    },
    categoryName: {
      type: String,
    },
    agentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    timestamp: {
      type: Date,
    },
  },
  { collection: "Services" }
);

// Compile the schema into a model
const Services = mongoose.model("Service", serviceSchema);

module.exports = Services;

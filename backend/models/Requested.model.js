const mongoose = require("mongoose");

const RequestedProperties = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Types.ObjectId,
      ref: "Properties",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "UserInfo",
    },
    status: {
      type: String,
      default: "pending",
    },
    timestamp: { type: Date, default: Date.now },
  },
  {
    collection: "RequestedProducts",
    timestamps: true,
  }
);
const RequestedServices = new mongoose.Schema(
  {
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Services" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
    status: { type: String, default: "requested" },
    reason: { type: String },
    timestamp: { type: Date, default: Date.now },
  },
  {
    collection: "RequestedServices",
    timestamps: true,
  }
);
const RequestedProducts = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
    productQuantity: { type: Number },
    status: { type: String, default: "requested" },
    reason: { type: String },
    timestamp: { type: Date, default: Date.now },
  },
  {
    collection: "RequestedProducts",
    timestamps: true,
  }
);
module.exports = { RequestedProducts, RequestedServices, RequestedProperties };

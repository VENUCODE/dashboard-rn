const mongoose = require("mongoose");
const PropertySchema = new mongoose.Schema(
  {
    VerificationStatus: { type: String, default: "notverified" },
    timestamp: { type: Date, default: Date.now },
  },
  { strict: false, collection: "Properties" }
);

module.exports = mongoose.model("property", PropertySchema);

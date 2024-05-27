const mongoose = require("mongoose");
const AdvertisementSchema = new mongoose.Schema(
  {
    adTitle: String,
    adCategory: String,
    adRedirectLink: String,
    adStatus: { type: String, default: "running" },
    adOrigins: String,
    adLocation: String,
    agentId: { type: mongoose.Types.ObjectId, ref: "UserInfo" },
    timestamp: { type: Date, default: Date.now },
  },
  { strict: false, collection: "advertisements", timestamps: true }
);

module.exports = mongoose.model("advert", AdvertisementSchema);

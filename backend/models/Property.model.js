const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    VerificationStatus: { type: String, required: true },
    user_id: { type: String, required: true },
    propertyType: { type: String, required: true },
    transactionTypes: [{ type: String, required: true }],
    pWater_Supply: { type: String, required: true },
    pElectricity_Connection: { type: String, required: true },
    pSewage_Connection: { type: String, required: true },
    pGated_Security: { type: Boolean, required: true },
    pWidthofFacingRoad: { type: String, required: true },
    pgatedProject: { type: Boolean, required: true },
    pplotArea: { type: String, required: true },
    plength: { type: String, required: true },
    pwidth: { type: String, required: true },
    papproved: { type: Boolean, required: true },
    pfloorsAllowed: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
    landmark: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    availableFrom: { type: Date, required: true },
    expectedPrice: { type: String, required: true },
    underLoan: { type: Boolean, required: true },
    priceNegotiable: { type: Boolean, required: true },
    description: { type: String, required: true },
    images: [{ type: String, required: true }],
    __v: { type: Number, required: true },
  },
  { collection: "Properties" }
);
module.exports = mongoose.model("Property", propertySchema);

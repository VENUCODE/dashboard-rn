const Property = require("../models/Property.model");
const getAllProperties = async (req, res) => {
  try {
    const data = await Property.find({ VerificationStatus: "Verified" }, {});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getUnverifiedProperties = async (req, res) => {
  try {
    const properties = await Property.find({
      VerificationStatus: "notverified",
    });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "Internal Server" });
  }
};
const getRejectedProperties = async (req, res) => {
  try {
    const properties = await Property.find({
      VerificationStatus: "Rejected",
    });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "Internal Server" });
  }
};
const verifyProperty = async (req, res) => {
  try {
    const { propertyId } = req.body;
    const updated = await Property.findByIdAndUpdate(propertyId, {
      $set: { VerificationStatus: "Verified" },
    });
    if (updated) {
      res.status(200).json({ message: "Property is verified" });
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error:" + error.message });
  }
};
const rejectProperty = async (req, res) => {
  try {
    const { propertyId } = req.body;
    const updated = await Property.findByIdAndUpdate(propertyId, {
      $set: { VerificationStatus: "Rejected" },
    });
    if (updated) {
      res.status(200).json({ message: "Property is rejected" });
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error:" + error.message });
  }
};
module.exports = {
  getAllProperties,
  getUnverifiedProperties,
  verifyProperty,
  getRejectedProperties,
  rejectProperty,
};

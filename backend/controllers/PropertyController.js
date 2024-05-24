const Property = require("../models/Property.model");
const getAllProperties = async (req, res) => {
  try {
    const data = await Property.find(
      { VerificationStatus: "Verified" },
      { user_id: 0, __v: 0 }
    );
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
const deleteProperty = async (req, res) => {
  try {
    const { propertyId } = req.body;
    console.log(propertyId);
    const delted = await Property.findByIdAndDelete(propertyId);
    if (delted) {
      res.status(200).json({ message: "Property is deleted" });
    } else {
      res.status(400).json({ message: "Bad Request" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error:" + error.message });
  }
};
const addProperty = async (req, res) => {
  try {
    const { images, ...propertyDetails } = req.body;
    const imagePaths = req.files.map((file) => file.path);
    for (const key in propertyDetails) {
      try {
        propertyDetails[key] = JSON.parse(propertyDetails[key]);
      } catch (error) {
        console.log(error);
      }
    }
    const property = {
      ...propertyDetails,
      images: imagePaths,
    };
    const data = await Property.create(property);
    res.status(200).json({ message: "property added Succesfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
module.exports = {
  getAllProperties,
  getUnverifiedProperties,
  verifyProperty,
  getRejectedProperties,
  rejectProperty,
  addProperty,
  deleteProperty,
};

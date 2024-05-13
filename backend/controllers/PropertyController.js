const Property = require("../models/Property.model");
const getAllProperties = async (req, res) => {
  try {
    const data = await Property.find({}, {});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllProperties };

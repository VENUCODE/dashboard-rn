const Users = require("../models/User.model");
const Products = require("../models/Product.model");
const Services = require("../models/Service.model");
const Properties = require("../models/Property.model");
const getAllSuppliers = async (req, res) => {
  try {
    const allSuppliers = await Users.find({ usertype: "supplier" });
    res.status(200).json({ data: allSuppliers, message: "success" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getSupplierSupplies = async (req, res) => {
  try {
    const { sid } = req.params;
    const properties = await Properties.find({ user_id: sid });
    const services = await Services.find({ user_id: sid });

    // res.status(200).json({ properties });
  } catch (error) {
    res
      .status(500)
      .json({ message: "internal Server Error: " + error.message });
  }
};

module.exports = { getAllSuppliers, getSupplierSupplies };

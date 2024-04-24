const Product = require("../models/Product.model");
const getAllProducts = async (req, res, next) => {
  try {
    const result = await Product.find({});
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllProducts };

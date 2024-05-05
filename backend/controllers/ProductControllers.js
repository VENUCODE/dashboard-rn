const { Product, Categories } = require("../models/Product.model");
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ message: "products fetched", data: products });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the products:" + error.message,
    });
  }
};
const getProductCategories = async (req, res) => {
  try {
    const categories = await Categories.find({}, { categoryName: 1, _id: 0 });
    res.status(200).json({ message: "products fetched", data: categories });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the products:" + error.message,
    });
  }
};
module.exports = { getAllProducts, getProductCategories };

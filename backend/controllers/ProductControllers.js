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

const addProductCategory = async (req, res) => {
  try {
    const { categoryName, agentId } = req.body;
    const existingCategory = await Categories.findOne({ categoryName });

    if (existingCategory) {
      return res.status(400).json({
        message: categoryName + " already exists",
      });
    }

    const newCategory = await Categories.create({ categoryName, agentId });

    if (newCategory) {
      return res.status(200).json({
        message: categoryName + " added successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Failed to add the product category: " + error.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const { productName, productPrice, productDescription, categoryName } =
      req.body;

    const images = req.files.map((file) => file.path);

    const responseData = {
      productName,
      productPrice,
      productDescription,
      categoryName,
      images,
    };
    const newProduct = await Product.create(responseData);
    if (newProduct) {
      res.status(200).json({ data: newProduct, message: "success" });
    } else {
      res.status(400).json({ message: "Failed to add prodcut" });
    }
  } catch (error) {
    console.error("Error uploading form data:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductCategories,
  addProduct,
  addProductCategory,
};

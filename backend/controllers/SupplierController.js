const Users = require("../models/User.model");
const { Product, RequestedProducts } = require("../models/Product.model");
const addSupplier = async (req, res, next) => {
  try {
    const { email } = req.body;

    const supplierExists = await Users.findOne({ email });
    if (supplierExists) {
      return res.status(400).json({ message: "supplier already exists" });
    }
    const newSupplier = await Users.create(req.body);
    console.log("new supplier");
    res.status(201).json({ message: "supplier Added successfully" });
  } catch (error) {
    next(error);
  }
};
const getAllSuppliers = async (req, res) => {
  try {
    const allSuppliers = await Users.find({ usertype: "supplier" });
    res.status(200).json({ data: allSuppliers, message: "success" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getSupplierAddons = async (req, res) => {
  try {
    const { userId } = req.body;

    const userProducts = await Product.find({ agentId: userId });

    const requestedProducts = await RequestedProducts.find();

    const userProductIds = userProducts.map((product) =>
      product._id?.toString()
    );
    const productRequestCounts = userProductIds.reduce((acc, productId) => {
      acc[productId] = requestedProducts.filter(
        (requestedProduct) =>
          requestedProduct.productId?.toString() === productId
      ).length;
      return acc;
    }, {});

    const userProductsWithRequestCounts = userProducts.map((product) => ({
      ...product.toObject(),
      requestCount: productRequestCounts[product._id.toString()] || 0,
    }));

    res.status(200).json({ data: userProductsWithRequestCounts });
  } catch (error) {
    console.error("Error getting user's requested products:", error);
    res
      .status(500)
      .json({ message: "Failed to get user's requested products" });
  }
};
module.exports = { getAllSuppliers, getSupplierAddons, addSupplier };

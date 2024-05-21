const Users = require("../models/User.model");
const { Product, RequestedProducts } = require("../models/Product.model");

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

    // Step 1: Fetch all products uploaded by the user
    const userProducts = await Product.find({ agentId: userId });

    // Step 2: Fetch all requested products
    const requestedProducts = await RequestedProducts.find();

    // Step 3: Filter the requested products to only include those that match the user's products
    const userProductIds = userProducts.map((product) =>
      product._id.toString()
    );

    const productRequestCounts = userProductIds.reduce((acc, productId) => {
      acc[productId] = requestedProducts.filter(
        (requestedProduct) =>
          requestedProduct.productId.toString() === productId
      ).length;
      return acc;
    }, {});

    // Combine the user products with their respective request counts
    const userProductsWithRequestCounts = userProducts.map((product) => ({
      ...product.toObject(),
      requestCount: productRequestCounts[product._id.toString()] || 0,
    }));

    // Step 4: Respond with the combined data
    res.status(200).json(userProductsWithRequestCounts);
  } catch (error) {
    console.error("Error getting user's requested products:", error);
    res
      .status(500)
      .json({ message: "Failed to get user's requested products" });
  }
};
module.exports = { getAllSuppliers, getSupplierAddons };

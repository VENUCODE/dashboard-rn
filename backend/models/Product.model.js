const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    productName: String,
    productPrice: Number,
    productDescription: String,
    images: [String],
    timestamp: { type: Date, default: Date.now },
    categoryName: String,
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
  },
  {
    timestamp: true,
    collection: "Products",
  }
);
const ProductModel = mongoose.model("Products", ProductSchema);
const ProductCategories = new mongoose.Schema(
  {
    categoryName: String,
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
  },
  {
    timestamp: true,
    collection: "ProductCategories",
  }
);
const ProductCategoriesModel = mongoose.model(
  "ProductCategory",
  ProductCategories
);

module.exports = { Product: ProductModel, Categories: ProductCategoriesModel };

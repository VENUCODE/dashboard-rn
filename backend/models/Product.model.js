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
    strict: false,
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
    strict: false,
    collection: "ProductCategories",
  }
);
const RequestedProducts = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Products",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "UserInfo",
    },
    status: {
      type: String,
      default: "requested",
    },

    timestamp: { type: Date, default: Date.now },
  },
  { strict: false, timestamps: true, collection: "RequestedProducts" }
);
const ReqProModel = mongoose.model("RequestedProduct", RequestedProducts);
const ProductCategoriesModel = mongoose.model(
  "ProductCategory",
  ProductCategories
);

module.exports = {
  Product: ProductModel,
  Categories: ProductCategoriesModel,
  RequestedProducts: ReqProModel,
};

const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    usertype: String,
    name: String,
    email: { type: String, unique: true },
    mobile: String,
    password: String,
    profileImage: String,
    registered_Date: { type: Date, default: Date.now },
  },
  { strict: false, collection: "UserInfo" }
);

mongoose.model("UserInfo", UserDetailSchema);

const PropertySchema = new mongoose.Schema(
  { VerificationStatus: { type: String, default: "notverified" } },
  { strict: false, collection: "Properties" }
);
mongoose.model("Properties", PropertySchema);
const FavouritePropertySchema = new mongoose.Schema(
  {
    propertyId: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
    timestamp: { type: Date, default: Date.now },
  },
  {
    collection: "FavouriteProperties",
  }
);

mongoose.model("FavouriteProperties", FavouritePropertySchema);

const RequestedPropertySchema = new mongoose.Schema(
  {
    propertyId: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
    status: { type: String, default: "pending" },
    timestamp: { type: Date, default: Date.now },
  },
  {
    collection: "RequestedProperties",
  }
);

mongoose.model("RequestedProperties", RequestedPropertySchema);

const ProductCategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, unique: true, required: true },
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
    timestamp: { type: Date, default: Date.now },
  },
  {
    collection: "ProductCategories",
  }
);

mongoose.model("ProductCategories", ProductCategorySchema);

const ProductSchema = new mongoose.Schema(
  {
    productName: String,
    productPrice: Number,
    productDescription: String,
    images: [String],
    timestamp: { type: Date, default: Date.now }, // Array of image URLs
    categoryName: String, // Reference to the category name
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
  },
  {
    timestamp: true,
    collection: "Products",
  }
);

mongoose.model("Products", ProductSchema);

const ServiceCategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, unique: true, required: true },
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
    timestamp: { type: Date, default: Date.now },
  },
  {
    collection: "ServiceCategories",
  }
);

mongoose.model("ServiceCategories", ServiceCategorySchema);

const ServiceSchema = new mongoose.Schema(
  {
    serviceName: { type: String, unique: true },
    servicePrice: String,
    serviceDescription: String,
    city: String,
    coordinates: {
      latitude: String,
      longitude: String,
    },
    images: [String],
    timestamp: { type: Date, default: Date.now }, // Array of image URLs
    categoryName: String, // Reference to the category name
    agentId: { type: mongoose.Schema.Types.ObjectId, ref: "UserInfo" },
  },
  {
    collection: "Services",
  }
);

mongoose.model("Services", ServiceSchema);

const jobPostSchema = new mongoose.Schema(
  {
    status: { type: String, enum: ["open", "closed"], default: "open" },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Posted by Object Id required"],
    },
    jobTitle: { type: String, required: true },
    category: { type: String, required: true },
    skillsRequired: { type: [String], required: true },
    experience: { type: String, required: true },
    location: { type: String, required: true },
    expectedSalary: { type: String },
    companyName: { type: String, required: true },
    jobType: { type: String, required: true },
    keyResponsibilities: { type: [String], required: true },
    qualification: { type: String, required: true },
    aboutCompany: { type: String, required: true },
    numberOfOpenings: { type: Number, required: true },
    coordinates: {
      type: {
        lat: {
          type: Number,
          required: true,
        },
        long: {
          type: Number,
          required: true,
        },
      },
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "JobPosts",
  }
);
mongoose.model("JobPost", jobPostSchema);

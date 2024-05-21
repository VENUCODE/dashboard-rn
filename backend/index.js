//CORE MODULE IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();

//CUSTOM MODULE IMPORTS
const UserRoutes = require("./routes/UserRoutes");
const AgentRoutes = require("./routes/AgentRoutes");
const JobsRouters = require("./routes/JobPostRoutes");
// MIDDLEWARE SETUP
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//STATIC path resolution
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  "/productImages",
  express.static(path.join(__dirname, "productImages"))
);
app.use(
  "/serviceImages",
  express.static(path.join(__dirname, "serviceImages"))
);
// GLOBAL ERROR SETUP
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({ status: err.status, message: err.message });
});

// ROUTES SETUP
app.get("/", (req, res) => {
  res.status(200).json("server is running");
});
//NOTE -  User Route
app.use("/api/user", UserRoutes);

//NOTE -  Agent Route
app.use("/api/agents", AgentRoutes);

//NOTE -  Jobs Route
app.use("/api/jobs", JobsRouters);

//NOTE -  Service Route
const ServiceRoutes = require("./routes/ServiceRoutes");
app.use("/api/services", ServiceRoutes);

//NOTE -  statistic Route
const PropertyStatRoutes = require("./routes/PropertyStatsRoute");
app.use("/api/stats/property", PropertyStatRoutes);

//NOTE - Property Routes
const PropertyRoutes = require("./routes/PropertyRoutes");
app.use("/api/properties", PropertyRoutes);
//NOTE -  Products Route
const ProductRoutes = require("./routes/ProductRoutes");
app.use("/api/products", ProductRoutes);

//NOTE -  Manger Route
const ManagerRoutes = require("./routes/ManagerRoutes");
app.use("/api/managers", ManagerRoutes);

//NOTE - Supplier Routes
const SupplierRoutes = require("./routes/SupplierRoutes");
app.use("/api/suppliers", SupplierRoutes);
// DATABASE CONNECTION AND SERVER ACTION
const URI = process.env.MONGO_URL;
// console.log(URI);
mongoose
  .connect(URI)
  .then(() => {
    console.log("Database is connected");
    const PORT = process.env.PORT || 3300;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

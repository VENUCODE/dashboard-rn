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
const upload = require("./controllers/FileUploadController");
const JobsRouters = require("./routes/JobPostRoutes");
// MIDDLEWARE SETUP
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
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
app.use("/api/user", UserRoutes);
app.use("/api/agents", AgentRoutes);
app.use("/api/jobs", JobsRouters);

const ServiceRoutes = require("./routes/ServiceRoutes");
app.use("/api/services", ServiceRoutes);

const PropertyRoutes = require("./routes/PropertyStatsRoute");
app.use("/api/stats/property", PropertyRoutes);

const ProductRoutes = require("./routes/ProductRoutes");
app.use("/api/products", ProductRoutes);

const ManagerRoutes = require("./routes/ManagerRoutes");
app.use("/api/managers", ManagerRoutes);
const fileNames = require("./filenames");
app.post("/upload", function (req, res) {
  try {
    console.log(req.file);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
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

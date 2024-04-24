//CORE MODULE IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
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
app.use("/api/agent", AgentRoutes);
app.use("/api/jobs", JobsRouters);
const PropertyRoutes = require("./routes/PropertyStatsRoute");
app.use("/api/stats/property", PropertyRoutes);
const ProductRoutes = require("./routes/ProductRoutes");
app.use("/api/products", ProductRoutes);
app.post("/upload_img", upload.any(), function (req, res, next) {
  try {
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (error) {
    next(error);
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

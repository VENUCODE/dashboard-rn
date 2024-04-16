//CORE MODULE IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
//CUSTOM MODULE IMPORTS
const UserRoutes = require("./routes/UserRoutes");
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
app.use("/api/user/", UserRoutes);
// DATABASE CONNECTION AND SERVER ACTION
const URI = process.env.MONGO_CONNECT_URI;
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

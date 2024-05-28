const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

// Use gzip compression
app.use(compression());

// Use Helmet to set some security-related HTTP headers
app.use(helmet());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));

// Handle all other routes with index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

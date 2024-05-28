const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

app.use(compression());

app.use(helmet());

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

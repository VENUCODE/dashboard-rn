const multer = require("multer");
const fs = require("fs");
const path = require("path");

const uploadFiles = (destinationDirectory) => {
  if (!fs.existsSync(destinationDirectory)) {
    fs.mkdirSync(destinationDirectory);
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destinationDirectory);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  return multer({ storage });
};

module.exports = uploadFiles;

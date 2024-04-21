const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "/files");
  },
  filename: function (req, file, callback) {
    console.log(file.originalname);
    const fileExtension = path.extname(file.originalname);
    const filename = `file_${crypto.randomUUID()}.${fileExtension}}`;
    callback(null, filename);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1048576, //file size in bits
  },
});

//FIXME - post route to accept the data and setup upload middleware
module.exports = upload;

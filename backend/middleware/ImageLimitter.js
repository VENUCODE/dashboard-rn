const path = require("path");
const multer = require("multer");
const fileSizeLimit = 3 * 1024 * 1024; // 3MB
const fileSizeLimitter = multer({
  limits: { fileSize: fileSizeLimit },
}).array("images", 5);

const fileSizeHandler = (req, res, next) => {
  if (req.files) {
    const exceededFiles = req.files.filter((file) => file.size > fileSizeLimit);
    if (exceededFiles.length > 0) {
      const exceededFileNames = exceededFiles.map((file) => file.originalname);
      console.log(`File size limit exceeded: ${exceededFileNames.join(",")}`);
      res.status(400).json({
        message: `File size limit exceeded: ${exceededFileNames.join(",")}`,
      });
      return;
    }
  }
  next();
};

const allowedExtensions = [".jpg", ".jpeg", ".png"];

// Middleware for file extension checking
const fileExtensionChecker = (req, res, next) => {
  if (req.files) {
    const invalidFiles = req.files.filter((file) => {
      const ext = path.extname(file.originalname).toLowerCase();
      return !allowedExtensions.includes(ext);
    });
    if (invalidFiles.length > 0) {
      const invalidFileNames = invalidFiles.map((file) => file.originalname);
      console.log(`Invalid file extension(s): ${invalidFileNames.join(", ")}`);
      res.status(400).json({
        message: `Invalid file extension(s): ${invalidFileNames.join(", ")}`,
      });
      return; // Return immediately if any file has an invalid extension
    }
  }
  next();
};

module.exports = { fileExtensionChecker, fileSizeHandler };

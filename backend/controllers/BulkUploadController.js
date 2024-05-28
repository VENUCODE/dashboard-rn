const csvtojson = require("csvtojson");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { Product } = require("../models/Product.model");
const Property = require("../models/Property.model");
const { Services } = require("../models/Service.model");

const downloadImage = async (url, filename) => {
  const response = await axios({
    url: url,
    method: "GET",
    responseType: "stream",
  });

  const writer = fs.createWriteStream(filename);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

const uploadData = async (req, res) => {
  try {
    const { operationType } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded." });
    }

    const csvFilePath = req.file.path;
    const jsonArray = await csvtojson().fromFile(csvFilePath);
    const updatedJsonArray = await Promise.all(
      jsonArray.map(async (record) => {
        if (record.images) {
          const imagePaths = record.images
            .split(",")
            .map((image) => image.trim());
          const newImagePaths = [];

          for (const imagePath of imagePaths) {
            let newImagePath;
            if (
              imagePath.startsWith("http://") ||
              imagePath.startsWith("https://")
            ) {
              const imageName =
                Date.now() + "_" + path.basename(imagePath.split("?")[0]); // Remove query parameters from URL
              newImagePath = `demoUploads/${imageName}`; // Construct new image path with original image name
              await downloadImage(imagePath, newImagePath); // Download image and save locally
            } else {
              if (fs.existsSync(imagePath)) {
                const imageName = Date.now() + "_" + path.basename(imagePath); // Get the file name from the local path
                newImagePath = `demoUploads/${imageName}`; // Construct new image path with original image name
                fs.copyFileSync(imagePath, newImagePath); // Copy local image to demoUploads folder
              }
            }

            newImagePaths.push(newImagePath || imagePath); // Push the new image path or original path
          }

          record.images = newImagePaths;
        }
        return record;
      })
    );

    fs.unlinkSync(csvFilePath);

    let savedData;
    switch (operationType) {
      case "properties":
        savedData = await Property.create(updatedJsonArray);
        break;
      case "products":
        savedData = await Product.create(updatedJsonArray);
        break;
      case "services":
        savedData = await Services.create(updatedJsonArray);
        break;
      default:
        return res.status(400).json({ message: "Invalid operation type." });
    }

    res.status(200).json({ data: savedData });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Server error.", error });
  }
};

module.exports = uploadData;
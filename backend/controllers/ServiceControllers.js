const { Services, Categories } = require("../models/Service.model");

const getServices = async (req, res, next) => {
  try {
    const data = await Services.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getServiceCategories = async (req, res, next) => {
  const categories = [];
  try {
    const data = (await Categories.find({}, { categoryName: 1, _id: 0 })).map(
      (item) => categories.push(item.categoryName)
    );
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
};

const addService = async (req, res) => {
  try {
    const {
      serviceName,
      servicePrice,
      serviceDescription,
      categoryName,
      agentId,
      location,
      coordinates,
    } = req.body;

    const images = req.files.map((file) => file.path);

    const newServiceData = {
      serviceName,
      servicePrice,
      serviceDescription,
      categoryName,
      agentId,
      coordinates,
      images,
      location,
    };
    console.log(newServiceData);

    const newService = await Services.create(newServiceData);
    if (newService) {
      res.status(200).json({ message: "Service added successfully" });
    } else {
      res.status(400).json({ message: "Failed to add product" });
    }
  } catch (error) {
    console.error("Error adding service:", error);
    res.status(500).json({ message: error.message });
  }
};

const deleteServiceById = async (req, res) => {
  try {
    const { pid } = req.body;
    const response = await Services.findByIdAndDelete(pid);
    if (!response) {
      res.status(400).json({ message: "bad request" });
    }
    res.status(200).json({ message: "Deleted product" });
  } catch (error) {
    res.status(400).json({ message: "bad request" });
    console.log(error);
  }
};
const addServiceCategory = async (req, res) => {
  try {
    const { categoryName, agentId } = req.body;
    const existingCategory = await Categories.findOne({ categoryName });

    if (existingCategory) {
      return res.status(400).json({
        message: categoryName + " already exists",
      });
    }

    const newCategory = await Categories.create({ categoryName, agentId });

    if (newCategory) {
      return res.status(200).json({
        message: categoryName + " added successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Failed to add the product category: " + error.message,
    });
  }
};

module.exports = {
  getServices,
  getServiceCategories,
  addService,
  addServiceCategory,
  deleteServiceById,
};

const ServiceModel = require("../models/Service.model");

const getServices = async (req, res, next) => {
  try {
    const data = await ServiceModel.find({});

    const servicesByCategory = {};

    data.forEach((service) => {
      const categoryName = service.categoryName.toLowerCase();
      if (!servicesByCategory[categoryName]) {
        servicesByCategory[categoryName] = [];
      }
      servicesByCategory[categoryName].push(service);
    });

    const response = Object.keys(servicesByCategory).map((categoryName) => ({
      [categoryName]: servicesByCategory[categoryName],
    }));

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices };

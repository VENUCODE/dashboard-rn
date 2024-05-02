const ServiceModel = require("../models/Service.model");

const getServices = async (req, res, next) => {
  try {
    const data = await ServiceModel.find({});
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices };

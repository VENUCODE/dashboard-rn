const Property = require("../models/Property.model");

const totalPropertyCount = async (req, res) => {
  try {
    const count = await Property.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const totalPropertyCategories = async (req, res) => {
  try {
    const categories = await Property.distinct("propertyType");
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const totalActivePropertyCategories = async (req, res) => {
  try {
    const categories = await Property.distinct("propertyType", {
      papproved: true,
    });
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const MonthlyNewPropertyArrivals = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const months = [];
    const pipeline = [
      {
        $match: {
          availableFrom: {
            $gte: new Date(currentYear, 0, 1), // Get properties from January 1st of the current year
            $lt: new Date(currentYear + 1, 0, 1), // Properties until January 1st of the next year
          },
        },
      },
      {
        $group: {
          _id: { $month: "$availableFrom" }, // Extract month
          count: { $sum: 1 }, // Count the number of properties in each group
        },
      },
      {
        $project: {
          _id: 0, // Exclude _id field
          month: "$_id", // Rename _id to month
          count: 1, // Include count field
        },
      },
    ];

    const result = await Property.aggregate(pipeline);

    // Fill months array with counts for each month
    for (let i = 1; i <= 12; i++) {
      const monthData = result.find((item) => item.month === i);
      months.push({ month: i, count: monthData ? monthData.count : 0 });
    }

    res.status(200).json(months);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  totalPropertyCount,
  totalPropertyCategories,
  totalActivePropertyCategories,
  MonthlyNewPropertyArrivals,
};

const totalServicesCount = async (req, res) => {};
const totalServicesCategories = async (req, res) => {};
const totalActiveServicesCategories = async (req, res) => {};
const MonthlyNewServicesArrivals = async (req, res) => {};

const totalProductsCount = async (req, res) => {};
const totalProductsCategories = async (req, res) => {};
const totalActiveProductsCategories = async (req, res) => {};
const MonthlyNewProductsArrivals = async (req, res) => {};

const totalJobsPosted = async (req, res) => {};
const totalJobsPostsActive = async (req, res) => {};
const totalJobsClosed = async (req, res) => {};

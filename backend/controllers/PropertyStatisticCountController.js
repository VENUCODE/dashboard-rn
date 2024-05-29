const Property = require("../models/Property.model");

const getPropertyCounts = async (req, res) => {
  try {
    const totalPropertiesCount = await Property.countDocuments();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);

    const monthlyProperties = await Property.aggregate([
      {
        $match: {
          timestamp: { $gte: startDate, $lte: endDate },
        },
      },
      {
        $group: {
          _id: { $month: "$timestamp" },
          count: { $sum: 1 },
        },
      },
    ]);

    const monthlyArrivals = {
      Jan: 0,
      Feb: 0,
      Mar: 0,
      Apr: 0,
      May: 0,
      Jun: 0,
      Jul: 0,
      Aug: 0,
      Sep: 0,
      Oct: 0,
      Nov: 0,
      Dec: 0,
    };

    monthlyProperties.forEach((monthData) => {
      const monthName = new Date(year, monthData._id - 1, 1).toLocaleString(
        "en-US",
        { month: "short" }
      );
      monthlyArrivals[monthName] = monthData.count;
    });
    const residentialCount = await Property.countDocuments({
      propertyType: "residential",
    });
    const commercialCount = await Property.countDocuments({
      propertyType: "commercial",
    });
    const landPlotCount = await Property.countDocuments({
      propertyType: "land_plot",
    });

    res.json({
      totalPropertiesCount,
      monthlyArrivals,
      residentialCount,
      commercialCount,
      landPlotCount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPropertyCounts;

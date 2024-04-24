const express = require("express");
const PropertyRouter = express.Router();
const {
  totalPropertyCount,
  totalPropertyCategories,
  totalActivePropertyCategories,
  MonthlyNewPropertyArrivals,
} = require("../controllers/PropertyStatisticCountController");
PropertyRouter.get("/total-count", totalPropertyCount);
PropertyRouter.get("/total-category", totalPropertyCategories);
PropertyRouter.get("/total-active", totalActivePropertyCategories);
PropertyRouter.get("/monthly-stats", MonthlyNewPropertyArrivals);

module.exports = PropertyRouter;

const Ads = require("../models/Advertisement.mode");
const getAllAds = async (req, res) => {
  try {
    const result = await Ads.find({});
    if (result) {
      res.status(200).json({ message: "fetched", data: result });
    } else {
      res.status(200).json({ message: "no records found", data: [] });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const deleteAd = async (req, res) => {
  try {
    const result = await Ads.findByIdAndDelete(req.body.adId);
    if (result) {
      res.status(200).json({ message: "deleted ad" });
    } else {
      res.status(200).json({ message: "no records found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
const addNewAd = async (req, res) => {
  try {
    const {
      adTitle,
      adCategory,
      adRedirectLink,
      timestamps,
      adStatus,
      adOrigins,
      adLocation,
      agentId,
    } = req.body;

    if (
      !adTitle ||
      !adCategory ||
      !adRedirectLink ||
      !adStatus ||
      !adOrigins ||
      !adLocation ||
      !agentId
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const images = req.files ? req.files.map((file) => file.path) : [];

    const newAd = await Ads.create({
      adTitle,
      adCategory,
      adRedirectLink,
      adStatus,
      adOrigins,
      adLocation,
      images,
      agentId,
    });

    res.status(201).json({ message: "Ad created successfully" });
  } catch (error) {
    console.error("Error adding new ad:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllAds, addNewAd, deleteAd };

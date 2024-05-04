const JobPost = require("../models/Jobs.model");

// Controller function to create a new job post
const createJobPost = async (req, res, next) => {
  try {
    const jobPost = new JobPost(req.body);
    await jobPost.save();
    res.status(201).json({
      success: true,
      message: "Job post created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Controller function to get all job posts
const getAllJobPosts = async (req, res, next) => {
  try {
    const jobPosts = await JobPost.find();
    res.status(200).json({ success: true, data: jobPosts });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
const getJobCategories = async (req, res, next) => {
  try {
    const jobCategories = await JobPost.distinct("category");
    res.status(200).json({ data: jobCategories });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// // Controller function to get a single job post by ID
// const getJobPostById = async (req, res) => {
//   try {
//     const jobPost = await JobPost.findById(req.params.id);
//     if (!jobPost) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Job post not found" });
//     }
//     res.status(200).json({ success: true, data: jobPost });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: "Failed to retrieve job post",
//       error: error.message,
//     });
//   }
// };

// Controller function to update a job post by ID
const UpdateJobPostStatusById = async (req, res) => {
  try {
    const jobPost = await JobPost.findByIdAndUpdate(
      req.body.jobId,
      { status: req.body.status },
      { new: true }
    );
    if (!jobPost) {
      return res
        .status(404)
        .json({ success: false, message: "Job post not found" });
    }
    res.status(200).json({
      success: true,
      message: "Job post updated successfully",
      data: jobPost,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update job post",
      error: error.message,
    });
  }
};

// Controller function to delete a job post by ID
const deleteJobPostById = async (req, res) => {
  try {
    const jobPost = await JobPost.findByIdAndDelete(req.body.jobId);
    if (!jobPost) {
      return res
        .status(404)
        .json({ success: false, message: "Job post not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Job post deleted successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete job post",
      error: error.message,
    });
  }
};

module.exports = {
  createJobPost,
  getAllJobPosts,
  //   getJobPostById,
  getJobCategories,
  UpdateJobPostStatusById,
  deleteJobPostById,
};

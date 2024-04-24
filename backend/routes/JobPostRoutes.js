const express = require("express");
const {
  createJobPost,
  getAllJobPosts,
  UpdateJobPostStatusById,
  deleteJobPostById,
  getJobCategories,
} = require("../controllers/JobsController");
const router = express.Router();

router.post("/add-post", createJobPost);
router.get("/get-posts", getAllJobPosts);
router.post("/update-status", UpdateJobPostStatusById);
router.post("/delete-job", deleteJobPostById);
router.get("/categories", getJobCategories);

module.exports = router;

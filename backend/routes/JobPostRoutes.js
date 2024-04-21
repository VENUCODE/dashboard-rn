const express = require("express");
const {
  createJobPost,
  getAllJobPosts,
  UpdateJobPostStatusById,
  deleteJobPostById,
} = require("../controllers/JobsController");
const router = express.Router();

router.post("/add-post", createJobPost);
router.get("/get-posts", getAllJobPosts);
router.post("/update-status", UpdateJobPostStatusById);
router.post("/delete-job", deleteJobPostById);

module.exports = router;

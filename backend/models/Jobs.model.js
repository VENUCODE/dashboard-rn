const mongoose = require("mongoose");

const jobPostSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Posted by Object Id required"],
    },
    jobTitle: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    skillsRequired: {
      type: [String],
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    keyResponsibilities: {
      type: [String],
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    aboutCompany: {
      type: String,
      required: true,
    },
    numberOfOpenings: {
      type: Number,
      required: true,
    },
    coordinates: {
      type: {
        lat: {
          type: Number,
          required: true,
        },
        long: {
          type: Number,
          required: true,
        },
      },
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "JobPosts",
  }
);

const JobPost = mongoose.model("JobPost", jobPostSchema);

module.exports = JobPost;

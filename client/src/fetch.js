const hostUri = "https://dashboard-react-nodejs-mongodb.onrender.com";

const endpoints = {
  loginUser: "/api/user/login",
  getAllAgents: "/api/agents/all",
  addAgent: "/api/agents/add-agent",
  updateAgentStatus: "/api/agents/update-status",
  getAllJobs: "/api/jobs/get-posts",
  updateJobStatus: "/api/jobs/update-status",
  deleteJobPost: "/api/jobs/delete-job",
  getAllServices: "/api/services/all",
  getAllProperties: "https://rightneeds.azurewebsites.net/properties",
};

module.exports = { hostUri, endpoints };

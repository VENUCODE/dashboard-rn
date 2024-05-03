const hostUri = "http://localhost:3300";

const endpoints = {
  loginUser: "/api/user/login",
  getAllAgents: "/api/agents/all",
  addAgent: "/api/agents/add-agent",
  updateAgentStatus: "/api/agents/update-status",
  getAllJobs: "/api/jobs/get-posts",
  updateJobStatus: "/api/jobs/update-status",
  deleteJobPost: "/api/jobs/delete-job",
  getAllProperties: "https://rightneeds.azurewebsites.net/properties",
};

module.exports = { hostUri, endpoints };

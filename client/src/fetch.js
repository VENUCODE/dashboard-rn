// const hostUri = "https://dashboard-react-nodejs-mongodb.onrender.com";
const hostUri = "http://localhost:3300";

const endpoints = {
  loginUser: "/api/user/login",
  //agent endpoints
  getAllAgents: "/api/agents/verified-agents",
  getRequestedAgents: "/api/agents/agent-requests",
  addAgent: "/api/agents/add-agent",
  getAgentOccupations: "/api/agents/occupation",
  updateAgentStatus: "/api/agents/update-status",
  //requested agents
  verifyAgent: "/api/agents/verify-agent",
  getAllJobs: "/api/jobs/get-posts",
  addJobPost: "/api/jobs/add-post",
  updateJobStatus: "/api/jobs/update-status",
  getJobCategories: "/api/jobs/categories",
  deleteJobPost: "/api/jobs/delete-job",
  getAllServices: "/api/services/all",
  getAllProperties: "https://rightneeds.azurewebsites.net/properties",
};

module.exports = { hostUri, endpoints };

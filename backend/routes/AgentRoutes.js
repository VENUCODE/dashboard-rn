const express = require("express");
const router = express.Router();
const {
  addAgent,
  GetAllAgents,
  // GetAgentDetailById,
  // GetAgentList,
  agentRequest,
  verifyAgent,
  getAgentOccupations,
  updateAgentStatus,
} = require("../controllers/AgentControllers");
//NOTE - route to get the agents list who  are under a particular manager of the specified managerId
// router.get("/manager/:managerId", GetAgentList);
//NOTE - route to get the agent detail using the agentId
// router.get("/agent-detail/:agentId", GetAgentDetailById);
//!NOTE - route to get all the agents
router.get("/verified-agents", GetAllAgents);
//NOTE - route to add a new agent through admin panel
router.post("/add-agent", addAgent);
router.get("/occupation", getAgentOccupations);
router.put("/update-status", updateAgentStatus);
//NOTE - agent requests
router.get("/agent-requests", agentRequest);
router.put("/verify-agent", verifyAgent);

module.exports = router;

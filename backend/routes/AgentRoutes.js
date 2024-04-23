const express = require("express");
const router = express.Router();
const {
  AddAgent,
  GetAllAgents,
  GetAgentDetailById,
  GetAgentList,
} = require("../controllers/AgentControllers");
//NOTE - route to get the agents list who  are under a particular manager of the specified managerId
router.get("/manager/:managerId", GetAgentList);
//NOTE - route to get the agent detail using the agentId
router.get("/agent-detail/:agentId", GetAgentDetailById);
//!NOTE - route to get all the agents
router.get("/all", GetAllAgents);
//NOTE - route to add a new agent through admin panel
router.post("/add-agent", AddAgent);

module.exports = router;
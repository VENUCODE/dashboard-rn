const AgentModel = require("../models/AgentModel");
const CreateError = require("../utils/CreateError");
const GetAgentDetailById = async (req, res, next) => {
  //ANCHOR - get the agent Id from the request body and fet the agent details using the id
  try {
    const { agentId } = req.params;
    const agent = await AgentModel.findById({ _id: agentId });
    res.status(200).json(agent);
  } catch (error) {
    next(error);
  }
};
const GetAllAgents = async (req, res, next) => {
  try {
    const agents = await AgentModel.find({ usertype: "agent" });
    res.status(200).json(agents);
  } catch (error) {
    next(error);
  }
};

const updateAgentStatus = async (req, res, next) => {
  try {
    const { agentId, status } = req.body;
    const updatedAgent = await AgentModel.findByIdAndUpdate(
      agentId,
      { status: status },
      { new: true }
    );
    if (!updatedAgent) {
      return res.status(404).json({ error: "Agent not found" });
    }
    console.log(updatedAgent);
    res.status(200).json(updatedAgent);
  } catch (error) {
    next(error);
  }
};
const deleteAgent = async (req, res, next) => {
  try {
    const { agentId, status } = req.body;
    const updatedAgent = await AgentModel.findByIdAndUpdate(
      agentId,
      { role: "normal_user", usertype: "normal_user" },
      { new: true }
    );
    if (!updatedAgent) {
      return res.status(404).json({ error: "Agent not found" });
    }
    console.log(updatedAgent);
    res.status(200).json(updatedAgent);
  } catch (error) {
    next(error);
  }
};
const getAgentOccupations = async (req, res, next) => {
  try {
    const AgentOccupations = await AgentModel.distinct("occupation");
    res.status(200).json({ data: AgentOccupations });
  } catch (error) {
    next(error);
  }
};
const GetAgentList = async (req, res, next) => {
  //ANCHOR - get the agent's details whose manager is the manager id
  try {
    const { managerId } = req.params;
    const agentsList = await AgentModel.find({ managerId });
    res.status(200).json(agentsList);
  } catch (error) {
    next(error);
  }
};
const GetAgentByLocation = async (req, res, next) => {
  //ANCHOR - get the agents list by the location using the  longitude and latitude from the params
  //and search the agents in that area
  const { lat, long } = req.query;
};

const AddAgent = async (req, res, next) => {
  //ANCHOR - get the agents list by the location using the  longitude and latitude from the params
  //and search the agents in that area
  try {
    const { name, email, password, location, managerId } = req.body;
    const agent = await AgentModel.findOne({ email });
    if (agent) {
      return res.status(400).json({ error: "Agent already exists" });
    }
    const newAgent = await AgentModel.create({
      name,
      email,
      password,
      location,
      managerId,
    });

    res.status(200).json(newAgent);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetAgentDetailById,
  GetAgentList,
  GetAgentByLocation,
  AddAgent,
  getAgentOccupations,
  updateAgentStatus,
  GetAllAgents,
};

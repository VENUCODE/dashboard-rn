const AgentModel = require("../models/AgentModel");

const GetAllManagers = async (req, res, next) => {
  try {
    const managers = await AgentModel.find({
      usertype: "manager",
    });
    res.status(200).json(managers);
  } catch (error) {
    next(error);
  }
};
const addManager = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if agent with the same email already exists
    const agentExists = await AgentModel.findOne({ email });
    console.log(req.body);
    if (agentExists) {
      return res.status(400).json({ message: "manager already exists" });
    }

    const newManager = await AgentModel.create(req.body);
    res.status(201).json({ message: "Manager Added successfull" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// const getManagerOccupations = async (req, res, next) => {
//   try {
//     const ManagerOccupations = await AgentModel.distinct("occupation", {
//       usertype: "manager",
//     });
//     res.status(200).json({ data: ManagerOccupations });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = { GetAllManagers, addManager };

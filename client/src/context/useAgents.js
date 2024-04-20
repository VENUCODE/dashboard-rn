import React, { createContext, useContext, useState } from "react";

// Create the context
const AgentsContext = createContext();

export const AgentsProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const getAgentById = (id) => {
    return agents.find((agent) => agent.id === id);
  };

  return (
    <AgentsContext.Provider value={{ agents, setAgents, getAgentById }}>
      {children}
    </AgentsContext.Provider>
  );
};
export const useAgents = () => useContext(AgentsContext);

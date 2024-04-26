// AgentContext.js
import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";

const AgentContext = createContext();

export const AgentsProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);

  const addAgent = (newAgent) => {
    setAgents([...agents, newAgent]);
  };

  const getAgents = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3300/api/agents/all", {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        setAgents(data);
        console.log(data); // Changed to log fetched data, not the state
      } else {
        console.error("Failed to fetch Agents:", data.message);
        message.error("Failed to fetch Agents", 2);
      }
    } catch (error) {
      console.error("Error fetching agents:", error);
    } finally {
      setLoading(false);
    }
  };

  const holdAgent = (agentId, status) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === agentId ? { ...agent, status: status } : agent
      )
    );
  };

  const deleteAgent = (agentId) => {
    setAgents((prevAgents) =>
      prevAgents.filter((Agent) => Agent.id !== agentId)
    );
  };

  useEffect(() => {
    getAgents();
    console.log(agents);
    // Cleanup function to prevent memory leaks
    return () => {};
  }, []); // Pass an empty dependency array to run the effect only once

  return (
    <AgentContext.Provider
      value={{ agents, addAgent, holdAgent, deleteAgent, getAgents, loading }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export const useAgents = () => useContext(AgentContext);

// AgentContext.js
import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import { hostUri, endpoints } from "../fetch";
const AgentContext = createContext();

export const AgentsProvider = ({ children }) => {
  const [agents, setAgents] = useState([]);
  const [reqAgents, setReqAgents] = useState([]);

  const [loading, setLoading] = useState(false);

  const addAgent = () => {
    getAgents();
  };

  const getAgents = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${hostUri}${endpoints.getAllAgents}`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        setAgents(data);
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
  const getReqAgents = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${hostUri}${endpoints.getRequestedAgents}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        setReqAgents(data.data);
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
  const holdAgent = async (agentId, status, setHoldLoading) => {
    try {
      setHoldLoading(true);
      const response = await fetch(`${hostUri}${endpoints.updateAgentStatus}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agentId, status }),
      });

      if (response.ok) {
        console.log(`${status} successfully`);
        const data = await response.json();
        message.success(data.message, 1);
        getAgents();
      } else {
        console.log(response);
        console.log("Failed to hold agent");
      }
    } catch (error) {
      console.error("Error updatting status", error);
    } finally {
      setHoldLoading(false);
    }
  };
  const deleteAgent = () => {
    getAgents();
  };
  //Functions for requested agents
  const verifyAgent = async (agentId, setAcceptLoading) => {
    try {
      setAcceptLoading(true);
      const response = await fetch(`${hostUri}${endpoints.verifyAgent}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agentId }),
      });

      if (response.ok) {
        console.log(`Agent Verified successfully`);
        const data = await response.json();
        message.success(data.message, 1);
        getAgents();
        getReqAgents();
      } else {
        console.log(response);
        console.log("Failed to accept  agent");
      }
    } catch (error) {
      console.error("Error accepthing agent", error);
    } finally {
      setAcceptLoading(false);
    }
  };

  useEffect(() => {
    getAgents();
    getReqAgents();
    return () => {};
  }, []);

  return (
    <AgentContext.Provider
      value={{
        agents,
        addAgent,
        holdAgent,
        deleteAgent,
        getAgents,
        verifyAgent,
        reqAgents,
        loading,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export const useAgents = () => useContext(AgentContext);

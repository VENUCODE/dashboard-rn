// AgentContext.js
import { message } from "antd";
import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { endpoints, hostUri } from "../fetch";

const AgentContext = createContext();

const fetchAgents = async () => {
  const response = await fetch(`${hostUri}${endpoints.getAllAgents}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch agents");
  }
  return data;
};

const fetchRequestedAgents = async () => {
  const response = await fetch(`${hostUri}${endpoints.getRequestedAgents}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch requested agents");
  }
  return data.data;
};

const updateAgentStatus = async ({ agentId, status }) => {
  const response = await fetch(`${hostUri}${endpoints.updateAgentStatus}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ agentId, status }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to update agent status");
  }
  return data;
};

const verifyAgentRequest = async (agentId) => {
  const response = await fetch(`${hostUri}${endpoints.verifyAgent}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ agentId }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to verify agent");
  }
  return data;
};

export const AgentsProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const {
    data: agents = [],
    isLoading: loadingAgents,
    refetch: refetchAgents,
  } = useQuery({
    queryKey: ["agents"],
    queryFn: fetchAgents,
    onError: (error) => message.error(error.message, 2),
  });

  const {
    data: reqAgents = [],
    isLoading: loadingReqAgents,
    refetch: refetchReqAgents,
  } = useQuery({
    queryKey: ["reqAgents"],
    queryFn: fetchRequestedAgents,
    onError: (error) => message.error(error.message, 2),
  });

  const holdAgentMutation = useMutation({
    mutationFn: updateAgentStatus,
    onSuccess: (data) => {
      message.success(data.message, 1);
      queryClient.invalidateQueries(["agents"]);
    },
    onError: (error) => message.error(error.message, 2),
  });

  const verifyAgentMutation = useMutation({
    mutationFn: verifyAgentRequest,
    onSuccess: (data) => {
      message.success(data.message, 1);
      queryClient.invalidateQueries(["agents"]);
      queryClient.invalidateQueries(["reqAgents"]);
    },
    onError: (error) => message.error(error.message, 2),
  });

  const addAgent = () => {
    refetchAgents();
  };

  const holdAgent = (agentId, status, setHoldLoading) => {
    setHoldLoading(true);
    holdAgentMutation.mutate(
      { agentId, status },
      {
        onSettled: () => setHoldLoading(false),
      }
    );
  };

  const deleteAgent = () => {
    refetchAgents();
  };

  const verifyAgent = (agentId, setAcceptLoading) => {
    setAcceptLoading(true);
    verifyAgentMutation.mutate(agentId, {
      onSettled: () => setAcceptLoading(false),
    });
  };

  return (
    <AgentContext.Provider
      value={{
        agents,
        addAgent,
        holdAgent,
        deleteAgent,
        verifyAgent,
        reqAgents,
        loading: loadingAgents || loadingReqAgents,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};

export const useAgents = () => useContext(AgentContext);

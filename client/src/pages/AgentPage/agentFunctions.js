const handleHoldAgent = async (agentId, status, setLoading) => {
  try {
    setLoading(true);
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
      holdAgent();
    } else {
      console.log(response);
      console.log("Failed to close job");
    }
  } catch (error) {
    console.error("Error closing job:", error);
  } finally {
    setLoading(false);
  }
};

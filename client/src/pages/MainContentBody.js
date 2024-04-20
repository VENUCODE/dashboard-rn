import React from "react";

import { Routes, Route } from "react-router-dom";
import LandingSection from "../statics/Landing/LandingSection";
// import CopyRight from "../components/CopyRight";
import JobPage from "./Jobs";
import AgentDetails from "../jani/AgentDetails";
import AgentsPage from "../statics/AgentPage";
import { AgentsProvider } from "../context/useAgents";

const MainContentBody = () => {
  return (
    <div className="content-body">
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="/property" element={<LandingSection />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route
          path="/agents"
          element={
            <AgentsProvider>
              <AgentsPage />
            </AgentsProvider>
          }
        />
        <Route
          exact
          path="/agent-detail"
          element={
            <AgentsProvider>
              <AgentDetails />
            </AgentsProvider>
          }
        />
      </Routes>
      {/* <CopyRight /> */}
    </div>
  );
};

export default MainContentBody;

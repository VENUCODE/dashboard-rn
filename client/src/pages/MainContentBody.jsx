// import React from "react";

// import { Routes, Route } from "react-router-dom";
// import LandingSection from "../statics/Landing/LandingSection";
// // import CopyRight from "../components/CopyRight";
// import AgentsPage from "./AgentPage";
// import { AgentsProvider } from "../context/useAgents";
// import JobsPage from "./JobPage";
// import { JobProvider } from "../context/useJobPosts";
// import PropertiesPage from "./PropertiesPage";

// const MainContentBody = () => {
//   return (
//     <div className="content-body">
//       <Routes>
//         <Route path="/" element={<LandingSection />} />
//         <Route path="/properties" element={<PropertiesPage />} />
//         <Route
//           path="/jobs"
//           element={
//             <JobProvider>
//               <JobsPage />
//             </JobProvider>
//           }
//         />
//         <Route
//           path="/agents"
//           element={
//             <AgentsProvider>
//               <AgentsPage />
//             </AgentsProvider>
//           }
//         />
//         {/* <Route
//           exact
//           path="/agent-detail"
//           element={
//             <AgentsProvider>
//               <AgentDetails />
//             </AgentsProvider>
//           }
//         /> */}
//       </Routes>
//       {/* <CopyRight /> */}
//     </div>
//   );
// };

// export default MainContentBody;
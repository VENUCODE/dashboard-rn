import "./assets/css/bootstrap-select.min.css";
import LoginUser from "./components/LoginUser";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JobsPage from "./pages/JobPage";
import AgentsPage from "./pages/AgentPage";
import Topbar from "./statics/Topbar";
import Header from "./statics/Header";
import LandingSection from "./statics/Landing/LandingSection";
import { JobProvider } from "./context/useJobPosts";
import { AgentsProvider } from "./context/useAgents";
import Asidebar from "./statics/Asidebar";
import PropertiesPage from "./pages/PropertiesPage";
import AgentCard from "./pages/AgentPage/AgentsCard";
const App = () => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <div id="main-wrapper" className="show">
      {isAuthenticated && (
        <>
          <Topbar />
          <Header />
          <Asidebar />
        </>
      )}
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginUser /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <LandingSection /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/jobs"
          element={
            isAuthenticated ? (
              <JobProvider>
                <JobsPage />
              </JobProvider>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/properties" element={<PropertiesPage />} />

        <Route
          path="/agents"
          element={
            isAuthenticated ? (
              <AgentsProvider>
                <AgentsPage />
              </AgentsProvider>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;

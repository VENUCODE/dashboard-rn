import Home from "./pages/Home";
import "./assets/css/bootstrap-select.min.css";
import LoginUser from "./components/LoginUser";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JobsPage from "./pages/Jobs";
import AgentsPage from "./pages/AgentPage";
import Topbar from "./statics/Topbar";
import Header from "./statics/Header";
import LandingSection from "./statics/Landing/LandingSection";
import { JobProvider } from "./context/useJobPosts";
import { AgentsProvider } from "./context/useAgents";
import Asidebar from "./statics/Asidebar";
const App = () => {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    AOS.init({
      offset: 100,
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

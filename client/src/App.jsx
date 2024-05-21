import "./assets/css/bootstrap-select.min.css";
import LoginUser from "./components/LoginUser";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import JobsPage from "./pages/JobPage";
import AgentsPage from "./pages/AgentPage";
import Topbar from "./statics/Topbar";
import LandingSection from "./statics/Landing/LandingSection";
import { JobProvider } from "./context/useJobPosts";
import { AgentsProvider } from "./context/useAgents";
import Asidebar from "./statics/Asidebar";
import PropertiesPage from "./pages/PropertiesPage";
import { PropertiesProvider } from "./context/useProperties";
import { ServiceProvider } from "./context/useServices";
import ServicePage from "./pages/ServicesPage";
import ManagerPage from "./pages/ManagerPage";
import { ManagersProvider } from "./context/useManager";
import SupplierPage from "./pages/SupplierPage";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./context/useProducts";
import { SupplierProvider } from "./context/useSupplier";
import SupplierDetails from "./pages/SupplierPage/SupplierDetails";

const App = () => {
  const { isAuthenticated } = useAuth();
  const [navToggle, setNavToggle] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <div id="main-wrapper" className={`show ${navToggle && "menu-toggle"}`}>
      {isAuthenticated && (
        <>
          <Topbar navToggle={navToggle} setNavToggle={setNavToggle} />
          <Asidebar setNavToggle={setNavToggle} />
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
          path="/properties"
          element={
            <PropertiesProvider>
              <PropertiesPage />
            </PropertiesProvider>
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
        <Route
          path="/manager"
          element={
            isAuthenticated ? (
              <ManagersProvider>
                <ManagerPage />
              </ManagersProvider>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/products"
          element={
            isAuthenticated ? (
              <ProductProvider>
                <ProductPage />
              </ProductProvider>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />

        <Route
          path="/suppliers"
          element={
            isAuthenticated ? (
              <SupplierProvider>
                <SupplierPage />
              </SupplierProvider>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/supplier/:sid"
          element={
            isAuthenticated ? (
              <SupplierProvider>
                <SupplierDetails />
              </SupplierProvider>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/services"
          element={
            isAuthenticated ? (
              <ServiceProvider>
                <ServicePage />
              </ServiceProvider>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="*"
          element={
            <div className="content-body container">
              <h1>Page not found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

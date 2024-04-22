// import PreLoader from "./components/PreLoader";
import Home from "./pages/Home";
import "./assets/css/bootstrap-select.min.css";
import LoginUser from "./components/LoginUser";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    AOS.init({
      // Global settings:
      offset: 100, // offset (in px) from the original trigger point
      duration: 1000, // duration (in ms) of the animation
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div id="main-wrapper" className="show">
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginUser /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Home />
    </div>
  );
}

export default App;

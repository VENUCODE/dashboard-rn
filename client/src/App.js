// import PreLoader from "./components/PreLoader";
import Home from "./pages/Home";
import "./assets/css/bootstrap-select.min.css";
import LoginUser from "./components/LoginUser";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div id="main-wrapper" className="show">
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />}
        />
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

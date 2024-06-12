import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user_data"));
    if (storedData) {
      const { userToken, user } = storedData;
      if (isTokenValid(userToken)) {
        setToken(userToken);
        setUserData(user);
        setIsAuthenticated(true);
      } else {
        logout();
      }
    }
    setLoading(false);
  }, []);

  const isTokenValid = (token) => {
    try {
      if (!token) {
        throw new Error("No token provided");
      }

      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    } catch (error) {
      console.error("Token validation error:", error);
      return false;
    }
  };

  const login = (newToken, newData) => {
    localStorage.setItem(
      "user_data",
      JSON.stringify({ userToken: newToken, user: newData })
    );
    setToken(newToken);
    setUserData(newData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("user_data");
    setToken(null);
    setUserData(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  const contextValue = {
    token,
    isAuthenticated,
    userData,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

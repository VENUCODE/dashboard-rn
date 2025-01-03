import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

import React from "react";
import Topbar from "../statics/Topbar";
import Asidebar from "../statics/Asidebar";
import MainContentBody from "./MainContentBody";
import { useAuth } from "../context/useAuth";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" />;
  return (
    <>
      <Topbar />;
      <Asidebar />
      <MainContentBody />
    </>
  );
};

export default Home;

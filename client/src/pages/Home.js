import React from "react";
import Topbar from "../statics/Topbar";
import Asidebar from "../statics/Asidebar";
import MainContentBody from "./MainContentBody";

const Home = () => {
  return (
    <>
      <Topbar />;
      <Asidebar />
      <MainContentBody />
    </>
  );
};

export default Home;

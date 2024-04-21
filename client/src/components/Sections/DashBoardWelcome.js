import React from "react";
import { useAuth } from "../../context/useAuth";

const DashBoardWelcome = () => {
  const { userData } = useAuth();
  return (
    <div className="row card shadow mt-0">
      <div className=" col justify-content-center  align-items-center pt-2  form-head d-md-flex mb-sm-4 mb-3 align-items-start">
        <div className="me-auto d-lg-block d-block">
          <h2 className="text-black font-w600">Dashboard</h2>
          <p className="mb-0">
            Welcome to Rightneeds Admin Panel{" "}
            <span className="text-black fw-900 fs-4 text-capitalize">
              {userData.name}
            </span>
          </p>
        </div>
        <a href="/" className="btn btn-primary rounded light">
          Refresh
        </a>
      </div>
    </div>
  );
};

export default DashBoardWelcome;

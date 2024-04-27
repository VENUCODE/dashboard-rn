import React from "react";
import { useAuth } from "../../context/useAuth";

const DashBoardWelcome = () => {
  const { userData } = useAuth();
  return (
    <div className="card rounded-0 px-2 py-0">
      <div className="row">
        <div className=" col justify-content-center form-head d-md-flex mb-sm-4 align-items-center">
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
    </div>
  );
};

export default DashBoardWelcome;

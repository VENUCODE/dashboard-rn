import { Avatar } from "@mui/material";
import React from "react";
import { BiBell } from "react-icons/bi";
import { getNameInitials } from "../helperFunctions/helper";
import { useAuth } from "../context/useAuth";
import { deepOrange } from "@mui/material/colors";
import { LuLogOut } from "react-icons/lu";
const Header = () => {
  const { userData, logout } = useAuth();
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar"></div>
            </div>

            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown header-profile">
                <a
                  className="nav-link"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <div className="header-info">
                    <span className="text-black text-capitalize">
                      {" "}
                      {userData.name}
                    </span>
                    <p className="fs-12 mb-0">Admin</p>
                  </div>
                  <Avatar
                    className="btn btn-danger border-2 border-danger object-fit-contain light"
                    sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}
                  >
                    {getNameInitials(userData?.name)}
                  </Avatar>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <span
                    onClick={() => {
                      logout();
                    }}
                    className="dropdown-item ai-icon c-pointer"
                  >
                    <LuLogOut color="red" size={20} />
                    <span className="ms-2">Logout </span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

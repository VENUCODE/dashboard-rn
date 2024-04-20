import React, { useState } from "react";
import { useAuth } from "../context/useAuth";
import { Button } from "antd";
import Chart from "./Charts/Barchart";
import MapBox from "./Map/MapBox";
import AddAgent from "./Add/AddAgent";
const Dashboard = () => {
  const { userData, logout } = useAuth();
  const [Location, setLocation] = useState({ lat: 0, long: 0 });
  return (
    <div>
      <h1>Welcome to Dashboard, {userData.name}</h1>
      <h3>Email : {userData.email}</h3>
      <Button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>

      <div>
        <AddAgent />
      </div>
    </div>
  );
};

export default Dashboard;

import Profile from "../statics/AgentPage/Agentprofile";
import "./index.css";
import { useLocation } from "react-router-dom";
export default function AgentDetails() {
  const Location = useLocation();
  console.log(Location);
  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          {/* <Profile data={{ ...Location.state }} /> */}
        </div>
      </div>
    </>
  );
}

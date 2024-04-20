import { BiLocationPlus } from "react-icons/bi";
import Button from "@mui/material/Button";
import AgentModal from "./AgentModal";
import { Link } from "react-router-dom";
export default function AgentCard({
  id = "1234",
  name = "name",
  location = "location",
  image = "https://placehold.co/100x100.png",
  ...props
}) {
  return (
    <>
      <div class="container text-center" style={{ width: "200px" }}>
        <div class="card shadow">
          <div class="card-body text-center py-1 px-1">
            <img src={image} className="rounded-3 img-fluid" alt="profile" />{" "}
            <h5 className="card-title mt-2">{name}</h5>
            <p className="card-text text-capitalize text-wrap">
              <BiLocationPlus style={{ color: "red" }} size={20} /> {location}{" "}
            </p>
            <Button variant="outlined" fullWidth color="primary">
              <Link
                to={{
                  pathname: "/agent-detail",
                  state: { id, name, location, image },
                }}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Profile
              </Link>{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

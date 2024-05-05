import { FaEnvelope, FaLocationArrow, FaMobile } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function AgentDetails({ name, email, number, location, image }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={5} sm={8}>
        <img src={image} className="img-fluid" alt="/" />
      </Grid>
      <Grid item xs={12} lg={5} sm={8}>
        <div className="ps-3 py-1">
          <h1>{name}</h1>
          <p>
            <FaEnvelope /> {email}
          </p>
          <p>
            <FaMobile /> {number}
          </p>
          <p>
            <FaLocationArrow /> {location}
          </p>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="outlined" color="primary" fullWidth>
                Hold
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" color="error" fullWidth>
                Delete
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

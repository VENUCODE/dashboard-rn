import PropertyCard from "./PropertyCard";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useProperties } from "../../context/useProperties";
const PropertiesPage = () => {
  const { properties, loading } = useProperties();
  return (
    <div className="content-body ">
      <div className="container-fluid">
        <h1>Properties Page</h1>
        <div>{loading && <LinearProgress color="secondary" />}</div>
        <Grid container>
          {properties?.map((prop) => {
            return (
              <>
                <PropertyCard data={prop} />
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default PropertiesPage;

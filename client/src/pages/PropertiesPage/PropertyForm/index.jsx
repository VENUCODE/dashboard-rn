import PropertyPictures from "./PropertyPictures";
import PropertyType from "./propertyType";
import { Grid } from "@mui/material";
import { Card } from "antd";
import { useState } from "react";
import LocationInput from "./LocationInputCustom";
import SubmitProperty from "./SubmitProperty";

const PropertyAddForm = () => {
  const [propertyState, setPropertyState] = useState({});
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className="h-100">
            <PropertyType
              propertyState={propertyState}
              setPropertyState={setPropertyState}
              setValid={setValid}
            />
          </Card>
        </Grid>

        <Grid item xs={12} md={6} className="d-flex gap-2 flex-column">
          <Card>
            <LocationInput
              propertyState={propertyState}
              setPropertyState={setPropertyState}
            />
          </Card>
          <Card>
            <PropertyPictures
              propertyState={propertyState}
              setPropertyState={setPropertyState}
            />
          </Card>
          <Card>
            <SubmitProperty
              propertyState={propertyState}
              setPropertyState={setPropertyState}
              valid={valid}
              setValid={setValid}
              loading={loading}
              setLoading={setLoading}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PropertyAddForm;

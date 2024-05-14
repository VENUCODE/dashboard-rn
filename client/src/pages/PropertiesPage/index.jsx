import { useState } from "react";
import PropertyCard from "./PropertyCard";

import { Grid, Button, Badge } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useProperties } from "../../context/useProperties";
import { endpoints, hostUri } from "../../fetch";
import { message } from "antd";
const PropertiesPage = () => {
  const {
    properties,
    loading,
    unverified,
    rejected,
    getRejected,
    getProperties,
    getUnverifiedProperties,
  } = useProperties();
  const [propertyType, setPropertyType] = useState("verified");

  const verifyProperty = async (propertyId) => {
    try {
      const response = await fetch(hostUri + endpoints.verifyProperty, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ propertyId }),
      });
      if (response.ok) {
        message.success("Property Verified");
        getProperties();
        getUnverifiedProperties();
      }
    } catch (error) {
      message.error(error.message, 1);
    }
  };
  const rejectProperty = async (propertyId) => {
    try {
      const response = await fetch(hostUri + endpoints.rejectProperty, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ propertyId }),
      });
      if (response.ok) {
        message.success("Property rejected");
        getUnverifiedProperties();
        getRejected();
      }
    } catch (error) {
      message.error(error.message, 1);
    }
  };
  const deleteProperty = async (propertyId) => {
    message.success("clicked", 2);
    try {
      return;
      const response = await fetch(hostUri + endpoints.deleteProperty, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ propertyId }),
      });
      if (response.ok) {
        message.success("proeprty deleted");
        getProperties();
      }
    } catch (error) {
      message.error(error.message, 1);
    }
  };
  const renderVerifiedButtons = (propertyId) => {
    return (
      <Grid item xs={12}>
        <Button
          onClick={() => {
            message.info(propertyId);
            deleteProperty(propertyId);
          }}
          variant="contained"
          fullWidth
          color="error"
        >
          Delete
        </Button>
      </Grid>
    );
  };
  const renderRejectedButtons = (propertyId) => {
    return (
      <Grid item xs={12}>
        <Button
          onClick={() => {
            message.info(propertyId);
            deleteProperty(propertyId);
          }}
          variant="contained"
          fullWidth
          color="error"
        >
          Delete
        </Button>
      </Grid>
    );
  };
  const renderUnverifiedButtons = (propertyId) => {
    return (
      <>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            onClick={() => deleteProperty(propertyId)}
            fullWidth
            color="error"
          >
            Delete
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            onClick={() => verifyProperty(propertyId)}
            variant="contained"
            fullWidth
            color="success"
          >
            Verify
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            onClick={() => rejectProperty(propertyId)}
            fullWidth
            color="primary"
          >
            Reject
          </Button>{" "}
        </Grid>
      </>
    );
  };

  return (
    <div className="content-body ">
      <div className="container-fluid">
        <h1>Properties Page</h1>
        <div>{loading && <LinearProgress color="secondary" />}</div>

        <Grid container>
          <Grid item xs={12} className="text-center my-2">
            <Badge
              showZero
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              badgeContent={properties.length}
              color="error"
            >
              <Button
                size="small"
                variant={propertyType === "verified" ? "contained" : "outlined"}
                className="mx-2 rounded-4 "
                onClick={() => setPropertyType("verified")}
              >
                Verified
              </Button>
              <Badge showZero badgeContent={unverified.length} color="error">
                <Button
                  size="small"
                  variant={
                    propertyType === "notverified" ? "contained" : "outlined"
                  }
                  className="mx-2 rounded-4 "
                  onClick={() => setPropertyType("notverified")}
                  label="Unverified"
                >
                  Not verified
                </Button>
              </Badge>
            </Badge>
            <Badge showZero badgeContent={rejected.length} color="error">
              <Button
                size="small"
                variant={propertyType === "rejected" ? "contained" : "outlined"}
                className="mx-2 rounded-4 "
                onClick={() => setPropertyType("rejected")}
              >
                Rejected
              </Button>
            </Badge>
          </Grid>
          {(propertyType === "verified"
            ? properties
            : propertyType === "notverified"
            ? unverified
            : rejected
          ).map((prop) => {
            return (
              <>
                <PropertyCard
                  data={prop}
                  buttons={
                    propertyType === "verified"
                      ? renderVerifiedButtons(prop._id)
                      : propertyType === "notverified"
                      ? renderUnverifiedButtons(prop._id)
                      : renderRejectedButtons(prop._id)
                  }
                />
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default PropertiesPage;

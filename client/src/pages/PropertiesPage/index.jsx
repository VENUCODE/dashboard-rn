import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";

import { Grid, Button, Badge } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useProperties } from "../../context/useProperties";
import { endpoints, hostUri } from "../../fetch";
import { message, Card } from "antd";
import PropertyAddForm from "./PropertyForm";
import PropertyFilter from "./PropertyFilter";
import PropertyFilterMap from "./PropertyFilterMap";
import CardSkeleton from "../../components/CardSkeleton";
import { FaDotCircle } from "react-icons/fa";
import { FiChevronsDown } from "react-icons/fi";
import PaginationComponent from "./PaginationComponent";
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
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [current, setCurrent] = useState([]);

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
    try {
      message.info(propertyId, 2);
      setDeleteLoading(true);
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
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error(error.message, 1);
    } finally {
      setDeleteLoading(false);
    }
  };
  const renderVerifiedButtons = (propertyId) => {
    return (
      <Grid item xs={12}>
        <Button
          onClick={() => {
            deleteProperty(propertyId);
          }}
          disabled={deleteLoading}
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
      <div className="container-fluid ">
        <div className=" bg-white  shadow-sm d-flex justify-content-between mb-2 p-2 align-items-center">
          <div>
            <h2 className="text-black font-w600">Properties Page</h2>
          </div>

          <div className="d-flex">
            <Button
              onClick={() => {
                setShowAddForm((p) => !p);
              }}
            >
              {showAddForm ? "Close Form" : "Add Property"}
            </Button>

            <div>{loading && <LinearProgress color="secondary" />}</div>
          </div>
        </div>
        {loading && <LinearProgress color="secondary" />}
        {showAddForm && <PropertyAddForm />}
        <Grid container>
          <Grid item xs={12}>
            <PropertyFilter
              propertyType={propertyType}
              current={current}
              setCurrent={setCurrent}
            />
          </Grid>

          <Grid item xs={12} className="text-center my-1 p-0">
            <Card className="py-0 m-0">
              <Badge
                showZero
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                badgeContent={
                  propertyType === "verified"
                    ? current.length
                    : properties.length
                }
                color="error"
              >
                <Button
                  size="small"
                  variant={
                    propertyType === "verified" ? "contained" : "outlined"
                  }
                  className="mx-2 rounded-4 "
                  onClick={() => setPropertyType("verified")}
                >
                  Verified
                </Button>
                <Badge
                  showZero
                  badgeContent={
                    propertyType === "notverified"
                      ? current.length
                      : unverified.length
                  }
                  color="error"
                >
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
              <Badge
                showZero
                badgeContent={
                  propertyType === "rejected" ? current.length : rejected.length
                }
                color="error"
              >
                <Button
                  size="small"
                  variant={
                    propertyType === "rejected" ? "contained" : "outlined"
                  }
                  className="mx-2 rounded-4 "
                  onClick={() => setPropertyType("rejected")}
                >
                  Rejected
                </Button>
              </Badge>
            </Card>
          </Grid>
          <Grid item xs={12}>
            {loading && (
              <Grid container spacing={1}>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </Grid>
            )}
          </Grid>
          <div className="mb-5 p-0 container-fluid">
            {!loading && (
              <PaginationComponent items={current} itemsPerPage={6}>
                {(current) => (
                  <>
                    {!loading &&
                      current.map((prop) => (
                        <PropertyCard
                          key={prop._id}
                          data={prop}
                          buttons={
                            propertyType === "verified"
                              ? renderVerifiedButtons(prop._id)
                              : propertyType === "notverified"
                              ? renderUnverifiedButtons(prop._id)
                              : renderRejectedButtons(prop._id)
                          }
                        />
                      ))}
                  </>
                )}
              </PaginationComponent>
            )}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default PropertiesPage;

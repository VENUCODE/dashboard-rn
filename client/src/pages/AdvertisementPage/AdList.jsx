import React, { useEffect, useState } from "react";
import { Grid, Card, Chip, IconButton, Link, CardContent } from "@mui/material";
import { Delete, TimeToLeave } from "@mui/icons-material";
import { useAd } from "../../context/useAd";
import { endpoints, hostUri } from "../../fetch";
import { FiExternalLink, FiLayout } from "react-icons/fi";
import Time from "../../components/TimeAgo";
import AdFilter from "./AdFilter";
import { MdCategory, MdOutlineAttachFile } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";
import CardSkeleton from "../../components/CardSkeleton";
import PaginationComponent from "../PropertiesPage/PaginationComponent";
const AdList = () => {
  const { ads, loading, fetchAds } = useAd();
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    if (ads) {
      setCurrent(ads);
    }
  }, [ads]);
  const deleteAd = async (adId) => {
    try {
      const response = await fetch(hostUri + endpoints.deleteAd, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ adId }),
      });
      const data = await response.json();
      if (response.ok) {
        fetchAds();
        message.success(data.message, 1);
      } else {
        message.error(data.message, 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AdFilter setCurrent={setCurrent} />
      <div className="container-fluid ">
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
        <div className="mb-5 p-0 container-fluid">
          {
            <PaginationComponent items={current} itemsPerPage={8}>
              {(current) => (
                <>
                  <Grid container spacing={2} className="mb-4 p-0">
                    {!loading &&
                      current.map((ad, index) => (
                        <Grid
                          item
                          key={index}
                          xs={12}
                          sm={6}
                          md={4}
                          lg={3}
                          className=""
                        >
                          <div className="card w-100 h-100">
                            <div className="w-100 ">
                              <div className="w-100">
                                <h3 className="d-flex justify-content-between p-1 text-capitalize">
                                  {ad.adTitle}
                                  <IconButton
                                    className="bg-danger-subtle"
                                    aria-label="delete"
                                    onClick={() => deleteAd(ad._id)}
                                  >
                                    <Delete className="text-danger" />
                                  </IconButton>
                                </h3>
                                <Link
                                  href={
                                    ad.adRedirectLink.startsWith("http")
                                      ? ad.adRedirectLink
                                      : "http://" + ad.adRedirectLink
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {ad.adRedirectLink}
                                  <FiExternalLink />
                                </Link>
                                <span className="text-muted ms-2">
                                  <Time date={ad.timestamp} />
                                </span>
                                <img
                                  height={200}
                                  width={"100%"}
                                  style={{ objectFit: "cover" }}
                                  src={hostUri + "/" + ad.images[0]}
                                  alt="image"
                                />
                              </div>
                              <div className="p-2  justify-content-around align-items-center ">
                                <div className="d-flex justify-content-between gap-1 mb-1">
                                  <Chip
                                    size="small"
                                    className="w-100"
                                    icon={<MdCategory size={13} />}
                                    label={ad.adCategory}
                                  />
                                  <Chip
                                    size="small"
                                    className="w-100"
                                    icon={<MdOutlineAttachFile size={13} />}
                                    label={ad.adOrigins}
                                  />
                                </div>
                                <div className="d-flex justify-content-between">
                                  <Chip
                                    size="small"
                                    className="w-100"
                                    icon={<FiLayout size={13} />}
                                    label={ad.adLocation}
                                  />
                                  <Chip
                                    size="small"
                                    className="w-100"
                                    icon={<TbStatusChange size={13} />}
                                    label={ad.adStatus}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </Grid>
                      ))}
                  </Grid>
                </>
              )}
            </PaginationComponent>
          }
        </div>
      </div>
    </>
  );
};

export default AdList;

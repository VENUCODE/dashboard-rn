import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  IconButton,
  CardMedia,
  CardActionArea,
  Link,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useAd } from "../../context/useAd";
import { endpoints, hostUri } from "../../fetch";
import { FiExternalLink } from "react-icons/fi";

const AdList = () => {
  const { ads, fetchAds } = useAd();
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
    <Grid container spacing={2}>
      {ads.map((ad, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card className="px-2">
            <div className="w-100 ">
              <div className="w-100">
                <h3>{ad.adTitle}</h3>
                <Link
                  href={
                    ad.adRedirectLink.startsWith("http")
                      ? ad.adRedirectLink
                      : "http://" + ad.adRedirectLink
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink />
                  {ad.adRedirectLink}
                </Link>
                <img
                  height={200}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                  src={hostUri + "/" + ad.images[0]}
                  alt="image"
                />
              </div>
              <div className="p-2  d-flex justify-content-center align-items-center">
                <Chip size="small" label={ad.adCategory} />
                <Chip size="small" label={ad.adOrigins} />
                <Chip size="small" label={ad.adLocation} />
                <Chip size="small" label={ad.adStatus} />
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteAd(ad._id)}
                >
                  <Delete />
                </IconButton>
              </div>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AdList;

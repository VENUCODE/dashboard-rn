import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { hostUri } from "../../fetch";

const ResponseCard = ({ responseData }) => {
  return (
    <Grid container spacing={2}>
      {responseData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card data-aos="zoom-in">
            {item.images.length > 0 && (
              <CardMedia
                component="img"
                height="140"
                image={hostUri + "/" + item.images[0]}
                // Assuming images is an array of image URLs
                alt={item.name} // Assuming each object has a 'name' property
              />
            )}

            <CardContent>
              {/* Render dynamic data by mapping key-value pairs */}
              {Object.entries(item).map(([key, value], index) => (
                <Typography
                  key={index}
                  variant="body2"
                  color="textSecondary"
                  component="div"
                >
                  {key}: {value}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResponseCard;

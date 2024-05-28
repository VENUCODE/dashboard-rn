import React from "react";
import { Card, CardContent, Grid, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card>
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <Skeleton height={10} width="80%" animation="wave" />
        <Skeleton height={10} width="40%" animation="wave" />
        <Skeleton variant="rectangular" height={190} animation="wave" />
        <CardContent>
          <Skeleton height={10} width="80%" animation="wave" />
          <Skeleton height={10} width="60%" animation="wave" />
          <Skeleton height={10} width="40%" animation="wave" />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardSkeleton;

import React from "react";
import { Grid, Typography } from "@mui/material";

const ListGridDate = ({ date }: { date: string }) => {
  return (
    <Grid
      size={{ xs: 12, md: 12 }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        justifyContent: "flex-start",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontWeight: "600", fontSize: "0.875rem" }}
      >
        Date:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "normal",
          fontSize: "0.875rem",
          alignItems: "center",
          display: "flex",
        }}
      >
        {date}
      </Typography>
    </Grid>
  );
};

export default ListGridDate;

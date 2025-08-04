import React from "react";
import { Grid, Button } from "@mui/material";

const ListGridButtons = () => {
  return (
    <Grid
      size={{ xs: 12, md: 12 }}
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        variant="outlined"
        size="small"
        sx={{
          textTransform: "none",
          boxShadow: "none",
          fontSize: "0.875rem",
          minWidth: "100px",
        }}
      >
        Reschedule
      </Button>
      <Button
        variant="outlined"
        size="small"
        color="error"
        sx={{
          textTransform: "none",
          boxShadow: "none",
          fontSize: "0.875rem",
          minWidth: "100px",
        }}
      >
        Cancel
      </Button>
    </Grid>
  );
};

export default ListGridButtons;

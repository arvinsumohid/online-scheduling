"use client";

import React from "react";
import { Grid } from "@mui/material";
import GenericButton from "@/components/GenericButton";

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
      <GenericButton
        label="Reschedule"
        onClick={() => console.log("Reschedule")}
        sx={{
          minWidth: "100px",
        }}
      />
      <GenericButton
        label="Cancel"
        onClick={() => console.log("Cancel")}
        sx={{
          minWidth: "100px",
        }}
      />
    </Grid>
  );
};

export default ListGridButtons;

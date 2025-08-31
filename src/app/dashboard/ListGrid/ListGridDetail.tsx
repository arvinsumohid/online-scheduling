import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const ListGridDetail = ({
  title,
  location,
  doctor,
}: {
  title: string;
  location: string;
  doctor: string;
}) => {
  return (
    <Grid
      size={{ xs: 12, md: 12 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "flex-start",
        mb: 2,
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontWeight: "normal", fontSize: "1.125rem" }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PlaceOutlinedIcon fontSize="small" />
        <Typography
          variant="body2"
          sx={{ fontWeight: "normal", fontSize: "0.875rem" }}
        >
          {location}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PersonOutlineOutlinedIcon fontSize="small" />
        <Typography
          variant="body2"
          sx={{ fontWeight: "normal", fontSize: "0.875rem" }}
        >
          {doctor}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ListGridDetail;

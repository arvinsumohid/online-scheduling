import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DoctorCard from "./DoctorCard";

const SelectDoctorCard = ({
  name,
  title,
  location,
  onSelect,
}: {
  name: string;
  title: string;
  location: string;
  onSelect: () => void;
}) => {
  return (
    <Grid
      container
      spacing={1}
      size={{ xs: 12, md: 4 }}
      sx={{ border: "1px solid #E5E7EB", borderRadius: "0.2rem", p: 2 }}
    >
      <DoctorCard name={name} title={title} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PlaceOutlinedIcon fontSize="small" />
        <Typography
          variant="body2"
          sx={{ fontWeight: "normal", fontSize: "0.875rem" }}
        >
          {location}
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "none",
            boxShadow: "none",
            fontSize: "0.875rem",
            width: "100%",
          }}
          onClick={onSelect}
        >
          Select
        </Button>
      </Box>
    </Grid>
  );
};

export default SelectDoctorCard;

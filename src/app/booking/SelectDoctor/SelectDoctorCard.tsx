import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import DoctorCard from "./DoctorCard";
import GenericButton from "@/components/GenericButton";

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
        <GenericButton
          label="Select"
          onClick={onSelect}
          sx={{
            width: "100%",
          }}
        />
      </Box>
    </Grid>
  );
};

export default SelectDoctorCard;

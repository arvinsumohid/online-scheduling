import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const DoctorCard = ({ name, title }: { name: string; title: string }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: 1, boxShadow: "none" }}
    >
      <Avatar sx={{ bgcolor: "primary.main", width: "4rem", height: "4rem" }}>
        T
      </Avatar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: "600", fontSize: "0.875rem" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: "normal", fontSize: "0.875rem", color: "#6B7280" }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default DoctorCard;

import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";

const StatCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <Card sx={{ boxShadow: "none", bgcolor: "#F9FAFB" }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            bgcolor: "rgba(37, 99, 235, 0.1)",
            p: 2,
            borderRadius: "50%",
            color: "#2563EB",
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ fontSize: "0.875rem", color: "#4B5563" }}
          >
            {label}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: "1.5rem" }}>
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;

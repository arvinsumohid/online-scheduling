import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const ListGridStatus = ({
  status,
}: {
  status: "Confirmed" | "Pending" | "Cancel";
}) => {
  let color: "success" | "warning" | "error" = "success";
  let bgColor: string = "rgba(16, 185, 129, 0.1)";
  let icon = (
    <CheckCircleOutlinedIcon color={color} sx={{ fontSize: "1.5rem" }} />
  );

  if (status === "Pending") {
    color = "warning";
    bgColor = "rgba(255, 165, 0, 0.1)";
    icon = <PendingOutlinedIcon color={color} sx={{ fontSize: "1.5rem" }} />;
  } else if (status === "Cancel") {
    color = "error";
    bgColor = "rgba(255, 0, 0, 0.1)";
    icon = <CancelOutlinedIcon color={color} sx={{ fontSize: "1.5rem" }} />;
  }

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
        Status:
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          backgroundColor: bgColor,
          py: 0.6,
          px: 1,
          borderRadius: "0.2rem",
          color: color,
        }}
      >
        {icon}
        <Typography
          variant="body2"
          color={color}
          sx={{ fontWeight: "normal", fontSize: "0.875rem" }}
        >
          {status}
        </Typography>
      </Box>
    </Grid>
  );
};

export default ListGridStatus;

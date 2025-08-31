import React from "react";
import { Typography } from "@mui/material";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      variant="h2"
      sx={{ fontWeight: "bold", fontSize: "2rem", mb: 6 }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;

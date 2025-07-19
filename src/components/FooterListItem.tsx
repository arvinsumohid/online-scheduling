import React from "react";
import { Typography } from "@mui/material";

const FooterListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="mb-1">
      <Typography
        variant="body1"
        sx={{ fontWeight: "normal", fontSize: "1rem", color: "#9CA3AF" }}
      >
        {children}
      </Typography>
    </li>
  );
};

export default FooterListItem;

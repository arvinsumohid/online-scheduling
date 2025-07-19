import React from "react";
import { Typography } from "@mui/material";
import { TypographyVariant } from "@mui/material";

const Title = ({
  variant = "h3",
  size = "medium",
  children,
}: {
  variant: TypographyVariant;
  size: "small" | "medium" | "large" | string;
  children: React.ReactNode;
}) => {
  let fontSize = "1.5rem";
  if (size === "small") {
    fontSize = "1rem";
  } else if (size === "large") {
    fontSize = "2rem";
  } else {
    fontSize = size;
  }

  return (
    <Typography variant={variant} sx={{ fontSize: fontSize, color: "#1F2937" }}>
      {children}
    </Typography>
  );
};

export default Title;

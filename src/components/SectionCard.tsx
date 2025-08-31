import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { grey } from "@mui/material/colors";

const SectionCard = ({
  image,
  title,
  description,
  isShadow = false,
  isCenter = false,
}: {
  image: string;
  title: string;
  description: string;
  isShadow?: boolean;
  isCenter?: boolean;
}) => {
  return (
    <Box
      className={`flex flex-col bg-white justify-center ${isCenter ? "items-center" : ""} ${isShadow ? "shadow-lg" : ""} rounded-xl p-6`}
    >
      <Image src={image} alt="Tooth" width={40} height={40} className="mb-2" />
      <Typography
        variant="h3"
        sx={{ fontWeight: "600", fontSize: "1.25rem", mb: 1 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color={grey[600]}
        sx={{ fontWeight: "normal", fontSize: "0.875rem", mb: 1 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default SectionCard;

import React from "react";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

const SectionContainer = ({
  sx,
  children,
}: {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}) => {
  return (
    <Box sx={{ py: 8, ...sx }}>
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SectionContainer;

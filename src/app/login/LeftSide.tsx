import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const LeftSide = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(#1e40af, rgba(30, 64, 175, 0.7)), url('/images/login-bg.jpg') center/cover no-repeat`,
        color: "white",
        flexDirection: "column",
        p: 6,
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Image
          src="/images/logo-white.svg"
          alt="Logo"
          width={200}
          height={200}
          style={{ maxWidth: "100%", height: "auto", width: "auto" }}
        />
      </Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome to Platform
      </Typography>
      <Typography variant="h6" sx={{ opacity: 0.8 }}>
        Your gateway to seamless digital experiences
      </Typography>
    </Box>
  );
};

export default LeftSide;

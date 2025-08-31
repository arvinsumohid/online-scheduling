import React from "react";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialLogin = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 2 }}>
      <IconButton size="large" sx={{ border: "1px solid #e5e7eb" }}>
        <GoogleIcon />
      </IconButton>
      <IconButton size="large" sx={{ border: "1px solid #e5e7eb" }}>
        <AppleIcon />
      </IconButton>
      <IconButton size="large" sx={{ border: "1px solid #e5e7eb" }}>
        <GitHubIcon />
      </IconButton>
    </Box>
  );
};

export default SocialLogin;

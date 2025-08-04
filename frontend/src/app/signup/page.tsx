"use client";

import { Box } from "@mui/material";
import LeftSide from "../login/LeftSide";
import RightSide from "./RightSide";

const SignupPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", background: "#f4f6f8" }}>
      <LeftSide />
      <RightSide />
    </Box>
  );    
};

export default SignupPage;

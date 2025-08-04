import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../SectionTitle";

const HeroSection = () => {
  return (
    <Box className="hero flex items-center justify-center">
      <Box className="w-9/12">
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: "4rem", mb: 2 }}
        >
          Your Smile, Our Priority
        </Typography>
        <SectionTitle>
          Professional dental care with a gentle touch
        </SectionTitle>
        <Box sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none", fontSize: "1rem" }}
          >
            Book Your Appointment
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              textTransform: "none",
              fontSize: "1rem",
            }}
            size="large"
          >
            View Our Services
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;

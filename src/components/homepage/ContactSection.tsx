"use client";

import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PhoneIcon from "@mui/icons-material/Phone";
import SectionContainer from "../SectionContainer";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

const ContactSection = () => {
  return (
    <SectionContainer>
      <Grid
        container
        className="w-full"
        spacing={6}
        sx={{ mt: 4, alignItems: "center" }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold", fontSize: "2rem", mb: 2 }}
          >
            Contact Information
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeFilledIcon color="primary" sx={{ mr: 2 }} />
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Office Hours
              </Typography>
            </Box>
            <Box sx={{ pl: 6 }}>
              <Typography>Monday - Friday: 9:00 AM - 6:00 PM</Typography>
              <Typography>Saturday: 9:00 AM - 2:00 PM</Typography>
              <Typography>Sunday: Closed</Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon color="primary" sx={{ mr: 2 }} />
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Phone
              </Typography>
            </Box>
            <Typography sx={{ pl: 6 }}>(555) 123-4567</Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon color="primary" sx={{ mr: 2 }} />
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: "bold", fontSize: "1rem" }}
              >
                Location
              </Typography>
            </Box>
            <Typography sx={{ pl: 6, mb: 3 }}>
              123 Dental Street, New York, NY 10001
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Schedule Now
            </Button>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: "400px",
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#e0e0e0",
              }}
            >
              <Map />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default ContactSection;

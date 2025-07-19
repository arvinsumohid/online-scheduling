import React from "react";
import { Box, Grid, Divider, Typography } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterListItem from "./FooterListItem";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1F2937",
        color: "white",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Box component="div" className="w-10/12 mx-auto">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Image
              src="/images/logo-white.svg"
              alt="Logo"
              width={150}
              height={150}
              className="mb-2"
              style={{ maxWidth: "100%", height: "auto", width: "auto" }}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: "normal", fontSize: "1rem", color: "#9CA3AF" }}
            >
              Providing quality dental care with a gentle touch for over 20
              years.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1rem", mb: 2 }}
            >
              Quick Links
            </Typography>
            <ul>
              <FooterListItem>Home</FooterListItem>
              <FooterListItem>About Us</FooterListItem>
              <FooterListItem>Services</FooterListItem>
              <FooterListItem>Blog</FooterListItem>
              <FooterListItem>Contact Us</FooterListItem>
            </ul>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1rem", mb: 2 }}
            >
              Services
            </Typography>
            <ul>
              <FooterListItem>General Dentistry</FooterListItem>
              <FooterListItem>Cosmetic Dentistry</FooterListItem>
              <FooterListItem>Orthodontics</FooterListItem>
              <FooterListItem>Emergency Care</FooterListItem>
            </ul>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "1rem", mb: 2 }}
            >
              Connect With Us
            </Typography>
            <Box sx={{ display: "flex", mt: 2, gap: 2 }}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ borderTop: "1px solid #9CA3AF", my: 2 }} />
        <Typography sx={{ textAlign: "center", mt: 4, color: "#9CA3AF" }}>
          Copyright © 2025 Dental Clinic. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;

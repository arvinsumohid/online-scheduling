import { Grid, Typography } from "@mui/material";
import React from "react";
import caseCross from "@/assets/images/case-cross.svg";
import tooth from "@/assets/images/tooth.svg";
import smiley from "@/assets/images/smiley.svg";
import shieldCross from "@/assets/images/shield-cross.svg";
import doctor from "@/assets/images/doctor.svg";
import blockCross from "@/assets/images/block-cross.svg";
import SectionCard from "../SectionCard";
import SectionContainer from "../SectionContainer";

const ServiceSection = () => {
  return (
    <SectionContainer sx={{ backgroundColor: "#F9FAFB" }}>
      <Typography
        variant="h2"
        className="section__title"
        sx={{ fontWeight: "bold", fontSize: "2rem", mb: 6 }}
      >
        Our Dental Services
      </Typography>
      <Grid container className="w-full" spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <SectionCard
            image={caseCross}
            title="Dental Cleaning"
            description="Professional dental care with a gentle touch"
            isShadow={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SectionCard
            image={tooth}
            title="Dental Cleaning"
            description="Professional dental care with a gentle touch"
            isShadow={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SectionCard
            image={doctor}
            title="Dental Cleaning"
            description="Professional dental care with a gentle touch"
            isShadow={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SectionCard
            image={blockCross}
            title="Dental Cleaning"
            description="Professional dental care with a gentle touch"
            isShadow={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SectionCard
            image={shieldCross}
            title="Dental Cleaning"
            description="Professional dental care with a gentle touch"
            isShadow={true}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SectionCard
            image={smiley}
            title="Dental Cleaning"
            description="Professional dental care with a gentle touch"
            isShadow={true}
          />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default ServiceSection;

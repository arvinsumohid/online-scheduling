import React from "react";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import { Grid } from "@mui/material";
import TeamCard from "../TeamCard";

const OurTeam = () => {
  return (
    <SectionContainer sx={{ backgroundColor: "#F9FAFB" }}>
      <SectionTitle>Meet Our Specialists</SectionTitle>
      <Grid container className="w-full" spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <TeamCard
            image={"images/doctor.png"}
            name={"Dr. John Doe"}
            jobDescription={"Dental Surgeon"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TeamCard
            image={"images/doctor.png"}
            name={"Dr. John Doe"}
            jobDescription={"Dental Surgeon"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TeamCard
            image={"images/doctor.png"}
            name={"Dr. John Doe"}
            jobDescription={"Dental Surgeon"}
          />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default OurTeam;

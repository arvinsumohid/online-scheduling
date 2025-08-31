import React from "react";
import { Box, Grid } from "@mui/material";
import SectionTitle from "../SectionTitle";
import SectionCard from "../SectionCard";
import smiley from "@/assets/images/smiley.svg";
import ribbon from "@/assets/images/ribbon.svg";
import hospital from "@/assets/images/hospital.svg";

const FeatureSection = () => {
  return (
    <Box sx={{ py: 8 }}>
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
        <SectionTitle>Why Choose Us</SectionTitle>
        <Grid container className="w-full" spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <SectionCard
              image={ribbon}
              title="20+ Years Experience"
              description="Trusted dental care for over two decades"
              isCenter={true}
              isShadow={false}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <SectionCard
              image={hospital}
              title="State-of-the-art Technology"
              description="Latest equipment for precise treatments"
              isCenter={true}
              isShadow={false}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <SectionCard
              image={smiley}
              title="Comfortable Environment"
              description="Relaxing atmosphere for your comfort"
              isCenter={true}
              isShadow={false}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FeatureSection;

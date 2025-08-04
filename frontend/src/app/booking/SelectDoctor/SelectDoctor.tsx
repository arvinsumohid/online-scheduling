import React from "react";
import { Box, Grid } from "@mui/material";
import SelectDoctorCard from "./SelectDoctorCard";
import { Dayjs } from "dayjs";

const SelectDoctor = ({
  activeStep,
  setActiveStep,
  handleBooking,
}: {
  activeStep: number;
  setActiveStep: (step: number) => void;
  handleBooking: (
    field: string,
    value: string | Dayjs | boolean | null,
  ) => void;
}) => {
  const handleSelectDoctor = () => {
    setActiveStep(activeStep + 1);
  };
  return (
    <Box>
      <Grid container size={{ xs: 12, md: 12 }} spacing={2}>
        <SelectDoctorCard
          name="Dr. John Doe"
          title="Dental Surgeon"
          location="Medical Center, Room 101"
          onSelect={() => {
            handleBooking("doctor", "Dr. John Doe");
            handleSelectDoctor();
          }}
        />
        <SelectDoctorCard
          name="Dr. John Doe"
          title="Dental Surgeon"
          location="Medical Center, Room 101"
          onSelect={() => {
            handleBooking("doctor", "Dr. John Doe");
            handleSelectDoctor();
          }}
        />
        <SelectDoctorCard
          name="Dr. John Doe"
          title="Dental Surgeon"
          location="Medical Center, Room 101"
          onSelect={() => {
            handleBooking("doctor", "Dr. John Doe");
            handleSelectDoctor();
          }}
        />
        <SelectDoctorCard
          name="Dr. John Doe"
          title="Dental Surgeon"
          location="Medical Center, Room 101"
          onSelect={() => {
            handleBooking("doctor", "Dr. John Doe");
            handleSelectDoctor();
          }}
        />
      </Grid>
    </Box>
  );
};

export default SelectDoctor;

import React from "react";
import { Box } from "@mui/material";
import GenericButton from "@/components/GenericButton";

const StepButton = ({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: (step: number) => void;
}) => {
  return (
    activeStep !== 0 && (
      <Box
        className="mb-2 xs:w-full md:w-8/12 mx-auto"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <GenericButton
          label="Back"
          onClick={() => setActiveStep(activeStep - 1)}
        />
        <GenericButton
          label={activeStep === 3 ? "Confirm Appointment" : "Next"}
          onClick={() => setActiveStep(activeStep + 1)}
        />
      </Box>
    )
  );
};

export default StepButton;

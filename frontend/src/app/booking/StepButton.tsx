import React from "react";
import { Box, Button } from "@mui/material";

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
        <Button
          variant="outlined"
          size="small"
          sx={{
            textTransform: "none",
            boxShadow: "none",
            fontSize: "0.875rem",
          }}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </Button>
        {activeStep !== 3 && (
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              boxShadow: "none",
              fontSize: "0.875rem",
            }}
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Next
          </Button>
        )}
        {activeStep === 3 && (
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              boxShadow: "none",
              fontSize: "0.875rem",
            }}
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Confirm Appointment
          </Button>
        )}
      </Box>
    )
  );
};

export default StepButton;

"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import Title from "@/components/Title";
import useBooking from "@/hooks/useBooking";
import StepComponent from "./StepComponent";
import StepButton from "./StepButton";
import LinearProgress from "@mui/material/LinearProgress";
const LoadingSpinner = () => <LinearProgress />;
const steps = [
  {
    label: "Select Doctor",
    component: dynamic(() => import("./SelectDoctor/SelectDoctor"), {
      ssr: false,
      loading: LoadingSpinner,
    }),
  },
  {
    label: "Select Date",
    component: dynamic(() => import("./SelectDate/SelectDate"), {
      ssr: false,
      loading: LoadingSpinner,
    }),
  },
  {
    label: "Appointment Details",
    component: dynamic(() => import("./AppointmentDetails/AppointmentDetails"), {
      ssr: false,
      loading: LoadingSpinner,
    }),
  },
  {
    label: "Summary",
    component: dynamic(() => import("./Summary"), {
      ssr: true,
      loading: LoadingSpinner,
    }),
  },
];


const BookingForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { booking, handleBooking } = useBooking();
  const StepComponentToRender = steps[activeStep].component;

  return (
    <Box>
      <Box className="mb-2">
        <Title variant="h3" size="1.25rem">
          Booking
        </Title>
      </Box>
      <Box className="mb-4 xs:w-full md:w-8/12 mx-auto">
        <StepComponent activeStep={activeStep} />
        <StepComponentToRender
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          booking={booking}
          handleBooking={handleBooking}
        />
      </Box>
      <StepButton activeStep={activeStep} setActiveStep={setActiveStep} />
    </Box>
  );
};

export default BookingForm;

"use client";
import React, { useReducer, useState } from "react";
import { Box } from "@mui/material";
import Title from "@/components/Title";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SelectDoctor from "./SelectDoctor/SelectDoctor";
import SelectDate from "./SelectDate/SelectDate";
import AppointmentDetails from "./AppointmentDetails/AppointmentDetails";
import StepButton from "./StepButton";
import Summary from "./Summary";
import { Dayjs } from "dayjs";
import { initialBookingState, bookingReducer } from "@/store/bookingReducer";

const steps = [
  "Select Doctor",
  "Choose Date & Time",
  "Appointment Details",
  "Confirm Booking",
];

const BookingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [booking, dispatch] = useReducer(bookingReducer, initialBookingState);

  const handleBooking = (
    field: string,
    value: string | Dayjs | boolean | null,
  ) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  return (
    <Box>
      <Box className="mb-2">
        <Title variant="h3" size="1.25rem">
          Booking
        </Title>
      </Box>
      <Box className="mb-4 xs:w-full md:w-8/12 mx-auto">
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 && (
          <SelectDoctor
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            handleBooking={handleBooking}
          />
        )}
        {activeStep === 1 && (
          <SelectDate booking={booking} handleBooking={handleBooking} />
        )}
        {activeStep === 2 && (
          <AppointmentDetails booking={booking} handleBooking={handleBooking} />
        )}
        {activeStep === 3 && <Summary booking={booking} />}
      </Box>
      <StepButton activeStep={activeStep} setActiveStep={setActiveStep} />
    </Box>
  );
};

export default BookingPage;

"use client";

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'
import Title from '@/components/Title'
import useBooking from '@/hooks/useBooking'
import StepComponent from './StepComponent'
import StepButton from './StepButton'
import LinearProgress from '@mui/material/LinearProgress';
const LoadingSpinner = () => <LinearProgress />;
const AppointmentDetails = dynamic(() => import("./AppointmentDetails/AppointmentDetails"), { ssr: false, loading: LoadingSpinner });
const SelectDoctor = dynamic(() => import("./SelectDoctor/SelectDoctor"), { ssr: false, loading: LoadingSpinner });
const SelectDate = dynamic(() => import("./SelectDate/SelectDate"), { ssr: false, loading: LoadingSpinner });
const Summary = dynamic(() => import("./Summary"), { ssr: true, loading: LoadingSpinner });

const BookingForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { booking, handleBooking } = useBooking();
  
    return (
      <Box>
        <Box className="mb-2">
          <Title variant="h3" size="1.25rem">
            Booking
          </Title>
        </Box>
        <Box className="mb-4 xs:w-full md:w-8/12 mx-auto">
          <StepComponent activeStep={activeStep} />
          {activeStep === 0 && (
            <SelectDoctor
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                handleBooking={handleBooking}
            />
          )}
          {activeStep === 1 && (
            <SelectDate
                booking={booking}
                handleBooking={handleBooking}
            />
          )}
          {activeStep === 2 && (
            <AppointmentDetails
                booking={booking}
                handleBooking={handleBooking}
            />
          )}
          {activeStep === 3 && (
            <Summary booking={booking} />
          )}
        </Box>
        <StepButton activeStep={activeStep} setActiveStep={setActiveStep} />
      </Box>
    );
}

export default BookingForm
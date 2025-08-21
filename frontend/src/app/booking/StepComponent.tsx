'use client';
import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { STEPS } from '@/utils/constants';

const StepComponent = ({ activeStep }: { activeStep: number }) => {
  return (
    <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {STEPS.map((label) => (
        <Step key={label}>
            <StepLabel>{label}</StepLabel>
        </Step>
        ))}
  </Stepper>
  )
}

export default StepComponent
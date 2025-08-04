import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MuiTelInput } from "mui-tel-input";
import { Booking } from "@/interfaces/booking.interface";

const AppointmentDetails = ({
  booking,
  handleBooking,
}: {
  booking: Booking;
  handleBooking: (
    field: string,
    value: string | Dayjs | boolean | null,
  ) => void;
}) => {
  return (
    <Box>
      <Box>
        <Grid
          container
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: "0.2rem",
            p: 2,
          }}
          size={{ xs: 12, md: 12 }}
          spacing={2}
          gap={2}
        >
          <Grid container size={{ xs: 12, md: 6 }}>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <Typography variant="h6" gutterBottom>
                Patient Information
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <TextField
                label="Full Name"
                type="text"
                size="small"
                fullWidth
                required
                value={booking.patient.name}
                onChange={(name) =>
                  handleBooking("patient.name", name.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "100%" }}
                  onChange={(date) => handleBooking("patient.birthdate", date)}
                  value={booking.patient.birthdate}
                  slotProps={{ textField: { size: "small" } }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <MuiTelInput
                fullWidth
                defaultCountry="PH"
                value={booking.patient.phone}
                size="small"
                onChange={(phone) => handleBooking("patient.phone", phone)}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                size="small"
                fullWidth
                required
                value={booking.patient.email}
                onChange={(email) =>
                  handleBooking("patient.email", email.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <TextField
                label="Address"
                type="text"
                size="small"
                fullWidth
                required
                value={booking.patient.address}
                onChange={(address) =>
                  handleBooking("patient.address", address.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid container size={{ xs: 12, md: 6 }} spacing={1}>
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography variant="h6" gutterBottom>
                Reason for Visit
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <TextField
                label="Please describe your reason for visit"
                type="textarea"
                size="small"
                multiline
                rows={4}
                fullWidth
                required
                value={booking.patient.reason}
                onChange={(reason) =>
                  handleBooking("patient.reason", reason.target.value)
                }
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={booking.patient.is_first_visit}
                    onChange={(is_first_visit) =>
                      handleBooking(
                        "patient.is_first_visit",
                        is_first_visit.target.checked,
                      )
                    }
                  />
                }
                sx={{ alignItems: "center" }}
                componentsProps={{
                  typography: {
                    sx: { fontSize: "0.875rem", color: "text.secondary" },
                  },
                }}
                label="First time visit?"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }} spacing={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={booking.patient.terms_and_conditions}
                    onChange={(terms_and_conditions) =>
                      handleBooking(
                        "patient.terms_and_conditions",
                        terms_and_conditions.target.checked,
                      )
                    }
                  />
                }
                sx={{ alignItems: "flex-start" }}
                componentsProps={{
                  typography: {
                    sx: { fontSize: "0.875rem", color: "text.secondary" },
                  },
                }}
                label="I agree to the terms and conditions and understand the cancellation policy. Appointments can be cancelled up to 24 hours before the scheduled time."
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AppointmentDetails;

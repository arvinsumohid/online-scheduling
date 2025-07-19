import React from "react";
import { Grid, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Dayjs } from "dayjs";

const AvailableDate = ({
  date,
  setDate,
}: {
  date: Dayjs | null;
  setDate: (date: Dayjs | null) => void;
}) => {
  return (
    <Grid
      sx={{
        border: "1px solid #E5E7EB",
        borderRadius: "0.2rem",
        p: 2,
      }}
      size={{ xs: 12, md: 6 }}
    >
      <Typography variant="h6" gutterBottom>
        Available Date
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar disablePast onChange={setDate} value={date} />
      </LocalizationProvider>
    </Grid>
  );
};

export default AvailableDate;

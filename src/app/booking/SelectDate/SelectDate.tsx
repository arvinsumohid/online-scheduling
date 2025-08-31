import React from "react";
import { Box, Grid } from "@mui/material";
import { Dayjs } from "dayjs";
import AvailableDate from "./AvailableDate";
import AvailableTime from "./AvailableTime";
import { Booking } from "@/interfaces/booking.interface";

const SelectDate = ({
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
        <Grid container size={{ xs: 12, md: 12 }} spacing={2}>
          <AvailableDate
            date={booking.date}
            setDate={(date: Dayjs | null) => handleBooking("date", date)}
          />
          <AvailableTime
            time={booking.time}
            setTime={(time: string | null) => handleBooking("time", time)}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default SelectDate;

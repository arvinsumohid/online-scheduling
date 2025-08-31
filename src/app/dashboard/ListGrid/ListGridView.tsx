import React from "react";
import { Box, Grid } from "@mui/material";
import ListGridItem from "./ListGridItem";

const ListGridView = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <ListGridItem
          date="Feb 14, 2025 at 10:00 AM"
          status="Confirmed"
          title="Dental Check-up"
          location="Downtown Clinic"
          doctor="Dr. Sarah Wilson"
        />
        <ListGridItem
          date="Oct 20, 2025 at 02:30 PM"
          status="Pending"
          title="Physical Therapy"
          location="Wellness Center, Floor 3"
          doctor="Dr. Michael Brown"
        />
        <ListGridItem
          date="Oct 22, 2025 at 02:30 PM"
          status="Cancel"
          title="Eye Examination"
          location="Vision Care Clinic"
          doctor="Dr. Emily Chen"
        />
        <ListGridItem
          date="Oct 22, 2025 at 02:30 PM"
          status="Confirmed"
          title="Dental Check-up"
          location="Vision Care Clinic"
          doctor="Dr. Emily Chen"
        />
        <ListGridItem
          date="Oct 22, 2025 at 02:30 PM"
          status="Confirmed"
          title="Dental Check-up"
          location="Vision Care Clinic"
          doctor="Dr. Emily Chen"
        />
      </Grid>
    </Box>
  );
};

export default ListGridView;

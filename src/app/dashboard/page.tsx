import React from "react";
import { Box, Button, Grid } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StatCard from "@/components/StatCard";
import Title from "@/components/Title";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListGridView from "./ListGrid/ListGridView";

const DashboardPage = () => {
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Title variant="h3" size="medium">
            Welcome back, John
          </Title>
          <Title variant="h4" size="small">
            Tuesday, February 13, 2024
          </Title>
        </Box>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<CalendarMonthOutlinedIcon />}
              label="Upcoming Appointments"
              value="10"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<AccessTimeIcon />}
              label="This Week's Appointments"
              value="10"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <StatCard
              icon={<PersonOutlineOutlinedIcon />}
              label="Total Appointments"
              value="10"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Title variant="h3" size="1.25rem">
            Upcoming Appointments
          </Title>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            sx={{ textTransform: "none", boxShadow: "none" }}
            startIcon={<GridViewOutlinedIcon />}
          >
            Grid View
          </Button>
        </Box>
        <ListGridView />
      </Box>
    </>
  );
};

export default DashboardPage;

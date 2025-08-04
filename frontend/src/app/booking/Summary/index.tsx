import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import DoctorCard from "../SelectDoctor/DoctorCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Title from "@/components/Title";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
const Summary = ({
  booking,
}: {
  booking: {
    doctor: string;
    date: Dayjs | null;
    time: string | null;
    patient: {
      name: string;
      phone: string;
      email: string;
      address: string;
      reason: string;
      is_first_visit: boolean;
      terms_and_conditions: boolean;
    };
  };
}) => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Title variant="h6" size="1.25rem">
          Summary
        </Title>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ boxShadow: "none", bgcolor: "#F9FAFB", width: "100%" }}>
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <DoctorCard name={booking.doctor} title="Doctor" />
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "normal",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CalendarMonthIcon sx={{ color: "#6B7280" }} />{" "}
                {booking.date?.format("YYYY-MM-DD")}
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "normal",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <AccessTimeIcon sx={{ color: "#6B7280" }} /> {booking.time} (45
                minutes)
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ boxShadow: "none", bgcolor: "#F9FAFB", width: "100%" }}>
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Title variant="h6" size="1.25rem">
                Patient Information
              </Title>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "normal",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <PersonOutlineIcon sx={{ color: "#6B7280" }} />{" "}
                {booking.patient.name}
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "normal",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <PhoneOutlinedIcon sx={{ color: "#6B7280" }} />{" "}
                {booking.patient.phone}
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "normal",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <EmailOutlinedIcon sx={{ color: "#6B7280" }} />{" "}
                {booking.patient.email}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Summary;

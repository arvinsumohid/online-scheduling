import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const AvailableTime = ({
  time,
  setTime,
}: {
  time: string | null;
  setTime: (time: string | null) => void;
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
      <Box>
        <Typography variant="h6" gutterBottom>
          Available Time Slots
        </Typography>
        <Box mb={2}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Morning
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            mb={1}
          >
            <Button
              variant={time === "9:00 AM" ? "contained" : "outlined"}
              onClick={() => setTime("9:00 AM")}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              9:00 AM
            </Button>
            <Button
              variant={time === "10:30 AM" ? "contained" : "outlined"}
              onClick={() => setTime("10:30 AM")}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              10:30 AM
            </Button>

            <Button
              variant={time === "11:45 AM" ? "contained" : "outlined"}
              onClick={() => setTime("11:45 AM")}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              11:45 AM
            </Button>
          </Box>
        </Box>
        <Box mb={4}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Afternoon
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            mb={1}
          >
            <Button
              variant={time === "2:00 PM" ? "contained" : "outlined"}
              onClick={() => setTime("2:00 PM")}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              2:00 PM
            </Button>
            <Button
              variant={time === "3:15 PM" ? "contained" : "outlined"}
              onClick={() => setTime("3:15 PM")}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              3:15 PM
            </Button>

            <Button
              variant={time === "4:30 PM" ? "contained" : "outlined"}
              onClick={() => setTime("4:30 PM")}
              sx={{ borderRadius: 2, minWidth: 120 }}
            >
              4:30 PM
            </Button>
          </Box>
        </Box>
        <Box mb={4}>
          <Typography variant="subtitle2" color="textSecondary" gutterBottom>
            Final Date
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <CalendarTodayIcon fontSize="small" color="action" />
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {time}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {time}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Duration: 45 minutes
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default AvailableTime;

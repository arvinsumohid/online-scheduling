import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const TeamCard = ({
  image,
  name,
  jobDescription,
  description,
}: {
  image: string;
  name: string;
  jobDescription: string;
  description?: string;
}) => {
  return (
    <Card>
      <CardMedia component="img" height={140} image={image} alt="Doctor" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          sx={{ fontWeight: "normal", fontSize: "1rem" }}
        >
          {jobDescription}
        </Typography>
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: "normal", fontSize: "0.875rem", mb: 1 }}
          >
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamCard;

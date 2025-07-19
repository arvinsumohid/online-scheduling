import React from "react";
import { Grid } from "@mui/material";
import ListGridDate from "./ListGridDate";
import ListGridStatus from "./ListGridStatus";
import ListGridDetail from "./ListGridDetail";
import ListGridButtons from "./ListGridButtons";

const ListGridItem = (data: {
  date: string;
  status: "Confirmed" | "Pending" | "Cancel";
  title: string;
  location: string;
  doctor: string;
}) => {
  return (
    <Grid
      container
      spacing={1}
      size={{ xs: 12, md: 3 }}
      sx={{ border: "1px solid #E5E7EB", borderRadius: "0.2rem", p: 2 }}
    >
      <ListGridDate date={data.date} />
      <ListGridStatus status={data.status} />
      <ListGridDetail
        title={data.title}
        location={data.location}
        doctor={data.doctor}
      />
      <ListGridButtons />
    </Grid>
  );
};

export default ListGridItem;

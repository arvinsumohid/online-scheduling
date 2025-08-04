import React from "react";
import PrivateLayout from "@/components/Private/PrivateLayout";

const BookingLayout = ({ children }: { children: React.ReactNode }) => {
  return <PrivateLayout>{children}</PrivateLayout>;
};

export default BookingLayout;

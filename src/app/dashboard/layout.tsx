import React from "react";
import PrivateLayout from "@/components/Private/PrivateLayout";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <PrivateLayout>{children}</PrivateLayout>;
};

export default DashboardLayout;

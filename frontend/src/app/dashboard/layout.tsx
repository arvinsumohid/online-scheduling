import React from "react";
import PrivateLayout from "@/components/Private/PrivateLayout";
import { withAuth } from "@/lib/withAuth";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <PrivateLayout>{children}</PrivateLayout>;
};

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return withAuth(DashboardLayout, { children });
}
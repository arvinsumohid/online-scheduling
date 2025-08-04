"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";

function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const showHeader = pathname === "/";
  return (
    <div id="root">
      {showHeader && <Header />}
      {children}
    </div>
  );
}

export default ClientLayout;

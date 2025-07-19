"use client";

import React from "react";
import { ListItem } from "@mui/material";
import Link from "next/link";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";

const NavItem = ({
  path,
  icon,
  label,
  collapsed,
}: {
  path: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}) => {
  const pathName = usePathname();
  return (
    <ListItem
      sx={{ backgroundColor: pathName === path ? "#2563EB" : "transparent" }}
    >
      <Link
        href={path}
        className="flex items-center gap-1"
        style={{ color: pathName === path ? "white" : "#6B7280" }}
      >
        {icon}
        {!collapsed && (
          <Typography className="sidenav__label" variant="body2">
            {label}
          </Typography>
        )}
      </Link>
    </ListItem>
  );
};

export default NavItem;

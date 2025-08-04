import React from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import type { IconButtonProps } from "@mui/material/IconButton";

const HamburgerIcon = (props: IconButtonProps) => (
  <IconButton aria-label="open drawer" edge="start" {...props}>
    <MenuIcon />
  </IconButton>
);

export const HamburgerMenu: React.FC<{
  setCollapsed: () => void;
  collapsed: boolean;
  mobileOpen: boolean;
  setMobileOpen: () => void;
}> = ({ setCollapsed, collapsed, mobileOpen, setMobileOpen }) => {
  return (
    <>
      <HamburgerIcon
        onClick={setCollapsed}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          ...(!collapsed && { display: "none" }),
        }}
      />
      <HamburgerIcon
        onClick={setMobileOpen}
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          ...(mobileOpen && { display: "none" }),
        }}
      />
    </>
  );
};

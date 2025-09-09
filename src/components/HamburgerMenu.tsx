import React from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import type { IconButtonProps } from "@mui/material/IconButton";

const HamburgerIcon = (props: IconButtonProps) => (
  <IconButton aria-label="open drawer" edge="start" {...props}>
    <MenuIcon />
  </IconButton>
);

const HamburgerMenu: React.FC<{
  setCollapsed: () => void;
}> = ({ setCollapsed }) => {
  return (
    <>
      <HamburgerIcon
        onClick={setCollapsed}
        sx={{
          mr: 2,
          display: "flex",
        }}
      />
    </>
  );
};

export default HamburgerMenu;

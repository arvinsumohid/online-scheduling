import React from "react";
import { Box, Drawer } from "@mui/material";
import SideMenu from "./SideMenu";
import HeaderSideMenu from "./HeaderSideMenu";

const SideMenuWrapper = ({
  collapsed,
  handleHamburgerClick,
  isMobile,
}: {
  collapsed: boolean;
  handleHamburgerClick: () => void;
  isMobile: boolean;
}) => {
  const mobileWidth = !collapsed ? "0px" : "54px";
  const desktopWidth = !collapsed ? "250px" : "54px";
  return (
    <Box
      sx={{ width: { xs: mobileWidth, md: desktopWidth }, overflow: "hidden" }}
      className="duration-300 ease-in-out"
      role="presentation"
    >
      <Drawer
        open={collapsed}
        onClose={handleHamburgerClick}
        anchor="left"
        variant={isMobile ? "temporary" : "permanent"}
      >
        <HeaderSideMenu collapsed={collapsed} isMobile={isMobile} />
        <SideMenu
          mobileWidth={mobileWidth}
          desktopWidth={desktopWidth}
          isMobile={isMobile}
        />
      </Drawer>
    </Box>
  );
};

export default SideMenuWrapper;

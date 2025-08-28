"use client";

import React, { useState } from "react";
import { Box, AppBar, Toolbar } from "@mui/material";
import { HamburgerMenu } from "../HamburgerMenu";
import "../../../styles/sidenav.scss";
import SideMenuWrapper from "./SideMenuWrapper";
import useCheckMobile from "@/hooks/useCheckMobile";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useCheckMobile();

  const handleHamburgerClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideMenuWrapper
        collapsed={collapsed}
        handleHamburgerClick={handleHamburgerClick}
        isMobile={isMobile}
      />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1 1 0%",
          minWidth: "1px",
          minHeight: "1px",
        }}
      >
        <AppBar
          color="default"
          position="sticky"
          elevation={0}
          sx={{
            "& .MuiToolbar-root": {
              minHeight: "50px",
            },
            height: "50px",
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            backgroundColor: (theme) => theme.palette.background.paper,
          }}
        >
          <Toolbar
            sx={{
              paddingLeft: {
                xs: "0",
                sm: "16px",
                md: "24px",
              },
            }}
          >
            <Box
              minWidth="40px"
              minHeight="40px"
              marginRight={{
                xs: "0",
                sm: "16px",
              }}
              sx={{
                "& .MuiButtonBase-root": {
                  marginLeft: 0,
                  marginRight: 0,
                },
              }}
            >
              <HamburgerMenu setCollapsed={handleHamburgerClick} />
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ p: 4 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default PrivateLayout;

"use client";

import React, { useState } from "react";
import { Box, AppBar, Toolbar, Drawer, IconButton, List } from "@mui/material";
import { HamburgerMenu } from "../HamburgerMenu";
import Image from "next/image";
import "../../../styles/sidenav.scss";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NavItem from "../NavItem";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleHamburgerClick = () => {
    setCollapsed(!collapsed);
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "block",
          width: collapsed ? "55px" : "240px",
          transition: "width 0.3s ease-in-out",
        }}
      />
      <Box
        component="nav"
        sx={{
          position: "fixed",
          zIndex: 1101,
          display: "flex",
        }}
      >
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: collapsed ? "55px" : "240px",
            transition: "width 0.3s ease-in-out",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: collapsed ? "55px" : "240px",
              boxSizing: "border-box",
              transition: "width 0.3s ease-in-out",
            },
          }}
        >
          <Box className="sidenav" sx={{ width: collapsed ? "55px" : "240px" }}>
            <Box>
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Image
                  src="/images/logo-only.svg"
                  alt="Logo"
                  width={55}
                  height={55}
                  priority={true}
                  style={{ maxWidth: "100%", height: "27px", width: "auto" }}
                />
                {!collapsed && (
                  <Image
                    src="/images/logo-text.svg"
                    alt="Logo"
                    width={95}
                    height={95}
                    priority={false}
                    style={{ maxWidth: "100%", height: "27px", width: "auto" }}
                  />
                )}
              </Link>
            </Box>
            {!collapsed && (
              <IconButton onClick={handleHamburgerClick}>
                <ChevronLeftIcon />
              </IconButton>
            )}
          </Box>
          <Box>
            <List>
              <NavItem
                path="/dashboard"
                icon={<DashboardIcon />}
                label="Dashboard"
                collapsed={collapsed}
              />
              <NavItem
                path="/booking"
                icon={<CalendarMonthIcon />}
                label="Booking"
                collapsed={collapsed}
              />
            </List>
          </Box>
        </Drawer>
      </Box>
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
              minHeight: "64px",
            },
            height: "64px",
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
              <HamburgerMenu
                collapsed={collapsed}
                setCollapsed={handleHamburgerClick}
                mobileOpen={mobileOpen}
                setMobileOpen={handleHamburgerClick}
              />
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

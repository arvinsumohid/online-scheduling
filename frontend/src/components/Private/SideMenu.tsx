import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import Link from "next/link";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
  import LogoutIcon from '@mui/icons-material/Logout';
import { usePathname } from 'next/navigation'

const SideMenu = ({
    mobileWidth,
    desktopWidth,
    isMobile,
}: {
    mobileWidth: string;
    desktopWidth: string;
    isMobile: boolean;
}) => {

    const pathSplit = usePathname().split('/');
  return (
    <Box
    sx={{
      width: { xs: mobileWidth, md: desktopWidth },
      overflow: "hidden",
    }}
    className="duration-300 ease-in-out"
  >
    <List>  
      <ListItem key="dashboard" disablePadding>
        <Link href="/dashboard" className={pathSplit[1] === "dashboard" ? "w-full bg-blue-100" : "w-full"}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {!isMobile ? <ListItemText primary="Dashboard" /> : null}
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem key="booking" disablePadding>
        <Link href="/booking" className={pathSplit[1] === "booking" ? "w-full bg-blue-100" : "w-full"}>
          <ListItemButton>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            {!isMobile ? <ListItemText primary="Booking" /> : null}
          </ListItemButton>
        </Link>
      </ListItem>
      <ListItem key="logout" disablePadding>
        <Link href="/auth/logout" className={pathSplit[1] === "logout" ? "w-full bg-blue-100" : "w-full"}>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            {!isMobile ? <ListItemText primary="Logout" /> : null}
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  </Box>
  )
}

export default SideMenu
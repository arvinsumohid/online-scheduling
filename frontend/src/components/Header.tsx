import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useUser } from '@auth0/nextjs-auth0';

const Header = () => {
  const { user, isLoading } = useUser();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={150}
            height={150}
            style={{ maxWidth: "100%", height: "auto", width: "auto" }}
          />
          <Box sx={{ flexGrow: 1 }} />
          {user && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                href="/dashboard"
                variant="contained"
                color="primary"
              >
                Dashboard
              </Button>
              <Button
                href="/auth/logout"
                variant="contained"
                color="primary"
              >
                Logout
              </Button>
            </Box >
          )}
          {!user && !isLoading && (
            <Button
              href="/auth/login"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { auth0 } from "@/lib/auth0";

const Header = async () => {
  const session = await auth0.getSession();
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
          {session ? (
            <Button
              href="/dashboard"
              variant="contained"
              color="primary"
            >
              Dashboard
            </Button>
          ) : (
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

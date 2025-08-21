import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0";

const Header = () => {
  const router = useRouter();
  const { user } = useUser();
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
          {user ? (
            <Button
              onClick={() => router.push("/dashboard")}
              variant="contained"
              color="primary"
            >
              Dashboard
            </Button>
          ) : (
            <Button
              component="link"
              href="/api/auth/login"
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

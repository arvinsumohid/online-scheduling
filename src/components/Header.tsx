import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
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
          <Button
            onClick={() => router.push("/login")}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

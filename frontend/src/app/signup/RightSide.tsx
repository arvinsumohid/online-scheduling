import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import TitleWithDescription from "@/components/TitleWithDescription";

const RightSide = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  return (
    <Box
      sx={{
        flex: 1,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
        <TitleWithDescription title="Create your account" description="Start your journey with us today" />
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mb: 2 }}>
          <IconButton size="large" sx={{ border: "1px solid #e5e7eb" }}>
            <GoogleIcon />
          </IconButton>
          <IconButton size="large" sx={{ border: "1px solid #e5e7eb" }}>
            <AppleIcon />
          </IconButton>
          <IconButton size="large" sx={{ border: "1px solid #e5e7eb" }}>
            <GitHubIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }}>or</Divider>
        <form>
          <TextField
            label="Full Name"
            type="text"
            fullWidth
            margin="normal"
            placeholder="John Doe"
            autoComplete="name"
            required
          />
          <TextField
            label="Email address"
            type="email"
            fullWidth
            margin="normal"
            placeholder="name@company.com"
            autoComplete="email"
            required
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            autoComplete="current-password"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            type={confirmShowPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            autoComplete="current-password"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setConfirmShowPassword((show) => !show)}
                    edge="end"
                    size="small"
                  >
                    {confirmShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              mb: 1.5,
              py: 1,
              fontWeight: "bold",
              fontSize: "1rem",
              background: "#2563eb",
            }}
          >
            Create Account
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "grey.600" }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/login"
            style={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#2563eb",
              padding: 0,
              minWidth: 0,
            }}
          >
            Sign in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RightSide;

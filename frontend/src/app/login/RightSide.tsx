"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";
import TitleWithDescription from "@/components/TitleWithDescription";
import useLogin from "@/hooks/useLogin";
import SocialLogin from "@/components/SocialLogin";

const RightSide = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, handleChange, handleSubmit } = useLogin();

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
        <TitleWithDescription title="Sign in to your account" description="Enter your credentials to access your account" />
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email address"
            type="email"
            fullWidth
            margin="normal"
            placeholder="name@company.com"
            autoComplete="email"
            required
            value={login.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            autoComplete="current-password"
            required
            value={login.password}
            onChange={(e) => handleChange("password", e.target.value)}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={<Typography variant="body2">Remember me</Typography>}
            />
            <Button
              href="#"
              size="small"
              sx={{ textTransform: "none", fontSize: "0.95rem" }}
            >
              Forgot password?
            </Button>
          </Box>
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
            Sign in
          </Button>
        </form>
        <Divider sx={{ my: 2 }}>Or continue with</Divider>
        <SocialLogin />
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "grey.600" }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            style={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#2563eb",
              padding: 0,
              minWidth: 0,
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default RightSide;

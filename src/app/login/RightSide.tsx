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
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RightSide = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Sign in to your account
        </Typography>
        <Typography variant="body2" sx={{ color: "grey.600", mb: 3 }}>
          Enter your credentials to access your account
        </Typography>
        <form>
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
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "grey.600" }}
        >
          Don&apos;t have an account?{" "}
          <Button
            href="#"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#2563eb",
              p: 0,
              minWidth: 0,
            }}
          >
            Sign up
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default RightSide;

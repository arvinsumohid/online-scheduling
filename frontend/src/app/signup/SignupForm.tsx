"use client";

import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { IconButton } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { Visibility } from '@mui/icons-material'
import { VisibilityOff } from '@mui/icons-material'
import useSignup from '@/hooks/useSignup'

const SignupForm = () => {
  const { signup, handleChange, handleSubmit } = useSignup();
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = React.useState(false);

  return (
    <form onSubmit={handleSubmit}>
    <TextField
      label="Full Name"
      type="text"
      fullWidth
      margin="normal"
      placeholder="John Doe"
      autoComplete="name"
      required
      value={signup.name}
      onChange={(e) => handleChange("name", e.target.value)}
    />
    <TextField
      label="Email address"
      type="email"
      fullWidth
      margin="normal"
      placeholder="name@company.com"
      autoComplete="email"
      required
      value={signup.email}
      onChange={(e) => handleChange("email", e.target.value)}
    />
    <TextField
      label="Password"
      type={showPassword ? "text" : "password"}
      fullWidth
      margin="normal"
      autoComplete="current-password"
      required
      value={signup.password}
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
    <TextField
      label="Confirm Password"
      type={confirmShowPassword ? "text" : "password"}
      fullWidth
      margin="normal"
      autoComplete="current-password"
      required
      value={signup.confirmPassword}
      onChange={(e) => handleChange("confirmPassword", e.target.value)}
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
  )
}

export default SignupForm
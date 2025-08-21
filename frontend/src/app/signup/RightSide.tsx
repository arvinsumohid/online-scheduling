import {
  Box,
  Typography,
  Divider,
} from "@mui/material";
import Link from "next/link";
import TitleWithDescription from "@/components/TitleWithDescription";
import SignupForm from "./SignupForm";
import SocialLogin from "@/components/SocialLogin";

const RightSide = () => {

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
        <SocialLogin />
        <Divider sx={{ my: 2 }}>or</Divider>
        <SignupForm />
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

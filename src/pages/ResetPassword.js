import React, { useState } from "react";
import TopBackground from "../components/postPropertyComponents/TopBackground.js";
import BottomBackground from "../components/postPropertyComponents/BottomBackground.js";
import { Grid, Button, Box, TextField } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(false);
  const [passwordInput, setPasswordInput] = useState(false);
  const [otpInput, setOtpInput] = useState(null);
  const [otpSend, setOtpSend] = useState(null);
  const toastOptions = {
    autoClose: 3000,
    closeButton: true,
    position: "bottom-right",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const passwordInputHandler = () => {
    setPasswordInput(!passwordInput);
    setOtpInput(null);
  };

  const otpHandler = async () => {
    const { data } = await axios.post(
      "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/send-email-verification-code",
      { email }
    );
    console.log(data.code);
    setOtpSend(data.code);
    setOtp(true);
    setPasswordInput(false);
  };
  const verifyOTPHandler = async () => {
    console.log(otpInput, otpSend);
    if (otpInput === otpSend) {
      setPasswordInput(true);
      setOtp(false);
    } else {
      console.log("wrong otp");
    }
  };

  const resetPasswordHandler = async () => {
    try {
      if (validations()) {
        const { data } = await axios.post(
          "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/reset-password",
          { email, password, fcmToken: "123" }
        );
        toast.success("Verification email sent successfully", toastOptions);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
      toast.error("User not found please signup", toastOptions);
    }
  };

  const validations = () => {
    if (!password && !confirmPassword) {
      toast.error("Password and confirm password are required", toastOptions);
      return false;
    }
    if (+password !== +confirmPassword) {
      toast.error("Password and confirm password must be same", toastOptions);
      return false;
    }

    return true;
  };

  return (
    <div>
      <TopBackground />
      <Grid container justifyContent="center" alignItems="center" height="50vh">
        <Grid item xs={12} sm={6} md={4}>
          {!passwordInput && !otp && (
            <Box sx={{ px: 4, py: 3, bgColor: "white", borderRadius: 1 }}>
              <TextField
                label="email"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                fullWidth
              />
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Button variant="contained" onClick={otpHandler}>
                  Reset Password
                </Button>
              </Box>
            </Box>
          )}

          {otp && (
            <Box>
              <Box
                sx={{
                  px: 4,
                  py: 3,
                  bgColor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <TextField
                  label="OTP"
                  variant="outlined"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  fullWidth
                />
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Button variant={"contained"} onClick={verifyOTPHandler}>
                    Verify Otp
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
          {passwordInput && (
            <Box
              sx={{
                px: 4,
                py: 3,
                bgColor: "background.paper",
                borderRadius: 1,
              }}
            >
              <TextField
                label="password"
                variant="outlined"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                fullWidth
              />
              <TextField
                label="Confirm Password"
                variant="outlined"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                fullWidth
              />
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Button variant="contained" onClick={resetPasswordHandler}>
                  Update Password
                </Button>
              </Box>

              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Button onClick={passwordInputHandler}>Wrong email?</Button>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
      <BottomBackground />
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;

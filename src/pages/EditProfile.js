import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import { UserActions } from "../store/User";

const toastOptions = {
  autoClose: 3000,
  closeButton: true,
  position: "bottom-right",
  pauseOnHover: true,
  draggable: true,
};

const genderList = ["Male", "Female"];
const countryList = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Bahrain",
  "Kuwait",
  "Oman",
  "United States",
  "United Kingdom",
  "India",
  "Turkey",
];

const EditProfile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { email, firstName, lastName, gender, country, fcmToken } = useSelector(
    (state) => state.user
  );

  const [verified, setVerified] = useState(true);
  const [otp, setOtp] = useState(null);
  const [sendedOtp, setSendedOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState(null);
  const [otpVerified, setOtpVerified] = useState(null);
  const [emailVerified, setEmailVerified] = useState(null);

  const toastSuccess = (message) => {
    toast.success(message, toastOptions);
  };

  const toastError = (message) => {
    toast.error(message, toastOptions);
  };

  const genderChangeHandler = (e) => {
    dispatch(UserActions.gender(e.target.value));
  };

  const countryChangeHandler = (e) => {
    dispatch(UserActions.country(e.target.value));
  };

  const emailChangeHandler = (e) => {
    dispatch(UserActions.email(e.target.value));
  };

  const handleUpdateProfile = async () => {
    const obj = { firstName, lastName, email, gender, country, fcmToken };
    if (otpVerified && emailVerified) {
      await axios.put(
        "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/credentials",
        obj,
        { headers: { Authorization: token } }
      );
      setVerified(true);
      toastSuccess("Info updated successfully");
    } else if (!emailVerified) {
      toastError("Please verify your email");
    }
  };

  const sendOtpHandler = async () => {
    const { data } = await axios.post(
      "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/send-email-verification-code",
      { email },
      { headers: { Authorization: token } }
    );
    setOtp(true);
    setSendedOtp(data.code);
  };

  const verifyOtpHandler = () => {
    if (enteredOtp === sendedOtp) {
      setOtpVerified(true);
      setEmailVerified(true);
      setVerified(true);
    } else {
      setOtpVerified(false);
      toastError("Please enter a valid OTP");
    }
  };

  useEffect(() => {
    setVerified(email === JSON.parse(localStorage.getItem("user")).email);
  }, [email]);

  return (
    <Grid
      container
      sx={{
        margin: "auto",
        maxWidth: "1000px",
        padding: "24px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: "16px", textAlign: "center", fontWeight: 900 }}
      >
        Edit Profile
      </Typography>
      <Grid
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Typography sx={{ ...fieldStyles, width: "150px" }}>
            Email:
          </Typography>
          <TextField
            value={email}
            fullWidth
            variant="outlined"
            onChange={emailChangeHandler}
          />
          <Button
            variant="contained"
            disabled={verified}
            onClick={sendOtpHandler}
            sx={{ marginLeft: "8px" }}
          >
            {verified ? "Verified" : "Verify"}
          </Button>
        </Grid>
        {otp && (
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Typography sx={{ ...fieldStyles, width: "150px" }}>OTP</Typography>
            <TextField
              value={enteredOtp}
              fullWidth
              variant="outlined"
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={verifyOtpHandler}
              disabled={otpVerified}
              sx={{ marginLeft: "8px" }}
            >
              {otpVerified ? "Verified" : "Verify"}
            </Button>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Typography sx={{ ...fieldStyles, width: "150px" }}>
            First Name:
          </Typography>
          <TextField
            value={firstName}
            fullWidth
            variant="outlined"
            onChange={(e) => dispatch(UserActions.firstName(e.target.value))}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Typography sx={{ ...fieldStyles, width: "150px" }}>
            Last Name:
          </Typography>
          <TextField
            value={lastName}
            fullWidth
            variant="outlined"
            onChange={(e) => dispatch(UserActions.lastName(e.target.value))}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Typography sx={{ ...fieldStyles, width: "150px" }}>
            Gender:
          </Typography>
          <Select
            value={gender}
            fullWidth
            onChange={genderChangeHandler}
            variant="outlined"
          >
            {genderList.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <Typography sx={{ ...fieldStyles, width: "150px" }}>
            Country:
          </Typography>
          <Select
            value={country}
            fullWidth
            onChange={countryChangeHandler}
            variant="outlined"
          >
            {countryList.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Button variant="contained" onClick={handleUpdateProfile}>
          Save
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

const fieldStyles = {
  fontWeight: "bold",
  marginBottom: "8px",
  width: "150px",
  fontSize: "1rem",
};

export default EditProfile;

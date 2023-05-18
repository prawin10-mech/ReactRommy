import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { UserActions } from "../store/User";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import { toastOptions } from "../utils/ToastOptions";
import Cookies from "js-cookie";

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

  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState(false);
  const [sendedOtp, setSendedOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState(null);
  const [otpVerified, setOtpVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

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
    if (verified) {
      const confirmed = window.confirm(
        "Are you sure you want to save the changes?"
      );
      if (confirmed) {
        await axios.put(
          "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/credentials",
          obj,
          { headers: { Authorization: token } }
        );
        setVerified(true);
        toastSuccess("Info updated successfully");
      }
    } else if (!emailVerified) {
      toastError("Please verify your email");
    } else {
      toastError("Something went wrong");
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
    setVerified(email === JSON.parse(Cookies.get("user")).email);
  }, [email]);

  const fieldStyles = {
    fontWeight: "bold",
    marginBottom: "8px",
    width: "150px",
    fontSize: "1rem",
  };

  return (
    <>
      <TopBackground />
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
        spacing={2}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: "16px", textAlign: "center", fontWeight: 900 }}
        >
          Edit Profile
        </Typography>
        <Grid
          item
          alignItems="center"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Typography sx={fieldStyles}>Email:</Typography>
          <TextField
            value={email}
            fullWidth
            variant="outlined"
            onChange={emailChangeHandler}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    disabled={verified}
                    onClick={sendOtpHandler}
                  >
                    {verified ? "Verified" : "Verify"}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {otp && (
          <Grid
            item
            alignItems="center"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Typography sx={fieldStyles}>OTP:</Typography>
            <TextField
              value={enteredOtp}
              fullWidth
              variant="outlined"
              onChange={(e) => setEnteredOtp(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      onClick={verifyOtpHandler}
                      disabled={otpVerified}
                      sx={{ marginLeft: "8px" }}
                    >
                      {otpVerified ? "Verified" : "Verify"}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        )}
        <Grid
          item
          alignItems="center"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Typography sx={fieldStyles}>First Name:</Typography>
          <TextField
            value={firstName}
            fullWidth
            variant="outlined"
            onChange={(e) => dispatch(UserActions.firstName(e.target.value))}
          />
        </Grid>
        <Grid
          item
          alignItems="center"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Typography sx={fieldStyles}>Last Name:</Typography>
          <TextField
            value={lastName}
            fullWidth
            variant="outlined"
            onChange={(e) => dispatch(UserActions.lastName(e.target.value))}
          />
        </Grid>
        <Grid
          item
          sx={{ display: "flex", flexDirection: "row" }}
          alignItems="center"
        >
          <Typography sx={fieldStyles}>Gender:</Typography>
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
          sx={{ display: "flex", flexDirection: "row" }}
          alignItems="center"
        >
          <Typography sx={fieldStyles}>Country:</Typography>
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
        <Grid item container justifyContent="center">
          <Button variant="contained" onClick={handleUpdateProfile}>
            Save
          </Button>
        </Grid>
        <ToastContainer />
      </Grid>
      <BottomBackground />
    </>
  );
};

export default EditProfile;

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import {
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  MenuItem,
  InputLabel,
  Select,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import countryCodes from "country-codes-list";
import { useSelector, useDispatch } from "react-redux";
import { SignupActions } from "../store/Signup";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        RoomyFinder
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const {
    type,
    firstName,
    lastName,
    gender,
    country,
    email,
    password,
    confirmPassword,
    countryCode,
    phone,
    termAndCondition,
    landlordAgrement,
  } = useSelector((state) => state.signup);

  const [showPassword, setShowPassword] = React.useState(false);
  const [sendedOtp, setSendedOtp] = useState(null);
  const [otp, setOtp] = useState(null);
  const [sendedOtpToMail, setSendedOtpToMail] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //  validation of email, number and name
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [errorpassword, seterrorpassword] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(value)) {
      console.log("1");
      setEmailError("Error");
    } else {
      console.log("2");
      setEmailError(false);
    }
  };
  const validatePassword = (value) => {
    if (confirmPassword !== password) {
      seterrorpassword(true);
    } else {
      seterrorpassword(false);
    }
  };

  const validateMobileNumber = (value) => {
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(value)) {
      setMobileNumberError("Invalid mobile number");
    } else {
      setMobileNumberError(false);
    }
  };

  const sendVerifyOtpEmailHandler = async () => {
    const { data } = await axios.post(
      "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/send-email-verification-code",
      { email }
    );
    setSendedOtpToMail(true);
    setSendedOtp(data.code);
  };

  const verifyOtpEmailHandler = async () => {
    if (otp === sendedOtp) {
      setOtpVerified(true);
    } else {
      setOtpVerified(false);
    }
  };

  // ======================end validation of email, number and name ====================

  // country code and country list=============================================
  const countyName = countryCodes.customList(
    "countryCode",
    " {countryNameEn}: +{countryCallingCode}"
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidations()) {
      const { data } = await axios.post(
        "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/credentials",
        {
          type,
          phone,
          email,
          password,
          firstName,
          lastName,
          country,
          gender,
          fcmToken: "123",
        }
      );
    }
  };

  const handleValidations = () => {};

  useEffect(() => {}, [confirmPassword, password]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <TopBackground />
      <Container component="main" maxWidth="sm">
        <Paper>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    name="room"
                    value="roommate"
                    checked={type === "roommate"}
                    onChange={() => dispatch(SignupActions.type("roommate"))}
                    control={<Radio />}
                    label="Roommate"
                  />
                  <FormControlLabel
                    name="room"
                    value="landlord"
                    checked={type === "landlord"}
                    onChange={() => dispatch(SignupActions.type("landlord"))}
                    control={<Radio />}
                    label="Landlord"
                  />
                </RadioGroup>
              </FormControl>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) =>
                      dispatch(SignupActions.firstName(e.target.value))
                    }
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) =>
                      dispatch(SignupActions.lastName(e.target.value))
                    }
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Gender"
                      name="gender"
                      value={gender}
                      onChange={(e) =>
                        dispatch(SignupActions.gender(e.target.value))
                      }
                      // onChange={handleChange}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="country"
                      value={country}
                      onChange={(e) =>
                        dispatch(SignupActions.country(e.target.value))
                      }
                      label="Country"
                    >
                      {Object.entries(countyName).map((val, id) => (
                        <MenuItem value={val[1].split(":")[0].trim()}>
                          {val[1].split(":")[0]}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <TextField
                    required
                    fullWidth
                    type={"email"}
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) =>
                      dispatch(SignupActions.email(e.target.value))
                    }
                    autoComplete="email"
                    sx={{ mr: 2 }}
                  />

                  <Button
                    variant="contained"
                    sx={{ mr: 1 }}
                    onClick={sendVerifyOtpEmailHandler}
                  >
                    Verify
                  </Button>
                </Grid>
                {sendedOtpToMail && (
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <TextField
                      required
                      fullWidth
                      type={"number"}
                      id="otp"
                      label="OTP"
                      name="OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      autoComplete="email"
                      sx={{ mr: 2 }}
                    />

                    <Button
                      variant="contained"
                      sx={{ mr: 1 }}
                      onClick={verifyOtpEmailHandler}
                    >
                      Verify
                    </Button>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <FormControl variant="outlined" sx={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      name="password"
                      value={password}
                      onChange={(e) =>
                        dispatch(SignupActions.password(e.target.value))
                      }
                      autoComplete="new-password"
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" sx={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      autoComplete="new-password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) =>
                        dispatch(SignupActions.confirmPassword(e.target.value))
                      }
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  {errorpassword === true ? (
                    <Typography variant="subtitle2">Not Match</Typography>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <FormControl sx={{ width: "60%" }}>
                    <InputLabel id="demo-simple-select-label">
                      Country code
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="numbercode"
                      value={countryCode}
                      onChange={(e) =>
                        dispatch(SignupActions.countryCode(e.target.value))
                      }
                      // label="Country code"
                      sx={{ minWidth: "30%" }}
                      // onChange={handleChange}
                    >
                      {Object.entries(countyName).map((val, id) => (
                        <MenuItem value={val[1].split(":")[1].trim()}>
                          {val}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="number"
                    value={phone}
                    onChange={(e) =>
                      dispatch(SignupActions.phone(e.target.value))
                    }
                    variant="outlined"
                    type="tel"
                  />
                  {mobileNumberError === false && (
                    <Typography variant="subtitle2">nust be number </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="termAndCondition"
                        checked={termAndCondition}
                        onChange={(e) =>
                          dispatch(
                            SignupActions.termAndCondition(e.target.value)
                          )
                        }
                        value={termAndCondition}
                        color="primary"
                      />
                    }
                    label="Tearm and conditions"
                  />
                  {type === "landlord" && (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="landlordAgrement"
                          checked={landlordAgrement}
                          onChange={(e) =>
                            dispatch(
                              SignupActions.landlordAgrement(e.target.value)
                            )
                          }
                          value={landlordAgrement}
                          color="primary"
                        />
                      }
                      label="Landlord agrement"
                    />
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Paper>
      </Container>
      <BottomBackground />
    </ThemeProvider>
  );
}

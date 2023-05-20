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
  FilledInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import countryCodes from "country-codes-list";

const initialState = {
  room: "",
  firstName: "",
  lastName: "",
  gender: "",
  country: "",
  email: "",
  password: "",
  confirmpassword: "",
  numbercode: "",
  number: "",
  termAndCondition: "",
  landlordAgrement: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "TOGGLE_TEARM_AND_CONDITION":
      return { ...state, termAndCondition: !state.termAndCondition };
    case "TOGGLE_LANDLORD_AGREMENT":
      return { ...state, landlordAgrement: !state.landlordAgrement };
    case "RESET_FIELDS":
      return initialState;
    default:
      return state;
  }
};

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //  validation of email, number and name
  const [emailError, setEmailError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [errorpassword, seterrorpassword] = useState("");

  const validateEmail = (value) => {
    console.log(value);
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
    
    if (state.confirmpassword !== state.password) {
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

  // ======================end validation of email, number and name ====================

  // country code and country list=============================================
  const countyName = countryCodes.customList(
    "countryCode",
    " {countryNameEn}: +{countryCallingCode}"
  );
  // console.log(countyName);
  // ======================end  country code and country list====================
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    if (name === "email") {
      validateEmail(value);
    }
    if (name ==="confirmpassword") {
      validatePassword(value);
    }
    // if (name === "firstName" || "lastName") {
    //   validateEmail(value);
    // }
    if (name === "number") {
      validateMobileNumber(value);
    }
    dispatch({ type: "UPDATE_FIELD", field: name, value: fieldValue });
  };

  const handleTeramAndConditionToggle = () => {
    dispatch({ type: "TOGGLE_TEARM_AND_CONDITION" });
  };
  const handleLandlordAgrementToggle = () => {
    dispatch({ type: "TOGGLE_LANDLORD_AGREMENT" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with the state values
    // console.log(state);
    dispatch({ type: "RESET_FIELDS" });
  };

  useEffect(() => {}, [state.confirmpassword, state.password]);
  

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
                    checked={state.room === "roommate"}
                    onChange={handleInputChange}
                    control={<Radio />}
                    label="Roommate"
                  />
                  <FormControlLabel
                    name="room"
                    value="landlord"
                    checked={state.room === "landlord"}
                    onChange={handleInputChange}
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
                    value={state.firstName}
                    onChange={handleInputChange}
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
                    value={state.lastName}
                    onChange={handleInputChange}
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
                      value={state.gender}
                      onChange={handleInputChange}
                      // onChange={handleChange}
                    >
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
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
                      value={state.country}
                      onChange={handleInputChange}
                      label="Country"
                      // onChange={handleChange}
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
                  {/* <Box></Box> */}
                  <TextField
                    required
                    fullWidth
                    type={"email"}
                    id="email"
                    label="Email Address"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    sx={{ mr: 2 }}
                  />
                  {emailError !== false || "" ? (
                    <Typography variant="subtitle2">
                      email must contain @
                    </Typography>
                  ) : (
                    ""
                  )}
                  <Button variant="contained" sx={{ mr: 1 }}>
                    Verify
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" sx={{ width: "100%" }}>
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      name="password"
                      value={state.password}
                      onChange={handleInputChange}
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
                      name="confirmpassword"
                      value={state.confirmpassword}
                      onChange={handleInputChange}
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
                  ) : ""}
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
                      value={state.numbercode}
                      onChange={handleInputChange}
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
                    value={state.number}
                    onChange={handleInputChange}
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
                        checked={state.termAndCondition}
                        onChange={handleTeramAndConditionToggle}
                        value={state.termAndCondition}
                        color="primary"
                      />
                    }
                    label="Tearm and conditions"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="landlordAgrement"
                        checked={state.landlordAgrement}
                        onChange={handleLandlordAgrementToggle}
                        value={state.landlordAgrement}
                        color="primary"
                      />
                    }
                    label="Landlord agrement"
                  />
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

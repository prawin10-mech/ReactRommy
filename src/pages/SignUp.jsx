
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
} from "@mui/material";
import React, { useReducer } from "react";

const initialState = {
  room:"",
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

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
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
    console.log(state);
    dispatch({ type: "RESET_FIELDS" });
  };

  console.log("state", state)

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

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
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
                    id="email"
                    label="Email Address"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    autoComplete="email"
                    sx={{ mr: 2 }}
                  />
                  <Button variant="contained" sx={{ mr: 1 }}>
                    Verify
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleInputChange}
                    label="Password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    name="confirmpassword"
                    value={state.confirmpassword}
                    onChange={handleInputChange}
                    label="Confirm Password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", flexDirection: "row" }}
                >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="numbercode"
                    value={state.numbercode}
                    onChange={handleInputChange}
                    label="numbercode"
                    sx={{ minWidth: "30%" }}
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="number"
                    value={state.number}
                    onChange={handleInputChange}
                    variant="outlined"
                    type="tel"
                  />
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

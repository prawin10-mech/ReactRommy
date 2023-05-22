import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  TextField,
  Typography,
  Avatar,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import TopBackground from "../components/postPropertyComponents/TopBackground.js";
import BottomBackground from "../components/postPropertyComponents/BottomBackground.js";
import { UserActions } from "../store/User.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { toastOptions } from "../utils/ToastOptions.js";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <NavLink color="inherit" to="/">
        RoomyFinder
      </NavLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const emailInputHandler = (e) => {
    const emailValue = e.target.value;
    dispatch(UserActions.email(emailValue));

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const passwordInputHandler = (e) => {
    dispatch(UserActions.password(e.target.value));
  };

  const loginHandler = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/token",
        { email, password }
      );

      console.log(response);
      if (response.status === 200) {
        const loginResponse = await axios.post(
          "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/login",
          { email, password, fcmToken: "123" }
        );

        const { data } = loginResponse;
        Cookies.set("user", JSON.stringify(data), { expires: 365 });
        localStorage.setItem("token", `bearer ${response.data.token}`);
        dispatch(UserActions.isLoggedIn(true));
        dispatch(UserActions.firstName(data.firstName));
        dispatch(UserActions.lastName(data.lastName));
        dispatch(UserActions.email(data.email));
        dispatch(UserActions.fcmToken(data.fcmToken));
        dispatch(UserActions.gender(data.gender));
        dispatch(UserActions.country(data.country));
        toast.success("Login Successfully", toastOptions);
        navigate("/");
      } else {
        throw new Error("Please enter valid credentials");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage, toastOptions);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <TopBackground />
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginY: 4,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
          </Box>
          <Box sx={{ px: 4, py: 3, bgcolor: "white", borderRadius: 1 }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "25px",
                textAlign: "center",
                mb: 5,
              }}
            >
              Login
            </Typography>
            <TextField
              autoComplete="email"
              label="email"
              variant="outlined"
              onChange={(e) => emailInputHandler(e)}
              fullWidth
              error={emailError.length > 0} // Set error state based on emailError length
              helperText={emailError} // Display error message
            />
            <Box sx={{ mt: 2 }}>
              <FormControl variant="outlined" sx={{ width: "100%" }}>
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  onChange={(e) => passwordInputHandler(e)}
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
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={loginHandler}
                disabled={isLoading}
                sx={{ position: "relative" }}
              >
                {isLoading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      marginTop: "-12px",
                      marginLeft: "-12px",
                    }}
                  />
                )}
                Login
              </Button>
            </Box>
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Button onClick={() => navigate("/signup")}>
                Don't have an account?
              </Button>
              <Button onClick={() => navigate("/reset_password")}>
                Forgot Password
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
      <BottomBackground />
      <ToastContainer />
    </div>
  );
};

export default Login;

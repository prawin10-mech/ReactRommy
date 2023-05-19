import React from "react";
import {
  Grid,
  Button,
  Box,
  TextField,
  Typography,
  Avatar,
  OutlinedInput,
  FilledInput,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const toastOptions = {
    autoClose: 3000,
    closeButton: true,
    position: "bottom-right",
    pauseOnHover: true,
    draggable: true,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const emailInputHandler = (e) => {
    dispatch(UserActions.email(e.target.value));
  };

  const passwordInputHandler = (e) => {
    dispatch(UserActions.password(e.target.value));
  };



  const loginHandler = async () => {
    try {
      const response = await axios.post(
        "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/token",
        { email, password }
      );
      if (response.status) {
        const { data } = await axios.post(
          "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/login",
          { email, password, fcmToken: "123" }
        );
        Cookies.set("user", JSON.stringify(data), { expires: 365 });
        localStorage.setItem("token", "bearer " + response.data.token);
        toast.success("Login Successfully", toastOptions);
        dispatch(UserActions.isLoggedIn(true));
        dispatch(UserActions.firstName(data.firstName));
        dispatch(UserActions.lastName(data.lastName));
        dispatch(UserActions.email(data.email));
        dispatch(UserActions.fcmToken(data.fcmToken));
        dispatch(UserActions.gender(data.gender));
        dispatch(UserActions.country(data.country));
        navigate("/");
      }
    } catch (err) {
      toast.error("Please enter valid credentials", toastOptions);
      console.log(err);
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
            />
            <Box sx={{ mt: 2 }}>
             
              <FormControl  variant="outlined" sx={{width:"100%"}}>
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
              >
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

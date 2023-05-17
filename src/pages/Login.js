import React from "react";
import { Grid, Button, Box, TextField } from "@mui/material";
import TopBackground from "../components/postPropertyComponents/TopBackground.js";
import BottomBackground from "../components/postPropertyComponents/BottomBackground.js";
import { UserActions } from "../store/User.js";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("token", "bearer " + response.data.token);
        toast.success("Login Successfully", toastOptions);
        dispatch(UserActions.isLoggedIn(true));
        dispatch(UserActions.firstName(data.firstName));
        dispatch(UserActions.lastName(data.lastName));
        dispatch(UserActions.country(data.country));
        dispatch(UserActions.gender(data.gender));
        dispatch(UserActions.email(data.email));
        dispatch(UserActions.fcmToken(data.fcmToken));
        dispatch(UserActions.profilePicture(data.profilePicture));
        dispatch(UserActions.type(data.type));
        navigate("/");
      }
    } catch (err) {
      toast.error("please enter valid credentials", toastOptions);
      console.log(err);
    }
  };

  return (
    <div>
      <TopBackground />
      <Grid container justifyContent="center" alignItems="center" height="50vh">
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ px: 4, py: 3, bgcolor: "white", borderRadius: 1 }}>
            <TextField
              label="email"
              variant="outlined"
              onChange={(e) => emailInputHandler(e)}
              fullWidth
            />
            <Box sx={{ mt: 2 }}>
              <TextField
                label="password"
                variant="outlined"
                onChange={(e) => passwordInputHandler(e)}
                fullWidth
              />
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
            <Box sx={{ mt: 2 }}>
              <Button onClick={() => navigate("/reset_password")}>
                Forgot Password
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <BottomBackground />
      <ToastContainer />
    </div>
  );
};

export default Login;

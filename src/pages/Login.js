import React, { useState } from "react";
import { Grid, Button, Box, TextField } from "@mui/material";
import TopBackground from "../components/postPropertyComponents/TopBackground.js";
import BottomBackground from "../components/postPropertyComponents/BottomBackground.js";
import { LoginActions } from "../store/userLogin.js";
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
  const email = useSelector((state) => state.login.email);
  const password = useSelector((state) => state.login.password);

  const emailInputHandler = (e) => {
    dispatch(LoginActions.email(e.target.value));
  };

  const passwordInputHandler = (e) => {
    dispatch(LoginActions.password(e.target.value));
  };

  const loginHandler = async () => {
    try {
      const { data } = await axios.post(
        "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/login",
        { email, password, fcmToken: "123" }
      );
      toast.success("Login Successfully", toastOptions);
      dispatch(LoginActions.isLoggedIn(true));
      navigate("/");
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
          </Box>
        </Grid>
      </Grid>
      <BottomBackground />
      <ToastContainer />
    </div>
  );
};

export default Login;

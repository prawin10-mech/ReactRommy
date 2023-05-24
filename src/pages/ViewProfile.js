import React, { useState, useRef } from "react";
import { Grid, Typography, IconButton, Box, Button } from "@mui/material";
import { Visibility, Settings, Edit } from "@mui/icons-material";
import Cookies from "js-cookie";
import DummyUserImage from "../assets/dummyUserImage.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../utils/ToastOptions";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";

const ViewProfile = () => {
  const user = JSON.parse(Cookies.get("user"));
  const navigate = useNavigate();
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordMatched, setPasswordMatched] = useState(false);
  const [password, setPassword] = useState("");
  const passwordInputRef = useRef(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const showPasswordHandler = async () => {
    setShowPasswordInput(!showPasswordInput);
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  const verifyPasswordHandler = async () => {
    try {
      const { data } = await axios.post(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/auth/login",
        { email: user.email, password, fcmToken: "123" }
      );
      if (data) {
        setPasswordMatched(true);
        setShowPasswordInput(!showPasswordInput);
      }
    } catch (err) {
      toast.error("Incorrect password", toastOptions);
    }
  };

  const lightOverlayClass = showPasswordInput ? "light-overlay" : "";

  return (
    <Grid sx={{ width: "100%", height: "100%" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        margin="auto"
        sx={{ height: "100vh", maxWidth: "600px" }}
        className={lightOverlayClass}
      >
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            View Profile
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ bgcolor: "secondary.main", p: 4, borderRadius: "10px" }}
        >
          <Grid container alignItems="center" justifyContent="flex-end">
            <IconButton
              aria-label="Edit"
              onClick={() => navigate("/editProfile")}
              sx={{ color: "#fff" }}
            >
              <Edit />
            </IconButton>
          </Grid>
          <Grid container justifyContent="center">
            <Box sx={{ borderRadius: "15px", overflow: "hidden" }}>
              <img src={DummyUserImage} alt="dummy user" />
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ bgcolor: "#f6ddfb", borderRadius: "15px", mb: 2 }}
            >
              <Typography variant="h6">Full name</Typography>
              <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
            </Grid>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              xs={12}
              sx={{ bgcolor: "#f6ddfb", borderRadius: "15px", mb: 2, px: 2 }}
            >
              <Grid>
                <Grid>
                  <Typography variant="h6">Password</Typography>
                  {showPasswordInput ? (
                    <Grid>
                      <input
                        ref={passwordInputRef}
                        value={password}
                        placeholder="Please enter your current password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Button
                        onClick={verifyPasswordHandler}
                        variant="outline"
                        color="secondary"
                      >
                        submit
                      </Button>
                    </Grid>
                  ) : (
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                      }}
                    >
                      {passwordMatched ? password : "**********"}
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Grid>
                <IconButton
                  aria-label="show password"
                  onClick={showPasswordHandler}
                >
                  <Visibility />
                </IconButton>
                {/* <IconButton aria-label="edit password">
                <Settings />
              </IconButton> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ bgcolor: "#f6ddfb", borderRadius: "15px", p: 5 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Personal Information</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Typography variant="subtitle1">Full name</Typography>
                <Typography>{`${user.firstName} ${user.lastName}`}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Typography variant="subtitle1">Email</Typography>
                <Typography>{user.email}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Typography variant="subtitle1">Phone number</Typography>
                <Typography>{user.phone}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Typography variant="subtitle1">Gender</Typography>
                <Typography>{user.gender}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Typography variant="subtitle1">Country</Typography>
                <Typography>{user.country}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Typography variant="subtitle1">Status</Typography>
                <Typography>{user.type}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Typography variant="subtitle1">Premium</Typography>
                <Typography>{user.isPremium ? "Yes" : "No"}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="space-between">
                <Typography variant="subtitle1">Member since</Typography>
                <Typography>{formatDate(user.createdAt)}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default ViewProfile;

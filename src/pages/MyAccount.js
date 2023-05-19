import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const user = JSON.parse(Cookies.get("user"));
  const navigate = useNavigate();

  const viewProfileHandle = () => {
    navigate("/viewProfile");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h5" fontWeight={700}>
            My Account
          </Typography>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item>
            <Box
              sx={{
                width: 300,
                height: 300,
                borderRadius: "25px",
                overflow: "hidden",
              }}
            >
              <img
                src={user.profilePicture}
                alt={`${user.firstName} profile`}
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h6" fontWeight={900}>
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="h6" fontWeight={900}>
              {user.type}
            </Typography>
            <Button onClick={viewProfileHandle}>All Details</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyAccount;

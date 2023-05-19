import React from "react";
import { Grid, Box, Typography, Button, Avatar } from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MyAccount = () => {
  const user = JSON.parse(Cookies.get("user"));
  const navigate = useNavigate();

  const viewProfileHandle = () => {
    navigate("/viewProfile");
  };

  return (
    <>
      <TopBackground />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", my: 3 }}
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
          <Grid
            container
            item
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
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
                  src="https://www.bing.com/images/search?q=images&FORM=IQFRBA&id=BC6470C60B7A8615DA7155B539C4A122275DF649"
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
              <Button
                onClick={viewProfileHandle}
                variant="outlined"
                color="secondary"
              >
                All Details
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm={4}>
          <Grid item sx={{ width: "100%" }}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#D9D9D9",
                borderRadius: "15px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Box>

                <Box>
                  <Typography>Notifications</Typography>
                  <Typography>0 unread notifications</Typography>
                </Box>
              </Box>
              <Box>
                <ChevronRightIcon
                  sx={{
                    height: "50px",
                    width: "50px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#D9D9D9",
                borderRadius: "15px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Box>

                <Box>
                  <Typography>My Ads</Typography>
                </Box>
              </Box>
              <Box>
                <ChevronRightIcon
                  sx={{
                    height: "50px",
                    width: "50px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ width: "100%", cursor: "pointer" }}
            onClick={() => navigate("/myBookings")}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#D9D9D9",
                borderRadius: "15px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Box>

                <Box>
                  <Typography>My Bookings</Typography>
                </Box>
              </Box>
              <Box>
                <ChevronRightIcon
                  sx={{
                    height: "50px",
                    width: "50px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#D9D9D9",
                borderRadius: "15px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Box>

                <Box>
                  <Typography>About</Typography>
                </Box>
              </Box>
              <Box>
                <ChevronRightIcon
                  sx={{
                    height: "50px",
                    width: "50px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#D9D9D9",
                borderRadius: "15px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                  </Avatar>
                </Box>

                <Box>
                  <Typography>Account Balance</Typography>
                  <Typography>0 AED</Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    borderRadius: "25px",
                    backgroundColor: "orange",
                    color: "white",
                  }}
                >
                  Withdraw
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#D9D9D9",
                borderRadius: "15px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Typography>Roomy Balance</Typography>
                </Box>
              </Box>
              <Box>
                <ChevronRightIcon
                  sx={{
                    height: "50px",
                    width: "50px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <BottomBackground />
    </>
  );
};

export default MyAccount;

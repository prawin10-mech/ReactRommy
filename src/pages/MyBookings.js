import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import { Grid, Typography, CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/User";

const MyBookings = () => {
  const dispatch = useDispatch();
  const myBookings = useSelector((state) => state.user.myBookings);
  const token = localStorage.getItem("token");

  const fetchMyBookings = async () => {
    try {
      const { data } = await axios.get(
        "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad",
        { headers: { Authorization: token } }
      );
      dispatch(UserActions.myBookings(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const myBookingData = myBookings?.map((booking) => (
    <Grid
      key={booking._id}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className="booking-container"
    >
      <CardMedia
        component="img"
        sx={{
          minWidth: { xs: "100%", md: "50%" },
          width: { xs: "100%", md: "50%" },
          height: { xs: "250px", sm: "300px", md: "300px" },
          padding: "10px",
          borderRadius: "20px",
          display: "flex",
        }}
        image={booking?.ad?.images[0]}
        alt={booking?.id}
      />
      <Typography variant="subtitle1">{booking.rentType}</Typography>
      <Typography variant="subtitle1">{booking.rentType}</Typography>
    </Grid>
  ));

  return (
    <div className="my-bookings-container">
      <TopBackground />
      <Typography variant="h5">My Bookings</Typography>
      <Typography variant="subtitle1">{myBookings.length} results</Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
        sx={{ margin: "auto", maxWidth: 1200 }}
      >
        {myBookingData}
      </Grid>
      <BottomBackground />
    </div>
  );
};

export default MyBookings;

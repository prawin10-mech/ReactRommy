import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import { Grid, Typography, CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/User";
import DummyImage from "../assets/demo.jpg";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myBookings = useSelector((state) => state.user.myBookings);
  const token = localStorage.getItem("token");

  const fetchMyBookings = async () => {
    try {
      // const { data } = await axios.get(
      //   "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad",
      //   { headers: { Authorization: token } }
      // );

      const { data } = await axios.post(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available",
        { countryCode: "AE" }
      );
      console.log(data);

      dispatch(UserActions.myBookings(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const myBookingData = myBookings?.map((booking) => (
    <Grid key={booking._id} item xs={12} sm={6} md={4} lg={3}>
      <Grid
        sx={{
          width: "300px",
          height: "250px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            // objectFit: "cover",
            width: "100%",
            height: "200px",
            padding: "10px",
            borderRadius: "20px",
            display: "flex",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/rooms/view-room/${booking.id}`)}
          image={booking.images.length > 0 ? booking.images[0] : [DummyImage]}
          alt={booking?.id}
        />
        <Grid sx={{ padding: "10px" }}>
          <Typography variant="subtitle1">{booking.type}</Typography>
          <Typography variant="subtitle1">
            {booking.monthlyPrice} AED
          </Typography>
        </Grid>
      </Grid>
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

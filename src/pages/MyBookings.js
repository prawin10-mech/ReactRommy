import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import { Grid, Typography, CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/User";
import DummyImage from "../assets/demo.jpg";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

const MyBookings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myBookings = useSelector((state) => state.user.myBookings);
  const token = localStorage.getItem("token");

  const fetchMyBookings = async () => {
    try {
      const user = JSON.parse(Cookie.get("user"));
      console.log(user.type);
      const { data } = await axios.get(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad",
        { headers: { Authorization: token } }
      );
      console.log(data);

      dispatch(UserActions.myBookings(data));
    } catch (error) {
      console.log(error);
    }
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getStatusColor = (status) => {
    if (status === "offered") {
      return "green";
    } else if (status === "pending") {
      return "blue";
    }
    return "inherit";
  };

  const formatDateTime = (dateTimeString) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleDateString(undefined, options)}`;
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
      sx={{ cursor: "pointer", p: 2 }}
      onClick={() => navigate(`/myBookings/aboutBooking/${booking.id}`)}
    >
      <Grid
        sx={{
          width: "300px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "200px",
            padding: "10px",
            borderRadius: "10px 10px 0 0",
            objectFit: "cover",
          }}
          image={
            booking.ad.images.length > 0 ? booking.ad.images[0] : [DummyImage]
          }
          alt={booking?.id}
        />
        <Grid sx={{ padding: "10px" }}>
          <Typography variant="subtitle1">
            Property:{" "}
            <Typography component="span" sx={{ fontWeight: "700" }}>
              {booking.quantity} {booking.ad.type}
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            Location:{" "}
            <Typography component="span" sx={{ fontWeight: "700" }}>
              {booking.ad.address.buildingName}
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            Status:{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: "700",
                color: getStatusColor(booking?.status),
              }}
            >
              {!booking?.isPayed ? capitalize(booking.status) : "Paid"}
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            Date:{" "}
            <Typography component="span" sx={{ fontWeight: "700" }}>
              {formatDateTime(new Date(booking.createdAt).toISOString())}
            </Typography>
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
        gap={4}
        sx={{ margin: "auto", maxWidth: 1200, mb: 5 }}
      >
        {myBookingData}
      </Grid>
      <BottomBackground />
    </div>
  );
};

export default MyBookings;

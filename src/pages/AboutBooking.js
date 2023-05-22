import { Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import TopBackground from "../components/postPropertyComponents/TopBackground.js";
import BottomBackground from "../components/postPropertyComponents/BottomBackground.js";

const AboutBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [offered, setOffered] = useState(false);
  const token = localStorage.getItem("token");
  const type = JSON.parse(Cookies.get("user")).type;

  const getMyBookedProperty = async () => {
    const { data } = await axios.get(
      `https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad/${id}`,
      { headers: { Authorization: token } }
    );
    setProperty(data);
  };

  const capitalize = (str) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };

  const formatDateTime = (dateTimeString) => {
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleDateString(undefined, options)}`;
  };

  const getStatusColor = (status) => {
    if (status === "offered") {
      return "green";
    } else if (status === "pending") {
      return "blue";
    }
    return "inherit";
  };

  const acceptBookingHandler = async (bookingId) => {
    const { data } = await axios.post(
      `https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad/${bookingId}/offer`,
      {},
      { headers: { Authorization: token } }
    );
    if (data === "OK") {
      setOffered(true);
    }
  };

  console.log(property);

  const cancelBookingHandler = async (bookingId) => {
    await axios.post(
      "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad/landlord/cancel",
      { bookingId },
      { headers: { Authorization: token } }
    );
    navigate("/myBookings");
    setOffered(false);
  };

  const cancelTenantBookingHandler = async (bookingId) => {
    await axios.post(
      "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad/tenant/cancel",
      { bookingId },
      { headers: { Authorization: token } }
    );
    navigate("/myBookings");
  };

  useEffect(() => {
    getMyBookedProperty();
  }, [offered]);

  return (
    <>
      <TopBackground />
      <Grid container justifyContent="center" sx={{ my: 5 }}>
        <Grid item xs={12} md={8} lg={6}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: "25px",
              textAlign: "center",
              mb: 2,
            }}
          >
            About Booking
          </Typography>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Property:
              </Typography>
              <Typography>{property?.ad?.type}</Typography>
            </Grid>
            {property?.isPayed && (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Property location:
                </Typography>

                <Typography>
                  {property?.ad?.address?.city},{" "}
                  {property?.ad?.address?.buildingName}
                </Typography>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Quantity:
              </Typography>
              <Typography>{property?.quantity}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Booking Date:
              </Typography>
              <Typography>
                {property && formatDateTime(new Date(property?.createdAt))}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Check-in Date:
              </Typography>
              <Typography>
                {property && formatDateTime(new Date(property?.checkIn))}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Check-out Date:
              </Typography>
              {property && formatDateTime(new Date(property?.checkOut))}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Status:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  color: getStatusColor(property?.status),
                }}
              >
                {!property?.isPayed ? capitalize(property?.status) : "Paid"}
              </Typography>
            </Grid>
            {property && property.status === "offered" && (
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Payment status:
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                  }}
                >
                  {!property?.isPayed ? "Payment required" : "Paid"}
                </Typography>
              </Grid>
            )}
            {type === "roommate" && !property?.isPayed && (
              <Grid container justifyContent="center" alignItems="center">
                {property && property.status === "offered" ? (
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() =>
                      navigate(`/bookings/property/pay-rent/${property.id}`)
                    }
                  >
                    Pay Rent
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    onClick={() => cancelTenantBookingHandler(property.id)}
                  >
                    Cancel booking
                  </Button>
                )}
              </Grid>
            )}

            {type === "landlord" && (
              <Grid container justifyContent="center" alignItems="center">
                {property && property.status === "pending" ? (
                  <Grid
                    item
                    gap={5}
                    sx={{ display: "flex", width: "100%", mt: "5px" }}
                  >
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      sx={{ width: "100%" }}
                      onClick={() => cancelBookingHandler(property.id)}
                    >
                      Decline
                    </Button>{" "}
                    <Button
                      variant="contained"
                      color="success"
                      size="large"
                      sx={{ width: "100%" }}
                      onClick={() => acceptBookingHandler(property.id)}
                    >
                      Accept
                    </Button>
                  </Grid>
                ) : (
                  ""
                )}
              </Grid>
            )}
          </Grid>
          <Grid spacing={2}>
            {property?.isPayed && (
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                >
                  About Property
                </Typography>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Property:
                  </Typography>
                  <Typography>{property?.ad?.type}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Property location:
                  </Typography>

                  <Typography>
                    {property?.ad?.address?.city},{" "}
                    {property?.ad?.address?.location}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Building:
                  </Typography>
                  <Typography>{property?.ad?.address?.buildingName}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Appartment number:
                  </Typography>
                  <Typography>
                    {property?.ad?.address?.appartmentNumber}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Floor number:
                  </Typography>
                  <Typography>{property?.ad?.address?.floorNumber}</Typography>
                </Grid>
              </Grid>
            )}
            {property?.isPayed && (
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "25px",
                    textAlign: "center",
                  }}
                >
                  About Client
                </Typography>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Name:
                  </Typography>
                  <Typography>
                    {property?.client?.firstName}, {property?.client?.lastName}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Country:
                  </Typography>

                  <Typography>{property?.client?.country}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Email:
                  </Typography>
                  <Typography>{property?.client?.email}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Phone number:
                  </Typography>
                  <Typography>{property?.client?.phone}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    gender:
                  </Typography>
                  <Typography>{property?.client?.gender}</Typography>
                </Grid>
              </Grid>
            )}

            {type === "roommate" && property?.isPayed && (
              <Grid
                container
                spacing={2}
                sx={{ justifyContent: "center", mt: 5 }}
              >
                <Button variant="contained">Chat with Client</Button>
              </Grid>
            )}

            {property && property?.ad && property?.ad?.images && (
              <Grid container spacing={2} sx={{ mt: 5 }}>
                {property.ad.images.map((image, index) => (
                  <Grid
                    item
                    key={index}
                    sx={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={image}
                      alt={`roomy finder ${index}`}
                      style={{
                        borderRadius: "8px",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <BottomBackground />
    </>
  );
};

export default AboutBooking;

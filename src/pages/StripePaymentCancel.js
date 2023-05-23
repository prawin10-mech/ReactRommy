import React from "react";
import { Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StripePaymentCancel = () => {
  const navigate = useNavigate();

  const handleMyBookingsClick = () => {
    navigate("/myBookings");
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Payment Cancelled
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Sorry, your payment was cancelled.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
        Please contact our support team for assistance.
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", alignItems: "center" }}
      >
        Click here to view your bookings:
        <Button onClick={handleMyBookingsClick} sx={{ marginLeft: "0.5rem" }}>
          My Bookings
        </Button>
      </Typography>
    </Container>
  );
};

export default StripePaymentCancel;

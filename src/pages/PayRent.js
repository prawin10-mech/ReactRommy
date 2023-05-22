import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../utils/ToastOptions";

import axios from "axios";

const PayRent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [stripeLoading, setStripeLoading] = useState(null);
  const [paypalLoading, setPaypalLoading] = useState(null);
  const [cashLoading, setCashLoading] = useState(null);
  const token = localStorage.getItem("token");

  const getMyBookedProperty = async () => {
    const { data } = await axios.get(
      `https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad/${id}`,
      { headers: { Authorization: token } }
    );
    setProperty(data);
  };

  const payWithCardHandler = async (bookingId) => {
    try {
      setStripeLoading(true);
      const { data } = await axios.post(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad/stripe/create-pay-booking-checkout-session",
        {
          bookingId,
          successUrl: `http://localhost:3000/myBookings/aboutBooking/${bookingId}`,
          cancelUrl: "https://example.cancel",
        },
        { headers: { Authorization: token } }
      );
      window.open(data.paymentUrl, "_blank", "width=600,height=600");
    } catch (err) {
      console.log(err);
    } finally {
      setStripeLoading(false);
    }
  };

  const payWithPaypalHandler = async (bookingId) => {
    try {
      setPaypalLoading(true);
      const { data } = await axios.post(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad/paypal/create-payment-link",
        { bookingId },
        { headers: { Authorization: token } }
      );
      window.open(data.paymentUrl, "_blank", "width=600,height=600");
    } catch (err) {
      console.log(err);
    } finally {
      setPaypalLoading(false);
    }
  };

  const payWithCashHandler = async (bookingId) => {
    try {
      setCashLoading(true);
      const confirmed = window.confirm(
        "Please confirm that you want to pay cash to the landlord"
      );

      if (confirmed) {
        const { data } = await axios.post(
          "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad/pay-cash",
          { bookingId },
          { headers: { Authorization: token } }
        );

        navigate(`/myBookings/aboutBooking/${bookingId}`);

        console.log(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setCashLoading(false);
    }
  };

  useEffect(() => {
    getMyBookedProperty();
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{ maxWidth: 600, margin: "auto" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Payment details
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Typography>Property & quantity</Typography>
          <Typography>
            {property?.quantity} {property?.ad.type}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Typography>Rent type</Typography>
          <Typography>{property?.ad?.preferedRentType}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Typography>Rent period</Typography>
          <Typography>
            1 {property?.rentType && property.rentType.slice(0, -2)}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Typography>Total Rent fee</Typography>
          <Typography>
            AED {property?.ad?.monthlyPrice + 0.1 * property?.ad?.monthlyPrice}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Typography>VAT</Typography>
          <Typography>(5%) AED {0.05 * property?.ad?.monthlyPrice}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Typography>Service fee</Typography>
          <Typography>(3%) AED {0.03 * property?.ad?.monthlyPrice}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          <Typography sx={{ fontWeight: 700 }}>Total</Typography>
          <Typography sx={{ fontWeight: 700 }}>
            AED{" "}
            {0.0331 * property?.ad?.monthlyPrice +
              0.05 * property?.ad?.monthlyPrice +
              property?.ad?.monthlyPrice +
              0.1 * property?.ad?.monthlyPrice}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: 15 }}
          onClick={() => {
            payWithCardHandler(property?.id);
          }}
          disabled={stripeLoading}
        >
          {stripeLoading ? (
            <CircularProgress size={20} color="secondary" />
          ) : (
            "Pay with Credit or Debit card"
          )}
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: 15 }}
          onClick={() => {
            payWithPaypalHandler(property?.id);
          }}
          disabled={paypalLoading}
        >
          {paypalLoading ? (
            <CircularProgress size={20} color="secondary" />
          ) : (
            "Pay with Paypal"
          )}
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: 15 }}
          onClick={() =>
            toast.success(
              "Payment with Roomy Finder Card is coming soon!",
              toastOptions
            )
          }
        >
          Pay with RoomyFinder Card
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ borderRadius: 15 }}
          onClick={() => payWithCashHandler(property.id)}
          disabled={cashLoading}
        >
          {cashLoading ? (
            <CircularProgress size={20} color="secondary" />
          ) : (
            "Pay Cash at Property"
          )}
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default PayRent;

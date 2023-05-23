import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { toastOptions } from "../utils/ToastOptions";
import axios from "axios";
import { baseUrl } from "../helper";

const PayRent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [stripeLoading, setStripeLoading] = useState(null);
  const [paypalLoading, setPaypalLoading] = useState(null);
  const [cashLoading, setCashLoading] = useState(null);
  const token = localStorage.getItem("token");

  const baseURL =
    "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad";

  const getMyBookedProperty = async () => {
    const { data } = await axios.get(`${baseURL}/${id}`, {
      headers: { Authorization: token },
    });
    setProperty(data);
  };

  const payWithCardHandler = async (bookingId) => {
    try {
      setStripeLoading(true);
      const { data } = await axios.post(
        `${baseURL}/stripe/create-pay-booking-checkout-session`,
        {
          bookingId,
          successUrl: `${baseUrl}/myBookings/aboutBooking/${bookingId}`,
          cancelUrl: `${baseUrl}/payment/cancel`,
        },
        { headers: { Authorization: token } }
      );
      window.location.href = data.paymentUrl;
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
        `${baseURL}/paypal/create-payment-link`,
        { bookingId },
        { headers: { Authorization: token } }
      );
      window.location.href = data.paymentUrl;
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
          `${baseURL}/pay-cash`,
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
    if (id) {
      getMyBookedProperty();
    }
  }, [id]);

  const totalRentFee = useMemo(() => {
    if (property) {
      return property.ad.monthlyPrice + 0.1 * property.ad.monthlyPrice;
    }
    return 0;
  }, [property]);

  const vat = useMemo(() => {
    if (property) {
      return 0.05 * property.ad.monthlyPrice;
    }
    return 0;
  }, [property]);

  const serviceFee = useMemo(() => {
    if (property) {
      return 0.03 * property.ad.monthlyPrice;
    }
    return 0;
  }, [property]);

  const total = useMemo(() => {
    if (property) {
      return (
        0.0331 * property.ad.monthlyPrice +
        0.05 * property.ad.monthlyPrice +
        property.ad.monthlyPrice +
        0.1 * property.ad.monthlyPrice
      );
    }
    return 0;
  }, [property]);

  return (
    <>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Payment details
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: 600, margin: "auto" }}
        justifyContent="center"
        alignItems="center"
      >
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
            <Typography>AED {totalRentFee}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Typography>VAT</Typography>
            <Typography>(5%) AED {vat}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Typography>Service fee</Typography>
            <Typography>(3%) AED {serviceFee}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="space-between">
            <Typography sx={{ fontWeight: 700 }}>Total</Typography>
            <Typography sx={{ fontWeight: 700 }}>AED {total}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ borderRadius: 15 }}
            onClick={() => payWithCardHandler(property?.id)}
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
            onClick={() => payWithPaypalHandler(property?.id)}
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
            onClick={() => payWithCashHandler(property?.id)}
            disabled={cashLoading}
          >
            {cashLoading ? (
              <CircularProgress size={20} color="secondary" />
            ) : (
              "Pay Cash at Property"
            )}
          </Button>
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default PayRent;

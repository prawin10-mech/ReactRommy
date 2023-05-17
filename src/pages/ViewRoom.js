import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Card,
  CardMedia,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import { Carousel } from "react-responsive-carousel";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { UserActions } from "../store/User";

const ViewRoom = () => {
  const token = localStorage.getItem("token");
  const myBookings = useSelector((state) => state.user.myBookings);
  const { id } = useParams();
  const [value, setValue] = useState(null);
  const [preferredRentType, setPreferredRentType] = useState("Monthly");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );
  const rooms = useSelector((state) => state.search.availableRooms);
  const room = rooms.find((room) => room.id === id);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setPreferredRentType(e.target.value);
  };

  const handleOpenCalendar = () => {
    setIsOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsOpen(false);
  };

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  let checkOutDate = new Date(selectedDate);
  let totalDuration;
  let formattedCheckOutDate;

  if (preferredRentType === "Monthly") {
    checkOutDate.setMonth(checkOutDate.getMonth() + 1);
    totalDuration = 1;
  } else if (preferredRentType === "Weekly") {
    checkOutDate.setDate(checkOutDate.getDate() + 7);
    totalDuration = Math.ceil(
      (checkOutDate - new Date(selectedDate)) / (1000 * 60 * 60 * 24 * 7)
    );
  } else if (preferredRentType === "Daily") {
    checkOutDate.setDate(checkOutDate.getDate() + 1);
    totalDuration = Math.ceil(
      (checkOutDate - new Date(selectedDate)) / (1000 * 60 * 60 * 24)
    );
  }
  const toastOptions = {
    autoClose: 3000,
    closeButton: true,
    position: "bottom-right",
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  formattedCheckOutDate = checkOutDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleBookRoom = async () => {
    if (room.preferedRentType !== preferredRentType) {
      toast.error(
        `Please choose rent type as ${room.preferedRentType}`,
        toastOptions
      );
    } else {
      const obj = {
        quantity: totalDuration,
        adId: room._id,
        rentType: preferredRentType,
        checkIn: selectedDate,
        checkOut: formattedCheckOutDate,
      };
      const isAlreadyBooked = myBookings.filter(
        (booking) => booking.ad._id === room._id
      )[0];

      if (isAlreadyBooked?._id === room?._id) {
        const { data } = await axios.post(
          "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad",
          obj,
          { headers: { Authorization: token } }
        );
        if (data) {
          toast.success(
            "Property booked successfully please wait until it confirms"
          );
        }
        console.log(data);
      } else {
        toast.error(
          "You have already booked this AD. Wait for the landlord reply",
          toastOptions
        );
      }
    }
  };

  return (
    <Box sx={{ mx: "auto", maxWidth: "800px", my: 3 }}>
      <Card
        sx={{
          display: "flex",
          bgcolor: "#f1f1f2",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Carousel autoPlay>
          {room.images.map((image, index) => (
            <CardMedia
              component="img"
              sx={{
                width: { xs: "100%", md: "50%" },
                maxHeight: { xs: "250px", sm: "300px", md: "300px" },
                padding: "10px",
                borderRadius: "20px",
                display: "flex",
              }}
              image={image}
              alt={index}
            />
          ))}
        </Carousel>

        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">{room?.type} to Rent</Typography>
            <Typography variant="h4" sx={{ mt: 1 }}>
              {room?.monthlyPrice} AED
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Address
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {room?.address?.city}, {room?.address?.location}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Available {room?.quantity}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Taken {room?.quantityTaken}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Social Preferences
        </Typography>
        <Box sx={{}}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Cooking: {room.socialPreferences.cooking ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Visitors: {room?.socialPreferences?.visitors ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Drinking: {room?.socialPreferences?.drinking ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Smoking: {room?.socialPreferences?.smoking ? "Yes" : "No"}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Gender: {room?.socialPreferences?.gender}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            No. of peoples: {room?.socialPreferences?.numberOfPeople}
          </Typography>
          <Typography variant="body1">
            Nationality: {room?.socialPreferences?.nationality}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography variant="h6"></Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              label={"What type of Rent do you want?"}
              variant="outlined"
              select
              value={value}
              onChange={(e) => handleInputChange(e)}
              sx={{ width: "100%" }}
            >
              <MenuItem value="">Select an option</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Daily">Daily</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography>CheckIn: {selectedDate}</Typography>
            <Typography>Check Out: {formattedCheckOutDate}</Typography>
            {preferredRentType === "Monthly" && (
              <Typography>
                Total: {totalDuration} {totalDuration > 1 ? "Months" : "Month"}
              </Typography>
            )}
            {preferredRentType === "Weekly" && (
              <Typography>
                Total: {totalDuration} {totalDuration > 1 ? "Weeks" : "Week"}
              </Typography>
            )}
            {preferredRentType === "Daily" && (
              <Typography>
                Total: {totalDuration} {totalDuration > 1 ? "Days" : "Day"}
              </Typography>
            )}
          </Grid>
          <Grid item sx={{ mb: 5 }}>
            <Button onClick={handleOpenCalendar}>Change Check</Button>
            {isOpen && (
              <DatePicker
                onClose={handleCloseCalendar}
                renderInput={(params) => <TextField {...params} />}
              />
            )}
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant={"contained"}
            color="success"
            onClick={handleBookRoom}
          >
            Book now
          </Button>
        </Grid>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default ViewRoom;

import React, { useEffect, useState } from "react";
import FloatingImage from "../components/FloatingImage";
import Search from "../components/Search";
import CityCarousel from "../components/UI/CityCarousel";
import Rooms from "../components/Rooms";
import { Typography, Box, Grid } from "@mui/material";
import AddWithCarousel from "../components/Card/CardForOurServics";
import MainBgImg from "../assets/mainBackground.jpg";
import axios from "axios";
import Footer from "../components/Footer";

import { SearchActions } from "../store/Search";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/User";

import CarouselWithMultipleImage from "../components/CarouselWithMultipleImage";

const OurServices = () => {
  const [propertyAddAvilableRoom, setpropertyAddAvilableRoom] = useState([]);
  const [PartitionAddAvilableRoom, setPartitionAddAvilableRoom] = useState([]);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const getAffordableRoomData = async () => {
    const { data } = await axios.post(
      `http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available`,
      { countryCode: "AE" }
    );
    dispatch(SearchActions.availableRooms(data));
    axios
      .post(
        "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available",
        { countryCode: "AE" }
      )
      .then((res) => {
        setpropertyAddAvilableRoom(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPartitionRoomData = () => {
    const { data } = axios.post(
      "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/roommate-ad/available",
      { countryCode: "AE" }
    );
    dispatch(SearchActions.availableRooms(data));
    setPartitionAddAvilableRoom(data);
  };

  const fetchMyBookings = async () => {
    const { data } = await axios.get(
      "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad",
      { headers: { Authorization: token } }
    );
    dispatch(UserActions.myBookings(data));
  };

  useEffect(() => {
    getAffordableRoomData();
    getPartitionRoomData();
    fetchMyBookings();
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "90vh",
          backgroundImage: `url(${MainBgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginBottom: "50px",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={8}>
            <Box sx={{ pt: { xs: 10, md: 16 }, pl: { xs: 0, md: 2 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  mb: 3,
                  pl: { xs: 0, md: 3 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Find your perfect sharing space.
              </Typography>
              <Search />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <FloatingImage />
          </Grid>
        </Grid>
        <Box sx={{ pt: { xs: 6, md: 10 } }}>
          <CityCarousel />
          <Rooms />
          <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
            <Box sx={{ mb: 1 }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Top affordable sharing option in UAE
              </Typography>
              <CarouselWithMultipleImage
                propertyAddAvilableRoom={propertyAddAvilableRoom}
              />
            </Box>

            <Box sx={{ mt: 1, mb: 2 }}>
              <Typography variant="h5" sx={{ my: 1 }}>
                Partitions for rent in Sharjah
              </Typography>
              <CarouselWithMultipleImage
                PartitionAddAvilableRoom={PartitionAddAvilableRoom}
              />
            </Box>
            <AddWithCarousel />
          </Box>
          {/* <AvailableRooms /> */}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default OurServices;

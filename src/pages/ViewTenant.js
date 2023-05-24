import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Card,
  CardMedia,
  Button,
  Avatar,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Cookies from "js-cookie";
import DummyImage from "../assets/demo.jpg";
import { SearchActions } from "../store/Search";
import TopBackground from "../components/postPropertyComponents/TopBackground";
import BottomBackground from "../components/postPropertyComponents/BottomBackground";
import DummyMaleUserImage from "../assets/dummyUserImage.jpg";
import DummyFemaleUserImage from "../assets/dummyFemaleUserImage.jpg";

const ViewRoom = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let user = Cookies.get("user");
  if (user) {
    user = JSON.parse(user);
  }

  const rooms = useSelector((state) => state.search.availableRooms);
  const [room, setRoom] = useState(rooms.find((room) => room.id === id));

  const getPartitionRoomData = async () => {
    const { data } = await axios.post(
      "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/roommate-ad/available",
      { countryCode: "AE" }
    );
    dispatch(SearchActions.availableRooms(data));

    setRoom(data.find((room) => room.id === id));
  };

  useEffect(() => {
    getPartitionRoomData();
  }, []);

  return (
    <Grid sx={{ overFlowX: "hidden" }}>
      <TopBackground />
      <Box
        sx={{
          mx: "auto",
          maxWidth: "700px",
          my: 3,
          px: 1,
          overFlowX: "hidden",
        }}
      >
        <Card
          sx={{
            display: "flex",
            bgcolor: "#f1f1f2",
            width: "100%",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            mb: 3,
          }}
        >
          {room && (
            <Box
              sx={{
                width: { xs: "100%", sm: "60%" },
                height: "200px",
                display: "flex",
                alignItems: "center",
                p: 2,
                my: 5,
              }}
            >
              <Carousel autoPlay>
                {room?.images.length > 0 ? (
                  room.images.map((image, index) => (
                    <CardMedia
                      key={index}
                      component="img"
                      height="100%"
                      width="100%"
                      image={image}
                      alt={`available room ${index}`}
                      sx={{
                        objectFit: "cover",
                        objectPosition: "center",
                        mt: 5,
                        width: "300px",
                        height: "250px",
                        borderRadius: "15px",
                      }}
                    />
                  ))
                ) : (
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      maxHeight: { xs: "250px", sm: "300px", md: "300px" },
                      padding: "10px",
                      borderRadius: "20px",
                      display: "flex",
                    }}
                    image={DummyImage}
                    alt={"DummyImage"}
                  />
                )}
              </Carousel>
            </Box>
          )}

          {room && (
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Box
                gap={1}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "row", sm: "column" },
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ gap: "2" }}>
                  <Avatar sx={{ width: 80, height: 80 }}>
                    {room?.profilePicture ? (
                      <img src={room.profilePicture} alt="Room Profile" />
                    ) : (
                      <img
                        src={
                          room?.poster?.gender === "Male"
                            ? DummyMaleUserImage
                            : DummyFemaleUserImage
                        }
                        alt="Dummy User"
                      />
                    )}
                  </Avatar>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>
                    {room?.poster?.firstName} {room?.poster?.lastName}
                  </Typography>
                  <Typography>{room?.action}</Typography>
                  <Typography>
                    {room?.address?.buildingName
                      ? room?.address?.buildingName
                      : "N/A"}
                    , {room?.address?.location}, {room?.address?.city}
                  </Typography>
                </Box>
                <Box
                //gap={2}
                //   sx={{
                //     display: "flex",
                //     flexDirection: { xs: "row", sm: "column" },
                //   }}
                >
                  <Button variant="contained">Chat</Button>
                  <Typography sx={{ mt: 1, fontWeight: 700 }}>
                    {room?.budget} AED Budget
                  </Typography>
                </Box>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              ></Box>
            </Box>
          )}
        </Card>

        <Box mb={5}>
          <Typography fontWeight={700} fontSize={"1.3rem"}>
            About Me
          </Typography>
          <Grid container spacing={2} sx={{ mx: "auto", px: 1 }}>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Age
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.age}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Occupation
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.occupation}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Sign
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.astrologicalSign}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Gender
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.gender}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Nationality
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.nationality}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Lifestyles:
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.lifeStyle}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                languages
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.languages.join(",")}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box mb={5}>
          <Typography fontWeight={700} fontSize={"1.3rem"}>
            Preffered Roommate
          </Typography>
          <Grid container spacing={2} sx={{ mx: "auto" }}>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Gender
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.gender}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Nationality
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.nationality}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Lifestyles:
              </Typography>
              <Typography sx={{ fontWeight: "600" }}>
                {room?.aboutYou?.lifeStyle}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography fontWeight={700} fontSize={"1.3rem"} mb={2}>
            Housing Preferences
          </Typography>
          <Grid container spacing={2} alignItems={"center"} sx={{ mx: "auto" }}>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Pets
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: room?.socialPreferences?.pets ? "green" : "red",
                }}
              >
                {room?.socialPreferences?.pets === true ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Smoking
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: room?.socialPreferences?.smoking ? "green" : "red",
                }}
              >
                {room?.socialPreferences?.smoking === true ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Party:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: room?.socialPreferences?.friendParty ? "green" : "red",
                }}
              >
                {room?.socialPreferences?.friendParty === true ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Drinking:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: room?.socialPreferences?.drinking ? "green" : "red",
                }}
              >
                {room?.socialPreferences?.drinking === true ? "Yes" : "No"}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Visitors:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  color: room?.socialPreferences?.visitors ? "green" : "red",
                }}
              >
                {room?.socialPreferences?.visitors === true ? "Yes" : "No"}
              </Typography>
            </Grid>
          </Grid>

          <Box mb={5}>
            <Typography fontWeight={700} fontSize={"1.3rem"}>
              Amenities
            </Typography>
            <Grid container spacing={2} sx={{ mx: "auto" }}>
              {room?.amenities?.map((data) => {
                return (
                  <Grid item xs={4}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {data}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box mb={5}>
            <Typography fontWeight={700} fontSize={"1.3rem"}>
              Interests
            </Typography>
            <Grid container spacing={2} sx={{ mx: "auto" }}>
              {room?.interests?.map((data) => {
                return (
                  <Grid
                    item
                    xs={3}
                    sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem" } }}
                  >
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {data}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
      <BottomBackground />
    </Grid>
  );
};

export default ViewRoom;

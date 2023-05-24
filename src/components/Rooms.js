import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Grid, Paper } from "@mui/material";
import { roomsTypeActions } from "../store/Rooms";
import RoomBuilding from "../assets/roomBuilding.png";
import RoomWomen from "../assets/roomWomen.png";

const Rooms = () => {
  const dispatch = useDispatch();
  const activeLink = useSelector((state) => state.room.roomsType);

  const handleProperty = () => {
    dispatch(roomsTypeActions.propertyAds());
  };

  const handleRoomMate = () => {
    dispatch(roomsTypeActions.roommateAds());
  };

  return (
    <Grid container justifyContent="center" mt={10}>
      <Grid item sx={{ display: "flex" }}>
        <img
          src={RoomBuilding}
          alt="propertyAds"
          width={200}
          height={160}
          style={{ marginBottom: 10 }}
        />
        <Paper
          elevation={3}
          onClick={handleRoomMate}
          sx={{
            p: 2,
            height: 240,
            width: 240,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: activeLink === "propertyAds" ? "white" : undefined,
            border:
              activeLink === "propertyAds" ? "2px solid purple" : undefined,
            borderRadius: "md",
            boxShadow: "0 0 20px 5px rgba(0,0,0,0.75)",
          }}
        >
          <Typography variant="h6" component="p">
            Find Room
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper
          elevation={3}
          onClick={handleProperty}
          sx={{
            p: 2,
            height: 240,
            width: 240,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: activeLink === "roommateAds" ? "white" : undefined,
            border:
              activeLink === "roommateAds" ? "2px solid purple" : undefined,
            borderRadius: "md",
            boxShadow: "0 0 20px 5px rgba(0,0,0,0.75)",
          }}
        >
          <img
            src={RoomWomen}
            alt="roommateAds"
            width={200}
            height={240}
            style={{ marginBottom: 10 }}
          />
          <Typography variant="h6" component="p">
            Find Roommate
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Rooms;

import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SingleCardCarousel from "../components/Card/SingleCardCarousel";

import CustomizeSelectBox from "../components/MUIcomponent/CustomizeSelectBox";
import IconButtonMUI from "../components/MUIcomponent/IconButtonMUI";

import AllAvailableRooms from "../components/rooms/AllAvailableRooms";
import axios from "axios";
import AdvancedSearch from "../components/rooms/AdvancedSearch";
import { useSelector, useDispatch } from "react-redux";
import { UserActions } from "../store/User";
import { SearchActions } from "../store/Search";
import {
  citydata,
  dubaiCities,
  abuDahbiCities,
  sharjahCities,
  rasAlkimaCities,
  ummAlQuwainCities,
  ajmanCities,
  jeddahCities,
  meccaCities,
  riyadhCities,
} from "../utils/citydata";

const SecondPage = () => {
  const city = useSelector((state) => state.search.searchText);
  const location = useSelector((state) => state.search.location);
  const availableRooms = useSelector((state) => state.search.availableRooms);
  const searchType = useSelector((state) => state.search.searchType);
  const dispatch = useDispatch();
  const [locationData, setLocationData] = useState([]);
  const token = localStorage.getItem("token");

  const fetchMyBookings = async () => {
    if (token) {
      const { data } = await axios.get(
        "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/bookings/property-ad",
        { headers: { Authorization: token } }
      );
      dispatch(UserActions.myBookings(data));
    }
  };

  const getPartitionRoomData = async () => {
    const { data } = await axios.post(
      "https://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available",
      { countryCode: "AE" }
    );
    dispatch(SearchActions.availableRooms(data));
  };

  useEffect(() => {
    fetchMyBookings();
    //getPartitionRoomData();
  }, []);

  const viewArrayData = () => {
    if (city === "Dubai") {
      setLocationData(dubaiCities);
    } else if (city === "Abu Dhabi") {
      setLocationData(abuDahbiCities);
    } else if (city === "Sharjah") {
      setLocationData(sharjahCities);
    } else if (city === "Ras Al Kima") {
      setLocationData(rasAlkimaCities);
    } else if (city === "Umm Al-Quwain") {
      setLocationData(ummAlQuwainCities);
    } else if (city === "Ajman") {
      setLocationData(ajmanCities);
    } else if (city === "Riyadh") {
      setLocationData(riyadhCities);
    } else if (city === "Mecca") {
      setLocationData(meccaCities);
    } else if (city === "Jeddah") {
      setLocationData(jeddahCities);
    } else {
      setLocationData([]);
    }
  };
  useEffect(() => {
    viewArrayData();
  }, [city]);

  return (
    <>
      <Box
        xs={12}
        sx={{
          width: "100%",
          backgroundImage:
            " linear-gradient(to right, #ec77ab 0%, #7873f5 100%);",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SingleCardCarousel
          boxStyle={{ width: "400px", py: 3 }}
          imageStyle={{ width: "100%", height: "140px", borderRadius: "16px" }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            sx={{ backgroundColor: "#99f099", width: "100%" }}
          >
            <AdvancedSearch />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Box
              xs={12}
              sx={{
                display: "flex",
                py: 3,
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                xs={12}
                sx={{
                  display: "flex",
                  px: 3,
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CustomizeSelectBox
                  name={"Type"}
                  fn="propertyType"
                  values={
                    searchType === "property"
                      ? [
                          "All",
                          "Bed",
                          "Partition",
                          "Master Room",
                          "Room",
                          "Mix",
                        ]
                      : ["All", "Studio", "Appartment", "House"]
                  }
                />
                <CustomizeSelectBox
                  name={"Rent"}
                  fn="PreferredRentType"
                  values={["All", "Monthly", "Weekly", "Daily"]}
                />
                <CustomizeSelectBox
                  name={"City"}
                  fn="searchText"
                  values={[...citydata]}
                />
                <CustomizeSelectBox
                  mainbox={{ m: 2 }}
                  name={"Area"}
                  values={[...locationData]}
                  fn="location"
                />

                <CustomizeSelectBox
                  name={"Gender"}
                  fn="gender"
                  values={["Male", "Female", "Mix"]}
                />

                <IconButtonMUI IconButtonsx={{ mt: 1 }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  px: 6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* <CheckboxLabels label={"Show commercial properties only"} /> */}
                {/* <PositionedMenu /> */}
              </Box>
            </Box>
            <hr />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  px: 6,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="h5">
                    {" "}
                    {searchType === "property"
                      ? `Apartments for Rent in ${city}`
                      : `Roommates in ${city}`}
                  </Typography>
                  <Typography variant="subtitle2">
                    {" "}
                    {availableRooms.length} results
                  </Typography>
                </Box>
                {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <PositionedMenu />
                  <IconLabelButtons
                    icon={FavoriteBorderIcon}
                    name={"Save Search"}
                  />
                </Box> */}
              </Box>
            </Box>
            <Box>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  sx={{ backgroundColor: "#fffff5", width: "100%" }}
                >
                  <AllAvailableRooms />
                </Grid>
                <Grid item xs={12} sm={4} sx={{ backgroundColor: "#fffff5" }}>
                  Adds
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {/* <Box sx={{ width: "25%", backgroundColor: "#00ff00" }}>Left Side</Box>
        <Box sx={{ width: "75%", backgroundColor: "#00ffff" }}></Box> */}
      </Box>
    </>
  );
};

export default SecondPage;

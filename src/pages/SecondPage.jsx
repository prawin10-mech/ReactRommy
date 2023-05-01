import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import SingleCardCarousel from "../components/Card/SingleCardCarousel";

import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import CustomizeSelectBox from "../components/MUIcomponent/CustomizeSelectBox";
import IconButton from "../components/MUIcomponent/IconButtonMUI";
import IconButtonMUI from "../components/MUIcomponent/IconButtonMUI";
import ChipsArray from "../components/MUIcomponent/ChipsArray";
import CheckboxLabels from "../components/MUIcomponent/CheckBox";
import PositionedMenu from "../components/MUIcomponent/Menu";
import MediaControlCard from "../components/MUIcomponent/ImageCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconLabelButtons from "../components/MUIcomponent/ButtonMuiWithIcon";

import AllAvailableRooms from "../components/rooms/AllAvailableRooms";
import AdvancedSearch from "../components/rooms/AdvancedSearch";
import { useSelector } from "react-redux";

const SecondPage = () => {
  const city = useSelector((state) => state.search.location);
  const availableRooms = useSelector((state) => state.search.availableRooms);
  // chip=============

  // ========================
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
          // backgroundColor: "#00f0f0",
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
                  mainbox={{ m: 2 }}
                  name={"Room"}
                  values={["property", "roommate"]}
                  fn="roomSearch"
                />
                <ChipsArray />
                <CustomizeSelectBox
                  name={"Apartment"}
                  fn="propertyType"
                  values={["Bed", "Partition", "Master Room", "Room", "Mix"]}
                />
                <CustomizeSelectBox
                  name={"Location"}
                  fn="location"
                  values={["Dubai", "Saudi Arabia"]}
                />
                <CustomizeSelectBox
                  name={"Price"}
                  fn="price"
                  values={[
                    "100-500",
                    "500-1000",
                    "1000-1500",
                    "1500-2000",
                    "+2000",
                  ]}
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
                <CheckboxLabels label={"Show commercial properties only"} />
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
                    Apartments for Rent in {city}
                  </Typography>
                  <Typography variant="subtitle2">
                    {" "}
                    {availableRooms.length} results
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <PositionedMenu />
                  <IconLabelButtons
                    icon={FavoriteBorderIcon}
                    name={"Save Search"}
                  />
                </Box>
              </Box>
              {/* <Box>
                <Grid container>
                  <Grid item></Grid>
                </Grid>
              </Box> */}
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

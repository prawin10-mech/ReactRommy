import React, { useEffect, useState } from "react";
import FloatingImage from "../components/FloatingImage";
import Search from "../components/Search";
import CityCourosol from "../components/UI/CityCourosol";
import Rooms from "../components/Rooms";
import { Stack, Typography, Box } from "@mui/material";
import AddWithCarasol from "../components/Card/CardForOurServics";
import axios from "axios";
import { SearchActions } from "../store/Search";
import { useDispatch } from "react-redux";

const OurServices = () => {
  const dispatch = useDispatch();
  const [propertyAddAvilableRoom, setpropertyAddAvilableRoom] = useState([]);
  const getAffordableRoomData = async () => {
    const Response = await axios.post(
      "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available",
      {
        countryCode: "AE",
      }
    );
    setpropertyAddAvilableRoom(Response.data);

    const { data } = await axios.post(
      `http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available`,
      { countryCode: "AE" }
    );
    dispatch(SearchActions.availableRooms(data));
  };
  useEffect(() => {
    getAffordableRoomData();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-between !important">
        <div className="flex flex-col justify-between !important">
          <div className="flex justify-around">
            <div className="pt-16">
              <p className="text-4xl font-bold text-white pl-10">
                Find your perfect sharing space.
              </p>
              <div className="pt-5">
                <Search />
              </div>
            </div>
            <FloatingImage />
          </div>
          <div>
            <CityCourosol />
            <Rooms />
            <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
              <Stack sx={{ my: 1 }}>
                <Typography variant="h5" sx={{ my: 1 }}>
                  Top affordable sharing option in UAE
                </Typography>
                {/* <CarouselWithMultipleImage /> */}
              </Stack>

              <Stack sx={{ mt: 1, mb: 2 }}>
                <Typography variant="h5" sx={{ my: 1 }}>
                  Partitions for rent in Sharjsh
                </Typography>
                {/* <CarouselWithMultipleImage propertyAddAvilableRoom={propertyAddAvilableRoom} /> */}
              </Stack>
              <AddWithCarasol />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

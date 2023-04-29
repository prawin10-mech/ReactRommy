import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import AvailableRoom from "./AvaibleRoom";

const AllAvailableRooms = () => {
  const availableRooms = useSelector((state) => state.search.availableRooms);

  const allAvailableRoomsData =
    availableRooms.length > 0 ? (
      availableRooms.map((room, index) => {
        return <AvailableRoom room={room} key={index} />;
      })
    ) : (
      <p>No Results Found</p>
    );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        "& > div": {
          width: "100%",
          "@media (min-width: 600px)": {
            width: "100%",
          },
        },
      }}
    >
      {allAvailableRoomsData}
    </Box>
  );
};

export default AllAvailableRooms;

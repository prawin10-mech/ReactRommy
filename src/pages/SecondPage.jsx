import { Box } from "@mui/material";
import React from "react";
import SingleCardCarousel from "../components/Card/SingleCardCarousel";

const SecondPage = () => {
  return (
    <>
      <Box
        xs={12}
        sx={{
          width: "100%",
          backgroundColor: "#00f0f0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SingleCardCarousel
          boxStyle={{ width: "400px", py: 3 }}
          imageStyle={{ width: "100%", height: "140px" }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#00f0f0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "20%", backgroundColor: "#00ff00" }}>Left Side</Box>
        <Box sx={{ width: "80%", backgroundColor: "#00ffff" }}>
          
          right Side
        </Box>
      </Box>
    </>
  );
};

export default SecondPage;

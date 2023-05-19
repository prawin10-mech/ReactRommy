import React from "react";
import topBackground from "../../assets/topBackground.png";
import { Grid, Box, useTheme } from "@mui/material";

const Background = () => {
  const theme = useTheme();

  const imageHeight = {
    height: "17vh",
    [theme.breakpoints.down("md")]: {
      height: "10vh",
    },
    [theme.breakpoints.down("sx")]: {
      height: "7vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "17vh",
    },
    [theme.breakpoints.up("xl")]: {
      height: "22vh",
    },
  };

  const imgStyles = {
    width: "100vw",
    ...imageHeight,
    userDrag: "none",
  };

  return (
    <Grid sx={{ overflow: "hidden" }}>
      <Box
        component="img"
        src={topBackground}
        alt="Top Background"
        sx={imgStyles}
      />
    </Grid>
  );
};

export default Background;

import React from "react";
import bottomBackground from "../../assets/bottomBackground.png";
import { Grid, Box, useTheme } from "@mui/material";

const BottomBackground = () => {
  const theme = useTheme();

  const imageHeight = {
    height: "10vh",
    [theme.breakpoints.down("md")]: {
      height: "6vh",
    },
    [theme.breakpoints.down("sx")]: {
      height: "4vh",
    },
    [theme.breakpoints.up("lg")]: {
      height: "10vh",
    },
    [theme.breakpoints.up("xl")]: {
      height: "13vh",
    },
  };

  return (
    <Grid sx={{ overflow: "hidden" }}>
      <Box
        component="img"
        src={bottomBackground}
        alt="Top Background"
        sx={{ width: "100%", ...imageHeight }}
      />
    </Grid>
  );
};

export default BottomBackground;

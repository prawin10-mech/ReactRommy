import React from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import FooterMobile from "../assets/footerMobile.png";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import FooterBottom from "../assets/FooterBottom.png";
import { footerSections } from "../utils/FooterData";

const Footer2 = () => {
  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: "#F7F7F7",
          display: "flex",
          paddingY: "3%",
          flexDirection: "column",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <NavLink to={"/"}>
            <img src={logo} alt="Roomy finder logo" width={70} />
          </NavLink>
          <Box
            sx={{
              display: "flex",
              ml: 2,
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bolder", color: "purple" }}
            >
              Roomy
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bolder", color: "orange" }}
            >
              Finder
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          {footerSections.map((section) => (
            <Grid item key={section.title}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  {section.title}
                </Typography>
                <Box>
                  {section.items.map((item, index) => (
                    <Typography key={index} variant="subtitle2" sx={{ mt: 1 }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "700" }}>
                Get the app
              </Typography>
              <Box>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>
                  <Box item>
                    <img src={AppStore} alt="App Store" width={120} />
                  </Box>
                  <Box item>
                    <img src={GooglePlay} alt="Google Play" width={120} />
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* <Box>
            <img
              src={FooterMobile}
              alt="Footer mobile"
              width="20%"
              sx={{ display: { xs: "block", md: "none" } }}
            />
          </Box> */}
        </Grid>
      </Toolbar>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          backgroundImage: `url(${FooterBottom})`,
          color: "#fff",
        }}
      >
        T&C
      </Box>
    </>
  );
};

export default Footer2;

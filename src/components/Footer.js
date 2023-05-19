import React from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import FooterMobile from "../assets/footerMobile.png";
import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";
import FooterBottom from "../assets/FooterBottom.png";
import { footerSections } from "../utils/FooterData";

const Footer = () => {
  return (
    <Grid sx={{ display: "block" }}>
      <Toolbar
        sx={{
          backgroundColor: "#F7F7F7",
          display: "flex",
          paddingY: "3%",
          flexDirection: "column",
          width: { xs: "100%", sm: "85%" },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{
            marginBottom: "10px",
            justifyContent: "flex-start",
          }}
        >
          <Grid item>
            {" "}
            <NavLink to={"/"}>
              <img src={logo} alt="Roomy finder logo" width={70} />
            </NavLink>
          </Grid>
          <Grid item>
            {" "}
            <Box
              sx={{
                display: "flex",
                ml: 2,
                flexDirection: "column",
                justifyContent: "start",
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
        </Grid>
      </Toolbar>
      <Box
        sx={{
          backgroundColor: "#FAFAFA",
          backgroundImage: `url(${FooterBottom})`,
          color: "#fff",
          height: "30px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            bottom: "290px",
            height: "60%",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <img src={FooterMobile} alt="Footer mobile" width="20%" />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Footer;

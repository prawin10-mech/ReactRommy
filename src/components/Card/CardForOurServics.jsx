import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Stack,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
// import ImageCarousel55 from "./MultipleImages1";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "react-material-ui-carousel";
import CityCarousel2 from "../UI/CityCarousel2";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SingleCardCarousel from "./SingleCardCarousel";

const AddWithCarasol = (props) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            px: 6,
            pt: 1,
            pb: 4,
            backgroundImage:
              " linear-gradient(120deg, #d57eeb 0%, #fccb90 100%);",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              // backgroundColor: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // backgroundColor: "pink",
              p: 6,
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="h4" gutterBottom>
              Roommate looking for shared living in UAE
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;",
              }}
            >
              Chat!
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              py: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SingleCardCarousel
              boxStyle={{ width: "270px", height: "200px" }}
              imageStyle={{ width: "100%", height: "180px" }}
            />
          </Grid>
        </Grid>

        {props.smallcard && 
        <Box
          sx={{
            backgroundImage:
              "  linear-gradient(to right, #43e97b 0%, #38f9d7 100%);",
            p: 3,
            width: "70%",
            mt: "-40px",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" gutterBottom>
                Find Your home in Saaudi Arabia!
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" gutterBottom>
                Find Your home in Saaudi Arabia!
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <CityCarousel2 />
            </Grid>
          </Grid>
        </Box>
        }
      </Box>
    </>
  );
};

export default AddWithCarasol;

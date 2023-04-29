import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import peoples from "../../assets/GCSCorosol/peoples.png";
import GSCimage from "../../assets/GCSCorosol/GSCimage.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [peoples, GSCimage];

const SingleCardCarousel = (props) => {
  return (
    <Box sx={{ ...props.boxStyle }}>
      <Carousel>
        {images.map((item, i) => (
          <img src={item} alt="jhf" style={{ ...props.imageStyle }} />
        ))}
      </Carousel>
    </Box>
  );
};

export default SingleCardCarousel;

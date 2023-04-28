import React from 'react'
import { Box, Button, Grid, Typography, Container, Stack, Paper } from "@mui/material";
import Carousel from 'react-material-ui-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css";


const images = [
    "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%201",
    "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%202",
    "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%203",
    "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%204",
    "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%205",
    "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%206",
    "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%207",
    "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%208",
    "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%209",
    "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%2010",
    "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%2011",
    "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%2012",
  ];

const SingleCardCarousel = (props) => {
    console.log('PropsboxStyle',props.boxStyle);
  return (
    <Box sx={{ ...props.boxStyle}}>
    <Carousel>
      {
        images.map((item, i) => (
          <img src={item} alt='jhf' style={{...props.imageStyle}} />
        ))
      }
    </Carousel>
  </Box>
  )
}

export default SingleCardCarousel
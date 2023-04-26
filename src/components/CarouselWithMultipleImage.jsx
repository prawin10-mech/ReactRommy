import React, { useState } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Stack } from "react-bootstrap";

const images = [
    [
        "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%201",
        "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%202",
        "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%203",
        "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%204",
    ],
    [
        "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%205",
        "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%206",
        "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%207",
        "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%208",
        "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%209",
    ],
    [
        "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%2010",
        "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%2011",
        "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%2012",
        "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%2013",
        "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%2014",
    ],
    [
        "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%2015",
        "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%2016",
        "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%2017",
        "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%2015",
        "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%2019",
    ],
    [
        "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%2020",
        "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%2021",
        "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%2022",
        "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%2023",
    ],
    [
        "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%2024",
        "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%2025",
        "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%2026",
    ],
    [
        "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%2027",
        "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%2028",
        "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%2024",
    ],
    [
        "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%2025",
        "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image%2026",
        "https://via.placeholder.com/600x300/C70039/FFFFFF?text=Image%2027",
        "https://via.placeholder.com/600x300/581845/FFFFFF?text=Image%2028",
    ],
    [
        "https://via.placeholder.com/600x300/900C3F/FFFFFF?text=Image%2029",
        "https://via.placeholder.com/600x300/FFC300/FFFFFF?text=Image%2030",
        "https://via.placeholder.com/600x300/DAF7A6/FFFFFF?text=Image%2031",
    ],
];

const ImageCarousel1 = ({ images }) => {
    return (
        <Paper>
            {/* <Typography variant="h6">Image Carousel</Typography> */}
            <Carousel showArrows={false}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index}`} />
                    </div>
                ))}
            </Carousel>
        </Paper>
    );
};

export const MultipleImages0 = ({ images }) => {
    const [numImages, setNumImages] = useState(4);

    const handleLoadMore = () => {
        setNumImages(numImages + 4);
    };
    return (
        <ImageCarousel1 images={images.slice(0, numImages)} />
    );
};

const CarouselWithMultipleImage = ({ propertyAddAvilableRoom }) => {

    const imageSets = [];
    for (let i = 0; i < images.length; i += 4) {
        imageSets.push(images.slice(i, i + 4));
    }

    return (
        <Stack sx={{ p: 2, my: 2, mx: 1 }} spacing={2}>
            {/* <Grid container justifyContent="center">
                <Grid item xs={12} md={8}> */}
            <Carousel
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                emulateTouch={true}
                infiniteLoop={true}
            // renderArrowPrev={false}
            // renderArrowNext={false}
            >



{propertyAddAvilableRoom.map((imageSet, index) => (
  <div key={index}>
    <Grid container spacing={2} xs={12} sm={6} md={3}>
      {Array.isArray(imageSet.images) ? (
        imageSet.images.map((image, innerIndex) => (
          <Grid key={innerIndex} item xs={12} sm={6} md={3}>
            <MultipleImages0 images={image} />
          </Grid>
        ))
      ) : (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <MultipleImages0 images={[imageSet.images]} />
        </Grid>
      )}
      <Grid item>
        <Typography variant="subtitle2">
          {imageSet.address.appartmentNumber}
        </Typography>
        <Typography variant="subtitle2">
          AED {imageSet.address.monthlyPrice}
        </Typography>
      </Grid>
    </Grid>
  </div>
))}






                {/* {propertyAddAvilableRoom.map((imageSet, index) => (
                    <div key={index}>
                        <Grid container spacing={2} xs={12} sm={6} md={3}>
                        {Array.isArray(imageSet.images) && imageSet.images.length > 0 && imageSet.images.map((image, innerIndex) => (
   <Grid key={innerIndex} item xs={12} sm={6} md={3}>
       <MultipleImages0 images={image} />
   </Grid>
))}
                            <Grid item >
                                <Typography variant="subtitle2">
                                    {imageSet.address.appartmentNumber}
                                </Typography>
                                <Typography variant="subtitle2">
                                    AED {imageSet.address.monthlyPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                ))} */}
            </Carousel>
            
        </Stack>
    );
};

export default CarouselWithMultipleImage;
{/* {imageSet.images.length !== 0 ? imageSet.images.map((image, innerIndex) => (
    <Grid key={innerIndex} item xs={12} sm={6} md={3}>
        <MultipleImages0 images={image} />
    </Grid>
)) : "NO IMAGE "} */}
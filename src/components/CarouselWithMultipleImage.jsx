import React, { useState } from "react";
import { Grid, Typography, Paper, Box, Stack } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Stack } from "react-bootstrap";

const ImageCarousel1 = ({ images }) => {
  return (
    <Paper sx={{ height: "270px" }}>
      {images === [] && (
        <Carousel showArrows={false} dynamicHeight={false}>
          {images.map((image, index) => (
            <>
              <Box key={index}>
                <img src={image} alt="no img" style={{ height: "250px" }} />
              </Box>
            </>
          ))}
        </Carousel>
      )}
      <Carousel showArrows={false} dynamicHeight={false}>
        {images.map((image, index) => (
          <>
            <Box key={index}>
              <img
                src={image}
                alt={`img ${index}`}
                style={{ height: "250px" }}
              />
            </Box>
          </>
        ))}
      </Carousel>
    </Paper>
  );
};

export const MultipleImages0 = ({ images }) => {
  //  console.log("image",images);
  const [numImages, setNumImages] = useState(4);

  const handleLoadMore = () => {
    setNumImages(numImages + 4);
  };
  return <ImageCarousel1 images={images.slice(0, numImages)} />;
};

const CarouselWithMultipleImage = (props) => {
  const imageSets = [];
  if (props.PartitionAddAvilableRoom) {
    for (let i = 0; i < props.PartitionAddAvilableRoom.length; i += 4) {
      imageSets.push(props.PartitionAddAvilableRoom.slice(i, i + 4));
    }
  }
  if (props.propertyAddAvilableRoom) {
    for (let i = 0; i < props.propertyAddAvilableRoom.length; i += 4) {
      imageSets.push(props.propertyAddAvilableRoom.slice(i, i + 4));
    }
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
        {imageSets.map((imageSet, index) => (
          <div key={index}>
            <Grid container spacing={2}>
              {imageSet.map((value, id) =>
                Object.entries(value).map(([key, val]) => {
                  if (key === "images") {
                    if (val.length >= 0) {
                      return (
                        <Grid item xs={12} sm={6} md={3}>
                          <MultipleImages0 images={val} />
                        </Grid>
                      );
                    }
                  }
                })
              )}
            </Grid>
          </div>
        ))}
      </Carousel>
    </Stack>
  );
};

export default CarouselWithMultipleImage;

import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import GSCimage from "../../assets/GCSCorosol/GSCimage.png";
import apartments from "../../assets/GCSCorosol/apartments.png";
import peoples from "../../assets/GCSCorosol/peoples.png";
import RoomyFinder from "../../assets/GCSCorosol/RoomyFinder.png";

const images = [
  { id: 1, title: "GSCimage", image: GSCimage },
  { id: 2, title: "Apartments", image: apartments },
  { id: 3, title: "Peoples", image: peoples },
  { id: 4, title: "RoomyFinder", image: RoomyFinder },
];

const CardContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease-in-out",
});

const CardContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          position: "relative",
          maxWidth: "600px",
          maxHeight: "400px",
          width: "100%",
          height: "100%",
        }}
      >
        {images.map((image, index) => (
          <CardContainer
            key={image.id}
            sx={{
              transform:
                index === activeIndex
                  ? "translateX(0)"
                  : index < activeIndex
                  ? "-100%"
                  : "100%",
            }}
          >
            <CardMedia
              component="img"
              alt={image.title}
              image={image.image}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </CardContainer>
        ))}

        <Button
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={handlePrev}
        >
          Prev
        </Button>

        <Button
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={handleNext}
        >
          Next
        </Button>

        <CardContentWrapper>
          <CardContent>
            <Typography variant="h5" component="h2">
              {images[activeIndex].title}
            </Typography>
          </CardContent>
        </CardContentWrapper>
      </Card>
    </Box>
  );
};

export default Carousel;

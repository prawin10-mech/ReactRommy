import React, { useState, useCallback, memo } from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const AvailableRoom = memo(({ room }) => {
  const [liked, setLiked] = useState(false);
  const images = room.images || [];

  const handleClick = useCallback(() => {
    setLiked((prevState) => !prevState);
  }, []);

  return (
    <Card
      key={`room-${room.id}`}
      variant="outlined"
      sx={{
        mb: 3,
        display: "flex",
        border: "1px solid #555",
        position: "relative",
      }}
    >
      <Box sx={{ width: "400px", height: "250px" }}>
        <Carousel autoPlay>
          {images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              height="100%"
              width="100%"
              image={image}
              alt={`available room ${index}`}
              sx={{
                objectFit: "cover",
                objectPosition: "center",
                width: "300px",
                height: "250px",
                borderRadius: "15px",
                padding: "8px",
              }}
            />
          ))}
        </Carousel>
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            color: liked ? "red" : "",
          }}
          onClick={handleClick}
        >
          <FavoriteIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          ml: 2,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <RouterLink
            to={`/rooms/view-room/${room.id}`}
            sx={{ textDecoration: "none" }}
          >
            {!room.action && <Typography variant="h6">{room.type}</Typography>}
          </RouterLink>
          <RouterLink
            to={`/rooms/view-room/${room.id}`}
            sx={{ textDecoration: "none" }}
          >
            {room.action && (
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {room.poster?.firstName} {room.poster?.lastName},{" "}
                {room?.aboutYou?.age || "Unknown age"}
              </Typography>
            )}
          </RouterLink>
          <RouterLink
            to={`/rooms/view-room/${room.id}`}
            sx={{ textDecoration: "none" }}
          >
            {!room.action && (
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                AED {room.monthlyPrice * 12} / year
              </Typography>
            )}
          </RouterLink>
          <RouterLink
            to={`/rooms/view-room/${room.id}`}
            sx={{ textDecoration: "none" }}
          >
            {room.action && (
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                ${room.budget} / month
              </Typography>
            )}
          </RouterLink>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {room.description}
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <LocationMarkerIcon className="h-5 w-5 mr-1 text-gray-500" />
            {room.address.appartmentNumber} {room.address.buildingName}{" "}
            {room.address.city} {room.address.location}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
});

export default AvailableRoom;

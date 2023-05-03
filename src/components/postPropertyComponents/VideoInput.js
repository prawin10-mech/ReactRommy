import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { VideoCameraFront } from "@mui/icons-material";

const VideoInput = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoSrc(url);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <IconButton component="label">
          <VideoCameraFront />
          <input
            type="file"
            accept="video/*"
            style={{ display: "none" }}
            onChange={handleVideoChange}
          />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography>{videoSrc ? "Video selected" : "Select video"}</Typography>
      </Grid>
    </Grid>
  );
};

export default VideoInput;

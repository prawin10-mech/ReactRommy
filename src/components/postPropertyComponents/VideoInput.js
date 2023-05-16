import React, { useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  CircularProgress,
  Box,
} from "@mui/material";
import { VideoCameraFront, Delete } from "@mui/icons-material";
import { storage } from "../../firebase/index";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { PropertyActions } from "../../store/Property";

const VideoInput = () => {
  const dispatch = useDispatch();
  const videoSrcs = useSelector((state) => state.property.videos);
  const [isUploading, setIsUploading] = useState(false);

  const handleVideoChange = async (e) => {
    setIsUploading(true);
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const storageRef = ref(storage, `videos/${file.name}`);
      await uploadBytes(storageRef, file)
        .then(() => {
          getDownloadURL(storageRef)
            .then((url) => {
              setIsUploading(false);
              dispatch(PropertyActions.videos(url));
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log("uploadError", err);
        });
    }
  };

  const handleDeleteVideo = (index) => {
    dispatch(PropertyActions.deleteVideo(index));
  };

  const videoStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "16px",
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
            multiple
          />
        </IconButton>
      </Grid>
      <Grid item>
        {isUploading ? (
          <CircularProgress size={20} />
        ) : (
          <Box>
            {videoSrcs && videoSrcs.length > 0 ? (
              videoSrcs.map((videoSrc, index) => (
                <Box key={index} display="flex" flexDirection="row">
                  <video src={videoSrc} controls style={videoStyle}></video>
                  <IconButton onClick={() => handleDeleteVideo(index)}>
                    <Delete />
                  </IconButton>
                </Box>
              ))
            ) : (
              <Typography>Select video</Typography>
            )}
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default VideoInput;

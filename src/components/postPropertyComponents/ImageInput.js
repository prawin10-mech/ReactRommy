import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { PhotoCamera, Delete } from "@mui/icons-material";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/index";
import { useDispatch, useSelector } from "react-redux";
import { PropertyActions } from "../../store/Property";

const ImageInput = () => {
  const imageUrls = useSelector((state) => state.property.images);
  const dispatch = useDispatch();

  const handleImageChange = async (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file)
        .then(() => {
          getDownloadURL(storageRef)
            .then((url) => {
              dispatch(PropertyActions.images(url));
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

  const handleDeleteImage = (index) => {
    dispatch(PropertyActions.deleteImage(index));
  };

  const imageUrlsData = imageUrls.map((imageUrl, index) => (
    <Grid item key={index}>
      <div style={{ position: "relative" }}>
        <img
          src={imageUrl}
          alt={` ${index + 1}`}
          style={{ maxWidth: 150, maxHeight: 100 }}
        />
        <IconButton
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={() => handleDeleteImage(index)}
        >
          <Delete />
        </IconButton>
      </div>
    </Grid>
  ));

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Grid container direction="row" justify="center">
          {imageUrls.length > 0 ? (
            imageUrlsData
          ) : (
            <Typography>Select Images</Typography>
          )}
        </Grid>
        <IconButton component="label">
          <PhotoCamera />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
            multiple
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ImageInput;

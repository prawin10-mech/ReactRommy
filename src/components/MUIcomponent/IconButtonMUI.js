import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { Box, Paper } from "@mui/material";

export default function IconButtonMUI(props) {
  return (
    <Box sx={{ ...props.IconButtonsx }}>
      <IconButton
        color="#fff"
        aria-label="upload picture"
        component="label"
        sx={{ background: "purple", color: "#fff" }}
      >
        <input hidden accept="image/*" type="file" />
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

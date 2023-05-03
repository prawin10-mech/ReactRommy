import React from "react";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { PropertyActions } from "../../store/Property";

const TextInput = ({ label, name }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(PropertyActions[name](event.target.value));
  };
  return (
    <TextField
      label={label}
      variant="outlined"
      onChange={handleChange}
      fullWidth
    />
  );
};

export default TextInput;

import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const AmenitiesItem = ({ name, value, isChecked, onCheckboxChange }) => {
  const handleCheckboxChange = (event) => {
    onCheckboxChange(value, event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
      label={name}
    />
  );
};

export default AmenitiesItem;

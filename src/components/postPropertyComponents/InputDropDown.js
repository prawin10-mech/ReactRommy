import React, { useState } from "react";
import { Grid, TextField, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { PropertyActions } from "../../store/Property";

const InputDropDown = ({ label, values, name }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    dispatch(PropertyActions[name](event.target.value));
    setValue(event.target.value);
  };

  const menuItemData = values.map((value) => {
    return <MenuItem value={value}>{value}</MenuItem>;
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <TextField
          label={label}
          variant="outlined"
          select
          value={value}
          onChange={handleChange}
          sx={{ width: "100%" }}
        >
          <MenuItem value="">Select an option</MenuItem>
          {menuItemData}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default InputDropDown;

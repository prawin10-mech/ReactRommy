import React, { useState } from "react";
import {
  FormGroup,
  Typography,
  Grid,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { SearchActions } from "../../../store/Search";

const Gender = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    dispatch(SearchActions.gender(value));
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Gender
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <FormControlLabel
            control={<Radio checked={selectedValue === "Male"} />}
            label="Male"
            value="Male"
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio checked={selectedValue === "Female"} />}
            label="Female"
            value="Female"
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio checked={selectedValue === "Mix"} />}
            label="Mix"
            value="Mix"
            onChange={handleRadioChange}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Gender;

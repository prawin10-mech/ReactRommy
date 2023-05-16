import React, { useState } from "react";
import {
  FormGroup,
  Typography,
  Grid,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AdvanceSearchActions } from "../../../store/AdvanceSearch";

const Gender = () => {
  const dispatch = useDispatch();
  const gender = useSelector((state) => state.advanceSearch.gender);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    dispatch(AdvanceSearchActions.gender(value));
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Gender
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <FormControlLabel
            control={<Radio checked={gender === "Male"} />}
            label="Male"
            value="Male"
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio checked={gender === "Female"} />}
            label="Female"
            value="Female"
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio checked={gender === "Mix"} />}
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

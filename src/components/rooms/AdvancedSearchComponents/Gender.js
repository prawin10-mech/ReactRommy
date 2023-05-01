import React from "react";
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
  const handleCheckboxChange = (event) => {
    dispatch(SearchActions.gender(event.target.value));
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Gender
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <FormControlLabel
            control={<Radio />}
            label="Male"
            value="Male"
            name="gender"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio />}
            label="Female"
            value="Female"
            name="gender"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio />}
            label="Mix"
            value="Mix"
            name="gender"
            onChange={handleCheckboxChange}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Gender;

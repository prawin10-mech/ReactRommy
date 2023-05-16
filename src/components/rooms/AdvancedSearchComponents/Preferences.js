import React from "react";
import {
  FormGroup,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AdvanceSearchActions } from "../../../store/AdvanceSearch";

const Preferences = () => {
  const checkedItems = useSelector((state) => state.advanceSearch.preferences);

  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(AdvanceSearchActions.preferences([...checkedItems, item]));
    } else {
      dispatch(
        AdvanceSearchActions.preferences(
          checkedItems.filter((checkedItem) => checkedItem !== item)
        )
      );
    }
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Preferences
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Smoking Allowed"
            name="smoking"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            name="visitors"
            label="Visitors Allowed"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            name="drinking"
            label="Drinking Allowed"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            name="friendParty"
            label="Party Allowed"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            name="pets"
            label="Pets Allowed"
            onChange={handleCheckboxChange}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Preferences;

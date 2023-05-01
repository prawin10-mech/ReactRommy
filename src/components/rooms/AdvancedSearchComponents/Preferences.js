import React from "react";
import {
  FormGroup,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../../../store/Search";

const Preferences = () => {
  const checkedItems = useSelector((state) => state.search.preferences);

  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(SearchActions.preferences([...checkedItems, item]));
    } else {
      dispatch(
        SearchActions.preferences(
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
            name="Smoking Allowed"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Visitors Allowed"
            name="Visitors Allowed"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Party Allowed"
            name="Party Allowed"
            onChange={handleCheckboxChange}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Preferences;

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

const PreferredRentType = () => {
  const checkedItems = useSelector((state) => state.search.PreferredRentType);

  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(SearchActions.PreferredRentType([...checkedItems, item]));
    } else {
      dispatch(
        SearchActions.PreferredRentType(
          checkedItems.filter((checkedItem) => checkedItem !== item)
        )
      );
    }
  };
  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Preferred Rent Type
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Yearly"
            name="Yearly"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Monthly"
            name="Monthly"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Daily"
            name="Daily"
            onChange={handleCheckboxChange}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default PreferredRentType;

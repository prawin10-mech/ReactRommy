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

const Anemities = () => {
  const checkedItems = useSelector((state) => state.search.anemities);

  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;

    console.log(checkedItems);

    if (isChecked) {
      dispatch(SearchActions.anemities([...checkedItems, item]));
    } else {
      dispatch(
        SearchActions.anemities(
          checkedItems.filter((checkedItem) => checkedItem !== item)
        )
      );
    }
  };

  console.log(checkedItems);

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Amenities
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Free Wifi"
            name="Free Wifi"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Parking"
            name="Parking"
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Checkbox />}
            label="Swimming Pool"
            name="Swimming Pool"
            onChange={handleCheckboxChange}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Anemities;

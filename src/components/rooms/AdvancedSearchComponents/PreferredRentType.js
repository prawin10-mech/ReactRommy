import React, { useState } from "react";
import {
  FormGroup,
  Typography,
  Grid,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../../../store/Search";

const PreferredRentType = () => {
  const checkedItems = useSelector((state) => state.search.PreferredRentType);
  const [selectedValue, setSelectedValue] = useState("");

  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    dispatch(SearchActions.PreferredRentType(value));
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Gender
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <FormControlLabel
            control={<Radio checked={selectedValue === "Yearly"} />}
            label="Yearly"
            value="Yearly"
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio checked={selectedValue === "Monthly"} />}
            label="Monthly"
            value="Monthly"
            onChange={handleRadioChange}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={<Radio checked={selectedValue === "Daily"} />}
            label="Daily"
            value="Daily"
            onChange={handleRadioChange}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default PreferredRentType;

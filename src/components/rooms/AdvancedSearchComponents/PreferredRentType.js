import React, { useState } from "react";
import {
  FormGroup,
  Typography,
  Grid,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AdvanceSearchActions } from "../../../store/AdvanceSearch";

const PreferredRentType = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    dispatch(AdvanceSearchActions.preferredRentType(value));
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Rent period
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

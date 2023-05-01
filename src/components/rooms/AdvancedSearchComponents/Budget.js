import React from "react";
import { FormGroup, Typography, Slider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../../../store/Search";

const Budget = () => {
  const value = useSelector((state) => state.search.budget);
  const dispatch = useDispatch();
  const handleChange = (newValue) => {
    dispatch(SearchActions.budget(newValue));
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Budget Monthly
      </Typography>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        {value[0]}
        {value[0] !== 0 ? "K" : ""} - {value[1]}K USD
      </Typography>
    </FormGroup>
  );
};

export default Budget;

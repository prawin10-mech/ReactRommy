import React, { useState } from "react";
import { FormGroup, Typography, Slider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AdvanceSearchActions } from "../../../store/AdvanceSearch";

const Budget = () => {
  const dispatch = useDispatch();
  const minBudget = useSelector((state) => state.advanceSearch.minBudget);
  const maxBudget = useSelector((state) => state.advanceSearch.maxBudget);

  const handleBudgetChange = (event, newValue) => {
    dispatch(AdvanceSearchActions.minBudget(newValue[0]));
    dispatch(AdvanceSearchActions.maxBudget(newValue[1]));
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Budget Monthly
      </Typography>
      <Slider
        getAriaLabel={() => "Price range"}
        value={[minBudget, maxBudget]}
        onChange={handleBudgetChange}
        valueLabelDisplay="auto"
        step={1}
        marks={[
          { value: 0, label: "0K" },
          { value: 50, label: "50K" },
          { value: 100, label: "100K" },
        ]}
      />
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        {minBudget}
        {minBudget !== 0 ? "K" : ""} - {maxBudget}K USD
      </Typography>
    </FormGroup>
  );
};

export default React.memo(Budget);

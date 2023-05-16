import React from "react";
import { FormGroup, Typography, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AdvanceSearchActions } from "../../../store/AdvanceSearch";
import AmenitiesItem from "./AmenitiesItem";
import { allAmenities } from "../../../utils/AllAmenities";

const Amenities = () => {
  const checkedItems = useSelector((state) => state.advanceSearch.amenities);
  const dispatch = useDispatch();

  const handleCheckboxChange = (itemValue, isChecked) => {
    const newItems = isChecked
      ? [...checkedItems, itemValue]
      : checkedItems.filter((item) => item !== itemValue);

    dispatch(AdvanceSearchActions.amenities(newItems));
  };

  return (
    <FormGroup sx={{ my: 3 }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        Amenities
      </Typography>
      <Grid container direction="column">
        {allAmenities.map((amenity) => (
          <Grid item key={amenity.value}>
            <AmenitiesItem
              name={amenity.value}
              value={amenity.value}
              isChecked={checkedItems.includes(amenity.value)}
              onCheckboxChange={handleCheckboxChange}
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
};

export default Amenities;

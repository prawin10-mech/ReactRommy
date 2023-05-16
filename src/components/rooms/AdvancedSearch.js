import React, { useState } from "react";
import AdvancedSearchBg from "../../assets/AdvanceSearchBg.jpg";
import { Grid, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../../store/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Anemities from "./AdvancedSearchComponents/Anemities";
import Preferences from "./AdvancedSearchComponents/Preferences";
import Budget from "./AdvancedSearchComponents/Budget";
import PropertyType from "./AdvancedSearchComponents/PropertyType";
import Gender from "./AdvancedSearchComponents/Gender";
import PreferredRentType from "./AdvancedSearchComponents/PreferredRentType";

const AdvancedSearch = () => {
  const navigate = useNavigate();
  const [advance, setAdvance] = useState(false);
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.search.searchType);

  const type = useSelector((state) => state.advanceSearch.propertyType);
  const amenities = useSelector((state) => state.advanceSearch.amenities);
  const preferences = useSelector((state) => state.advanceSearch.preferences);
  const minBudget = useSelector((state) => state.advanceSearch.minBudget);
  const maxBudget = useSelector((state) => state.advanceSearch.maxBudget);
  const gender = useSelector((state) => state.advanceSearch.gender);
  const preferredRentType = useSelector(
    (state) => state.advanceSearch.preferredRentType
  );
  const AdvanceSearchOptionsHandler = () => {
    setAdvance(!advance);
  };

  const advanceSearchHandler = async () => {
    const obj = {};
    obj.countryCode = "AE";

    if (type) {
      obj.type = type[0];
    }
    // if (minBudget) {
    //   obj.minBudget = minBudget;
    // }
    // if (maxBudget) {
    //   obj.maxBudget = maxBudget;
    // }
    // if (amenities) {
    //   obj.amenities = amenities;
    // }
    // if (preferences) {
    //   obj.preferences = preferences;
    // }
    if (gender) {
      obj.gender = gender;
    }
    // if (preferredRentType) {
    //   obj.preferredRentType = preferredRentType;
    // }

    console.log(obj);

    if (Object.keys(obj).length > 0) {
      const { data } = await axios.post(
        `http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/${searchType}-ad/available`,
        obj
      );
      console.log(data);
      dispatch(SearchActions.availableRooms(data));
      navigate("/sp");
    } else {
      console.log("obj is empty");
    }
  };

  return (
    <Paper
      sx={{
        height: "100%",
        p: 4,
        backgroundImage: `url(${AdvancedSearchBg})`,
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
        Advanced Search
      </Typography>
      <PropertyType />
      <Budget />
      <Anemities />
      <Preferences />
      {advance && <Gender />}
      {advance && <PreferredRentType />}
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1" onClick={AdvanceSearchOptionsHandler}>
          ADVANCE {advance ? "^" : ""}
        </Typography>
        <Button variant="contained" onClick={advanceSearchHandler}>
          Apply
        </Button>
      </Grid>
    </Paper>
  );
};

export default AdvancedSearch;

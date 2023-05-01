import React, { useState } from "react";
import AdvancedSearchBg from "../../assets/AdvanceSearchBg.jpg";
import { Grid, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import Anemities from "./AdvancedSearchComponents/Anemities";
import Preferences from "./AdvancedSearchComponents/Preferences";
import Budget from "./AdvancedSearchComponents/Budget";
import PropertyType from "./AdvancedSearchComponents/PropertyType";
import Gender from "./AdvancedSearchComponents/Gender";
import PreferredRentType from "./AdvancedSearchComponents/PreferredRentType";

const AdvancedSearch = () => {
  const [advance, setAdvance] = useState(false);
  const AdvanceSearchHandler = () => {
    setAdvance(!advance);
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
        <Typography variant="subtitle1" onClick={AdvanceSearchHandler}>
          ADVANCE {advance ? "^" : ""}
        </Typography>
        <Button variant="contained">Apply</Button>
      </Grid>
    </Paper>
  );
};

export default AdvancedSearch;

import React, { useState } from "react";
import AdvancedSearchBg from "../../assets/AdvanceSearchBg.jpg";
import Slider from "@mui/material/Slider";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

const AdvancedSearch = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const selectedItem = event.target.value;
    if (selectedItems.includes(selectedItem)) {
      setSelectedItems(selectedItems.filter((item) => item !== selectedItem));
    } else {
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };
  const [value, setValue] = useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <FormGroup sx={{ my: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
          Property Type
        </Typography>
        <Grid container direction="column" sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedItems.includes("Regular")}
                    onChange={handleCheckboxChange}
                    value="Regular"
                  />
                }
                label="Regular"
                sx={{
                  border: selectedItems.includes("Regular")
                    ? "2px solid purple"
                    : "none",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedItems.includes("Partition")}
                    onChange={handleCheckboxChange}
                    value="Partition"
                  />
                }
                label="Partition"
                sx={{
                  border: selectedItems.includes("Partition")
                    ? "2px solid purple"
                    : "none",
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedItems.includes("Master Room")}
                    onChange={handleCheckboxChange}
                    value="Master Room"
                  />
                }
                label="Master Room"
                sx={{
                  border: selectedItems.includes("Master Room")
                    ? "2px solid purple"
                    : "none",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedItems.includes("Bed Space")}
                    onChange={handleCheckboxChange}
                    value="Bed Space"
                  />
                }
                label="Bed Space"
                sx={{
                  border: selectedItems.includes("Bed Space")
                    ? "2px solid purple"
                    : "none",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </FormGroup>
      <FormGroup sx={{ my: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Budget Monthly
        </Typography>
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </FormGroup>
      <FormGroup sx={{ my: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Amenities
        </Typography>
        <Grid container direction="column">
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Free Wifi" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Parking" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Swimming Pool" />
          </Grid>
        </Grid>
      </FormGroup>
      <FormGroup sx={{ my: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Preferences
        </Typography>
        <Grid container direction="column">
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Smoking Allowed" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Visitors Allowed" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Party Allowed" />
          </Grid>
        </Grid>
      </FormGroup>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle1">ADVANCE</Typography>
        <Button variant="contained">Apply</Button>
      </Grid>
    </Paper>
  );
};

export default AdvancedSearch;

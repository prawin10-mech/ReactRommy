import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { SearchActions } from "../../store/Search";

export default function SelectSmall({ fn, values, name }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.search[fn]);

  const handleChange = (event) => {
    dispatch(SearchActions[fn](event.target.value));
  };

  const menuItemsData = values.map((value) => {
    return (
      <MenuItem key={value} value={value}>
        {value}
      </MenuItem>
    );
  });

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{name}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={name}
        onChange={(event) => handleChange(event)}
      >
        <MenuItem value="">
          <em>Select one option</em>
        </MenuItem>
        {menuItemsData}
      </Select>
    </FormControl>
  );
}

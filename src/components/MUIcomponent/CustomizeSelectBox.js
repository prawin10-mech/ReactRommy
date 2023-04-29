import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall(props) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menuItemsData = props.values.map((value) => {
    return <MenuItem value={value}>{value}</MenuItem>;
  });

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{props.name}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Select one option</em>
        </MenuItem>
        {menuItemsData}
      </Select>
    </FormControl>
  );
}

import React, { useState } from "react";
import {TextField, Autocomplete, Chip} from "@mui/material";

export default function ChipsArray() {
  const [value, setValue] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setChips([...chips, value]);
      setValue("");
    }
  };

  const handleDelete = (chipToDelete) => () => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Autocomplete
      multiple
      freeSolo
      value={chips}
      onChange={(event, newValue) => {
        setChips(newValue);
      }}
      options={chips}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={index}
            label={option}
            onDelete={handleDelete(option)}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Type your input and press enter"
          variant="outlined"
          sx={{ minWidth: "auto" }}
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      )}
    />
  );
}

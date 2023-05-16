import React from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PropertyActions } from "../../store/Property";

const TextInput = ({ label, name, value }) => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.property.edit);
  const editedData = useSelector((state) => state.property.editedData);

  const handleInputChange = (e, name) => {
    if (edit && editedData[name]) {
      const newData = e.target.value + editedData[name];
      dispatch(PropertyActions[name](newData));
    } else {
      dispatch(PropertyActions[name](e.target.value));
    }
  };

  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => handleInputChange(e, name)}
      fullWidth
    />
  );
};

export default TextInput;

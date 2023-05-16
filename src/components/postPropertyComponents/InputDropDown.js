import React from "react";
import { Grid, TextField, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { PropertyActions } from "../../store/Property";

const InputDropDown = ({ label, values, name, value }) => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.property.edit);
  const editedData = useSelector((state) => state.property.editedData);
  //const [value, setValue] = useState("");

  const handleChange = (event) => {
    dispatch(PropertyActions[name](event.target.value));
    //setValue(event.target.value);
  };

  const handleInputChange = (e, name) => {
    if (edit && editedData[name]) {
      const newData = e.target.value + editedData[name];
      dispatch(PropertyActions[name](newData));
      //setValue(e.target.value);
    } else {
      dispatch(PropertyActions[name](e.target.value));
      //setValue(e.target.value);
    }
  };

  const menuItemData = values.map((value, index) => {
    return (
      <MenuItem value={value} key={index}>
        {value}
      </MenuItem>
    );
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <TextField
          label={label}
          variant="outlined"
          select
          value={value}
          onChange={(e) => handleInputChange(e, name)}
          sx={{ width: "100%" }}
        >
          <MenuItem value="">Select an option</MenuItem>
          {menuItemData}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default InputDropDown;

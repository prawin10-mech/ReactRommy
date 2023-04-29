import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels({ label }) {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
      {/* <FormControlLabel required control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    </FormGroup>
  );
}

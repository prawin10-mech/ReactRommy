import { Grid, Typography } from "@mui/material";
import React from "react";
import Cookies from "js-cookie";
import DummyUserImage from "../assets/dummyUserImage.jpg";

const ViewProfile = () => {
  const user = JSON.parse(Cookies.get("user"));
  console.log(user);
  return (
    <Grid>
      <Typography>View Profile</Typography>
      <Grid>
        <img src={DummyUserImage} alt={"dummy user"} />
      </Grid>
      <Grid>
        <Typography>Full name</Typography>
        <Typography>
          {user.firstName} {user.lastName}
        </Typography>
      </Grid>
      <Grid>
        <Typography>Password</Typography>
        <Typography>roomy finder</Typography>
      </Grid>
    </Grid>
  );
};

export default ViewProfile;

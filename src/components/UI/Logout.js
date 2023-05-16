import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { LoginActions } from "../../store/userLogin";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 2 }}>
      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={() => {
          navigate("/login");
          localStorage.removeItem("token");
          dispatch(LoginActions.isLoggedIn(false));
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Logout;

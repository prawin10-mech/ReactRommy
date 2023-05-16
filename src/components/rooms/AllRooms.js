import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import AdvancedSearch from "./AdvancedSearch";
import AllAvailableRooms from "./AllAvailableRooms";
import SimmerUI from "./SimmerUi";
import SearchInputs from "../SearchInputs";

const AllRooms = () => {
  const availableRooms = useSelector((state) => state.search.availableRooms);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const allAvailableRooms = useMemo(
    () => <AllAvailableRooms />,
    [availableRooms]
  );

  return (
    <Grid container>
      <Grid item xs={12} md={9}>
        <Box display="flex" flexDirection="column">
          <Box mb={2}>
            <SearchInputs />
          </Box>
          <Box>{loading ? <SimmerUI /> : allAvailableRooms}</Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AllRooms;

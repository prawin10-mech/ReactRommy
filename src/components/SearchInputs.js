import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../store/Search";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInputs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.search.searchType);
  const searchText = useSelector((state) => state.search.searchText);
  const propertyType = useSelector((state) => state.search.propertyType);
  const location = useSelector((state) => state.search.location);
  const price = useSelector((state) => state.search.price);
  const commercialProperty = useSelector(
    (state) => state.search.commercialProperty
  );

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const propertyTypeOptions =
    searchType === "property"
      ? ["Bed", "Master Room", "Partition", "Room"]
      : ["Studio", "Apartment", "House"];

  const searchTextHandle = (e) => {
    dispatch(SearchActions.searchText(e.target.value));
  };

  const handlePropertyTypeChange = (e) => {
    dispatch(SearchActions.propertyType(e.target.value));
  };

  const searchLocationHandle = (e) => {
    dispatch(SearchActions.location(e.target.value));
  };

  const searchPriceHandle = (e) => {
    dispatch(SearchActions.price(e.target.value));
  };

  const commercialPropertyHandle = (e) => {
    dispatch(SearchActions.commercialProperty());
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const obj = {};
      if (searchText) {
        obj.city = searchText;
      }
      if (location === "Dubai") {
        obj.countryCode = "AE";
      } else if (location === "Saudi Arabia") {
        obj.countryCode = "SA";
      }
      if (propertyType) {
        obj.type = propertyType;
      }
      if (price) {
        obj.price = price;
      }
      if (commercialProperty) {
        obj.commercialProperty = commercialProperty;
      }

      console.log(obj);

      if (Object.keys(obj).length > 0) {
        const { data } = await axios.post(
          `https://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/${searchType}-ad/available`,
          obj
        );
        dispatch(SearchActions.availableRooms(data));
        navigate("/sp");
      } else {
        console.log("obj is empty");
      }
    } catch (error) {
      setError("An error occurred while searching. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          mb: 2,
        }}
      >
        <Box
          sx={{
            flex: { xs: "1 1 100%", lg: "1 1 auto" },
            mr: { xs: 0, lg: 2 },
          }}
        >
          <FormControl variant="outlined" fullWidth>
            <TextField
              label="Search"
              type="text"
              value={searchText}
              onChange={searchTextHandle}
              fullWidth
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            flex: { xs: "1 1 100%", lg: "1 1 auto" },
            mr: { xs: 0, lg: 2 },
          }}
        >
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="propertyType">Property Type</InputLabel>
            <Select
              id="propertyType"
              label="Property Type"
              value={propertyType}
              onChange={handlePropertyTypeChange}
              fullWidth
            >
              {propertyTypeOptions.map((property) => (
                <MenuItem key={property} value={property}>
                  {property}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            flex: { xs: "1 1 100%", lg: "1 1 auto" },
            mr: { xs: 0, lg: 2 },
          }}
        >
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="location">Location</InputLabel>
            <Select
              id="location"
              label="Location"
              value={location}
              onChange={searchLocationHandle}
              fullWidth
            >
              <MenuItem value="">Location</MenuItem>
              <MenuItem value="Dubai">Dubai</MenuItem>
              <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            flex: { xs: "1 1 100%", lg: "1 1 auto" },
            mr: { xs: 0, lg: 2 },
          }}
        >
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Select
              id="price"
              label="Price"
              value={price}
              onChange={searchPriceHandle}
              fullWidth // Added fullWidth prop
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="1 to 5">1 to 5</MenuItem>
              <MenuItem value="5 to 10">5 to 10</MenuItem>
              <MenuItem value="10 to 15">10 to 15</MenuItem>
              <MenuItem value="15 to 20">15 to 20</MenuItem>
              <MenuItem value="+20">+20</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            flex: { xs: "1 1 100%", lg: "1 1 auto" },
            display: "flex",
            alignItems: "center",
            mt: { xs: 2, lg: 0 },
            justifyContent: { xs: "flex-start", lg: "flex-end" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: 2,
              border: "2px solid slate",
              marginLeft: { xs: 0, lg: 2 },
              backgroundColor: "purple.700",
              borderRadius: "md",
            }}
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Search"}
          </Button>
          {/* {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )} */}
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "flex-start", lg: "space-between" },
          alignItems: { xs: "flex-start", lg: "center" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                id="commercial"
                checked={commercialProperty}
                onChange={commercialPropertyHandle}
              />
            }
            label="Show commercial properties only"
          />
        </Box>
        <Typography
          variant="body1"
          sx={{ mt: { xs: 2, lg: 0 }, ml: { xs: 0, lg: 2 } }}
        >
          Advanced search
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchInputs;

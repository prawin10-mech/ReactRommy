import React, { useState, useEffect } from "react";
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
  Button,
  InputLabel,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  citydata,
  dubaiCities,
  abuDahbiCities,
  sharjahCities,
  rasAlkimaCities,
  ummAlQuwainCities,
  ajmanCities,
  jeddahCities,
  meccaCities,
  riyadhCities,
} from "../utils/citydata";

const SearchInputs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filteredCities, setFilteredCities] = useState([]);
  const searchType = useSelector((state) => state.search.searchType);
  const searchText = useSelector((state) => state.search.searchText);
  const propertyType = useSelector((state) => state.search.propertyType);
  const location = useSelector((state) => state.search.location);
  const price = useSelector((state) => state.search.price);

  const [isLoading, setIsLoading] = useState(false);
  const [locationdata, setlocationdata] = useState([]);
  const [error, setError] = useState(null);

  const propertyTypeOptions =
    searchType === "property"
      ? ["All", "Bed", "Master Room", "Partition", "Room"]
      : ["All", "Studio", "Apartment", "House"];

  const viewArrayData = () => {
    if (searchText === "Dubai") {
      setlocationdata(dubaiCities);
    } else if (searchText === "Abu Dhabi") {
      setlocationdata(abuDahbiCities);
    } else if (searchText === "Sharjah") {
      setlocationdata(sharjahCities);
    } else if (searchText === "Ras Al Kima") {
      setlocationdata(rasAlkimaCities);
    } else if (searchText === "Umm Al-Quwain") {
      setlocationdata(ummAlQuwainCities);
    } else if (searchText === "Ajman") {
      setlocationdata(ajmanCities);
    } else if (searchText === "Riyadh") {
      setlocationdata(riyadhCities);
    } else if (searchText === "Mecca") {
      setlocationdata(meccaCities);
    } else if (searchText === "Jeddah") {
      setlocationdata(jeddahCities);
    } else {
      setlocationdata([]);
    }
  };
  useEffect(() => {
    viewArrayData();
  }, [searchText]);

  const handleSearchTextChange = (event, value) => {
    const searchText = value || "";
    const filtered = citydata.filter((city) =>
      city.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCities(filtered);
    dispatch(SearchActions.searchText(searchText));
  };

  const handleCityClick = (event, value) => {
    dispatch(SearchActions.searchText(value));
    // setFilteredCities([]);
  };

  const handleLocationClick = (event, value) => {
    dispatch(SearchActions.location(value));
  };

  const handlePropertyTypeChange = (e) => {
    dispatch(SearchActions.propertyType(e.target.value));
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const obj = { countryCode: "AE" };

      if (searchText) {
        obj.city = searchText;
      }
      if (location) {
        obj.location = location;
      }

      if (propertyType && propertyType !== "All") {
        obj.type = propertyType;
      }
      if (price && price !== "All") {
        obj.price = price;
      }

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

  const styles = {
    searchContainer: {
      display: "flex",
      spacing: 2,
      flexDirection: { xs: "column", lg: "row" },
      marginBottom: 2,
    },
    formControl: {
      flex: { xs: "1 1 100%", lg: "1 1 auto" },
      marginRight: { xs: 0, lg: 2 },
    },
    buttonContainer: {
      flex: { xs: "1 1 100%", lg: "1 1 auto" },
      display: "flex",
      alignItems: "center",
      marginTop: { xs: 2, lg: 0 },
      justifyContent: { xs: "flex-start", lg: "flex-end" },
    },
    button: {
      padding: 2,
      border: "2px solid slate",
      marginLeft: { xs: 0, lg: 2 },
      backgroundColor: "purple.700",
      borderRadius: "md",
    },
    advancedSearchContainer: {
      marginTop: 2,
      display: "flex",
      flexDirection: { xs: "column", lg: "row" },
      justifyContent: { xs: "flex-start", lg: "space-between" },
      alignItems: { xs: "flex-start", lg: "center" },
    },
    commercialCheckboxContainer: {
      display: "flex",
      alignItems: "center",
    },
    advancedSearchText: {
      marginTop: { xs: 2, lg: 0 },
      marginLeft: { xs: 0, lg: 2 },
    },
  };

  return (
    <Box>
      <Box sx={styles.searchContainer}>
        <Box sx={styles.formControl}>
          <Autocomplete
            options={filteredCities}
            value={searchText}
            onChange={handleCityClick}
            onInputChange={handleSearchTextChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                type="text"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Box>

        <Box sx={styles.formControl}>
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

        <Box sx={styles.formControl}>
          <Autocomplete
            options={locationdata}
            value={location}
            onChange={handleLocationClick}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                type="text"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Box>

        {/* <Box sx={styles.formControl}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Select
              id="price"
              label="Price"
              value={price}
              onChange={searchPriceHandle}
              fullWidth
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="1 to 5">1 to 5</MenuItem>
              <MenuItem value="5 to 10">5 to 10</MenuItem>
              <MenuItem value="10 to 15">10 to 15</MenuItem>
              <MenuItem value="15 to 20">15 to 20</MenuItem>
              <MenuItem value="+20">+20</MenuItem>
            </Select>
          </FormControl>
        </Box> */}

        <Box sx={styles.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            sx={styles.button}
            onClick={handleSearch}
            startIcon={<SearchIcon />}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Search"}
          </Button>
        </Box>
      </Box>

      {/* <Box sx={styles.advancedSearchContainer}>
        <Box sx={styles.commercialCheckboxContainer}>
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
        <Typography variant="body1" sx={styles.advancedSearchText}>
          Advanced search
        </Typography>
      </Box> */}
    </Box>
  );
};

export default SearchInputs;

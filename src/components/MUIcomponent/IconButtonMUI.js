import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { SearchActions } from "../../store/Search";

export default function IconButtonMUI(props) {
  const dispatch = useDispatch();

  const searchType = useSelector((state) => state.search.searchType);
  const searchText = useSelector((state) => state.search.searchText);
  const propertyType = useSelector((state) => state.search.propertyType);
  const location = useSelector((state) => state.search.location);
  const price = useSelector((state) => state.search.price);
  const commercialProperty = useSelector(
    (state) => state.search.commercialProperty
  );

  const handleClick = async () => {
    const obj = {};
    if (location) {
      if (location === "Dubai") {
        obj.countryCode = "AE";
      } else if (location === "Saudi Arabia") {
        obj.countryCode = "SA";
      }
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
        `http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/${searchType}-ad/available`,
        obj
      );
      dispatch(SearchActions.availableRooms(data));
    } else {
      console.log("obj is empty");
    }
  };

  return (
    <Box sx={{ ...props.IconButtonsx }}>
      <Button
        onClick={handleClick}
        sx={{
          background: "purple",
          color: "#fff",
          "&:hover": {
            background: "#fff",
            color: "purple",
            border: "2px solid purple",
          },
        }}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
}

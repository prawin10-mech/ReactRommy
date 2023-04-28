import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../store/Search";
import SearchInputs from "./SearchInputs";
import { ButtonGroup, Button } from "@mui/material";

const Search = () => {
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.search.searchType);

  const roomSearchHandle = () => {
    dispatch(SearchActions.roomSearch());
  };

  const roommateSearchHandle = () => {
    dispatch(SearchActions.roommateSearch());
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: "120%",
        margin: "20px 0 0 10%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <ButtonGroup>
          <Button
            variant={searchType === "property" ? "contained" : "outlined"}
            color="secondary"
            onClick={roomSearchHandle}
            sx={{
              mr: 2,
              bgcolor: searchType === "property" ? "#6b46c1" : "#fff",
            }}
          >
            Room
          </Button>
          <Button
            variant={searchType === "roommate" ? "contained" : "outlined"}
            color="secondary"
            onClick={roommateSearchHandle}
            sx={{ bgcolor: searchType === "roommate" ? "#6b46c1" : "#fff" }}
          >
            Room mate
          </Button>
        </ButtonGroup>
      </div>
      <SearchInputs />
    </div>
  );
};

export default Search;

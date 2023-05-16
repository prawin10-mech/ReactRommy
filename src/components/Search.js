import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../store/Search";
import SearchInputs from "./SearchInputs";
import { ButtonGroup, Button, Box } from "@mui/material";

const Search = () => {
  const dispatch = useDispatch();
  const searchType1 = useSelector((state) => state.search.searchType);

  const searchType = (name) => {
    dispatch(SearchActions.roomSearch(name));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        margin: "20px 0 0 10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "@media (max-width: 960px)": {
          margin: "20px 0 0 0",
        },
      }}
    >
      <ButtonGroup
        sx={{
          mb: 1,
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        <Button
          variant={searchType1 === "property" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => {
            searchType("property");
          }}
          sx={{
            mr: 2,
            bgcolor: searchType1 === "property" ? "#6b46c1" : "#fff",
            "@media (max-width: 600px)": {
              mb: 1,
            },
          }}
        >
          Room
        </Button>
        <Button
          variant={searchType1 === "roommate" ? "contained" : "outlined"}
          color="secondary"
          onClick={() => searchType("roommate")}
          sx={{
            bgcolor: searchType1 === "roommate" ? "#6b46c1" : "#fff",
            "@media (max-width: 600px)": {
              mb: 1,
            },
          }}
        >
          Room mate
        </Button>
      </ButtonGroup>
      <SearchInputs />
    </Box>
  );
};

export default Search;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchIcon } from "@heroicons/react/solid";
import { SearchActions } from "../store/Search";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const searchTextHandle = (e) => {
    dispatch(SearchActions.searchText(e.target.value));
  };
  const searchPropertyTypeHandle = (e) => {
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
        `http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/${searchType}-ad/available`,
        obj
      );
      dispatch(SearchActions.availableRooms(data));
      navigate("/sp");
    } else {
      console.log("obj is empty");
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center">
        <input
          className="border-2 border-grey-300 mr-2 mb-2 md:mb-0 md:w-[50%]"
          type="text"
          placeholder="Search by city"
          onChange={searchTextHandle}
        />
        <select
          name="property"
          className="border-2 border-grey-300 mr-2 mb-2 md:mb-0"
          onChange={(e) => searchPropertyTypeHandle(e)}
        >
          {searchType === "property" ? (
            <>
              <option value="">Property Type</option>
              <option value="Bed">Bed</option>
              <option value="Partition">Partition</option>
              <option value="Room">Room</option>
              <option value="Master Room">Master room</option>
              <option value="Mix">Mix</option>{" "}
            </>
          ) : (
            <>
              <option value="">Property Type</option>
              <option value="Studio">Studio</option>
              <option value="Appartment">Appartment</option>
              <option value="House">House</option>
            </>
          )}
        </select>
        <select
          name="bedsBaths"
          className="border-2 border-grey-300 mr-2 mb-2 md:mb-0"
          onChange={(e) => searchLocationHandle(e)}
        >
          <option value="">location</option>
          <option value="Dubai">Dubai</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
        </select>
        <select
          name="price"
          className="border-2 border-grey-300 mb-2 md:mb-0"
          onChange={(e) => searchPriceHandle(e)}
        >
          <option value="">Price</option>
          <option value="1 to 5">1 to 5</option>
          <option value="5 to 10">5 to 10</option>
          <option vlaue="10 to 15">10 to 15</option>
          <option value="15 to 20">15 to 20</option>
          <option value="+20">+20</option>
        </select>
        <button
          className="p-2 border-slate-400 border-2 ml-2 bg-purple-700 rounded-md"
          onClick={handleSearch}
        >
          <SearchIcon className="w-3 h-3 text-white" />
        </button>
      </div>
      <div className="mt-2 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center">
          <input
            id="commercial"
            type="checkbox"
            className="mr-1"
            onChange={commercialPropertyHandle}
          />
          <label htmlFor="commercial">Show commercial properties only</label>
        </div>
        <p className="mt-2 md:mt-0">Advanced search</p>
      </div>
    </div>
  );
};

export default SearchInputs;

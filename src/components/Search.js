import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { SearchActions } from "../store/Search";
import axios from "axios";

const Search = () => {
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.search.searchType);
  const searchText = useSelector((state) => state.search.searchText);
  const propertyType = useSelector((state) => state.search.propertyType);
  const baths_beds = useSelector((state) => state.search.baths_beds);
  const price = useSelector((state) => state.search.price);
  const commercialProperty = useSelector(
    (state) => state.search.commercialProperty
  );

  const handleSearch = async () => {
    const obj = {};
    if (searchText) {
      obj.countryCode = searchText;
    }
    if (propertyType) {
      obj.type = propertyType;
    }
    if (baths_beds) {
      obj.baths_beds = baths_beds;
    }
    if (price) {
      obj.price = price;
    }
    if (commercialProperty) {
      obj.commercialProperty = commercialProperty;
    }

    if (Object.keys(obj).length > 0) {
      const { data } = await axios.post(
        "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad/available",
        obj
      );
      console.log(data);
    } else {
      console.log("obj is empty");
    }
  };

  const roomSearchHandle = () => {
    dispatch(SearchActions.roomSearch());
  };

  const roommateSearchHandle = () => {
    dispatch(SearchActions.roommateSearch());
  };

  const searchTextHandle = (e) => {
    dispatch(SearchActions.searchText(e.target.value));
  };
  const searchpropertyTypeHandle = (e) => {
    dispatch(SearchActions.propertyType(e.target.value));
  };
  const searchBathsBedsHandle = (e) => {
    dispatch(SearchActions.baths_beds(e.target.value));
  };
  const searchPriceHandle = (e) => {
    dispatch(SearchActions.price(e.target.value));
  };

  const commercialPropertyHandle = (e) => {
    dispatch(SearchActions.commercialProperty());
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md shadow-black shadow-opacity-50 md:mx-10 md:mt-10 md:w-[120%]">
      <div className="flex flex-col md:flex-col md:justify-between ">
        <div className="flex mb-4 md:mb-0">
          <p
            className={`mr-3 text-orange-500 text-bold px-5 cursor-pointer ${
              searchType === "room"
                ? "border-x-2 border-t-2 border-purple-500 rounded-md bg-purple-200 text-purple-600"
                : ""
            }`}
            onClick={roomSearchHandle}
          >
            Room
          </p>
          <p
            className={`mr-3 text-orange-500 text-bold px-3 cursor-pointer ${
              searchType === "roommate"
                ? "border-x-2 border-t-2 border-purple-500 rounded-md bg-purple-200 text-purple-600"
                : ""
            }`}
            onClick={roommateSearchHandle}
          >
            Room mate
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <input
            className="border-2 border-grey-300 mr-2 mb-2 md:mb-0 md:w-[50%]"
            type="text"
            placeholder="City, Area or Building"
            onChange={searchTextHandle}
          />
          <select
            name="property"
            className="border-2 border-grey-300 mr-2 mb-2 md:mb-0"
            onChange={(e) => searchpropertyTypeHandle(e)}
          >
            <option value="">Property Type</option>
            <option value="Bed">Bed</option>
            <option value="Partition">Partition</option>
            <option value="Room">Room</option>
            <option value="Master Room">Master room</option>
            <option value="Mix">Mix</option>
          </select>
          <select
            name="bedsBaths"
            className="border-2 border-grey-300 mr-2 mb-2 md:mb-0"
            onChange={(e) => searchBathsBedsHandle(e)}
          >
            <option value="">Beds & Baths</option>
            <option value="beds">Beds only</option>
            <option value="baths">Baths only</option>
            <option value="baths&beds">Beds & Baths</option>
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

export default Search;

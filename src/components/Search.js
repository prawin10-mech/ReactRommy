import React, { useState } from "react";

import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
  const [activeLink, setActiveLink] = useState("rooms");

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="bg-white h-32 m-10 w-[120%] p-5 rounded-lg shadow-lg shadow-black">
      <div className="flex mb-2">
        <p
          className={`mr-3 text-orange-500 text-bold px-5 ${
            activeLink === "rooms"
              ? "border-x-2 border-t-2 border-purple-500 rounded-md bg-purple-200 text-purple-600"
              : ""
          }`}
          onClick={() => handleActiveLink("rooms")}
        >
          Room
        </p>
        <p
          className={`mr-3 text-orange-500 text-bold px-3 ${
            activeLink === "roommate"
              ? "border-x-2 border-t-2 border-purple-500 rounded-md bg-purple-200 text-purple-600"
              : ""
          }`}
          onClick={() => handleActiveLink("roommate")}
        >
          Room mate
        </p>
      </div>
      <input
        className="border-2 border-grey-300 mr-2 w-[50%]"
        type="text"
        placeholder="City, Area or Building"
      />
      <select name="property" className="border-2 border-grey-300">
        <option>Property Type</option>
        <option>abc</option>
        <option>Property Type</option>
        <option>Property Type</option>
      </select>
      <select name="bedsBaths" className="border-2 border-grey-300">
        <option>Beds & Baths</option>
        <option>Beds & Baths</option>
        <option>Beds & Baths</option>
        <option>Beds & Baths</option>
      </select>
      <select name="price" className="border-2 border-grey-300">
        <option>Price</option>
        <option>Price</option>
        <option>Price</option>
        <option>Price</option>
        <option>Price</option>
      </select>
      <button className="p-1 border-slate-400 border-2 ml-2">
        <SearchIcon className="w-3 h-3 text-black" />
      </button>
      <div className="mt-2 flex justify-between">
        <div>
          <input id="commercial" type="checkbox" className="mr-1" />
          <label htmlFor="commercial">Show commercial properties only</label>
        </div>
        <p>Advanced search</p>
      </div>
    </div>
  );
};

export default Search;

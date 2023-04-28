import React from "react";
import AdvancedSearch from "./AdvancedSearch";
import AllAvailableRooms from "./AllAvailableRooms";
import SimmerUI from "./SimmerUi";
import { useSelector } from "react-redux";

const AllRooms = () => {
  const availableRooms = useSelector((state) => state.search.availableRooms);
  return (
    <div className="flex">
      <AdvancedSearch />
      {availableRooms && <AllAvailableRooms />}
      {!availableRooms && <SimmerUI />}
    </div>
  );
};

export default AllRooms;

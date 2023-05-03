import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const PostPropertyFormValidation = () => {
  const {
    type,
    quantity,
    rentPeriod,
    deposit,
    howMuchDeposit,
    posterType,
    firstName,
    lastName,
    email,
    city,
    location,
    buildingName,
    appartmentNumber,
    floorNumber,
    numberOfPeople,
    gender,
    nationality,
    smoking,
    drinking,
    visitors,
    cooking,
  } = useSelector((state) => state.property);

  if (
    !type ||
    !quantity ||
    !deposit ||
    !posterType ||
    !firstName ||
    !lastName ||
    !email ||
    !city ||
    !location ||
    !buildingName ||
    !appartmentNumber ||
    !floorNumber ||
    !numberOfPeople ||
    !gender ||
    !nationality ||
    !smoking ||
    !visitors ||
    !drinking ||
    !cooking
  ) {
    console.log("please enter all the required fields");
    return;
  }
  const obj = {
    type,
    quantity,
    deposit,
    posterType,
    firstName,
    lastName,
    email,
    city,
    location,
    buildingName,
    appartmentNumber,
    floorNumber,
    numberOfPeople,
    gender,
    nationality,
    smoking,
    drinking,
    visitors,
    cooking,
  };

  axios.post(
    "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/property-ad"
  );
  return <div></div>;
};

export default PostPropertyFormValidation;

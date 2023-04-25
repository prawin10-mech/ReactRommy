import React, { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { roomsTypeActions } from "../../store/Rooms";

const AvailableRooms = () => {
  const dispatch = useDispatch();
  const roomType = useSelector((state) => state.roomType.roomsType);
  const rooms = useSelector((state) => state.roomType.rooms);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const fetchAvailableRooms = async () => {
    const { data } = await axios.get(
      "http://roomy-finder-evennode.ap-1.evennode.com/api/v1/ads/recomended?countryCode=AE"
    );
    if (roomType === "propertyAds") {
      dispatch(roomsTypeActions.availableRooms(data.propertyAds));
    } else {
      dispatch(roomsTypeActions.availableRooms(data.roommateAds));
    }
  };

  useEffect(() => {
    fetchAvailableRooms();
  }, [roomType]);

  const roomsData = rooms.map((room) => {
    return <RoomCard room={room} key={room.id} />;
  });

  return <Slider {...settings}>{roomsData}</Slider>;
};

export default AvailableRooms;

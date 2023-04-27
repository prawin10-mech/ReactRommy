import React from "react";
import { useSelector } from "react-redux";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const AllAvailableRooms = () => {
  const availableRooms = useSelector((state) => state.search.availableRooms);
  console.log(availableRooms);

  const allAvailableRoomsData = availableRooms.map((room) => {
    return (
      <div className="flex flex-col sm:flex-row border border-gray-300 mb-3 p-2 border-b">
        <div className="sm:w-1/2">
          <img
            src={room.images[0]}
            alt="available rooms"
            className="w-full h-52 object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between w-full sm:w-1/2 p-2">
          <div>
            {!room.poster && <p>{room.type}</p>}
            {room.poster ? (
              <p>
                <span className="font-bold">
                  {room.poster.firstName} {room.poster.lastName}
                  {", "}
                  {room.aboutYou.age}
                </span>
              </p>
            ) : (
              <p>
                <span className="font-bold">AED {room.monthlyPrice * 12}</span>{" "}
                / year
              </p>
            )}
            {room.poster && (
              <p>
                <span className="font-bold">${room.budget} </span>/ month
              </p>
            )}
          </div>
          {/* <p>{room.description}</p> */}
          <div>
            <p className="flex items-center">
              <LocationMarkerIcon className="inline-block mr-2 h-5 w-5 text-black" />
              {room.address.appartmentNumber} {room.address.buildingName}{" "}
              {room.address.city} {room.address.location}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full sm:w-[48%] m-auto">
      {allAvailableRoomsData}
    </div>
  );
};

export default AllAvailableRooms;

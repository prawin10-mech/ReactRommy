import React from "react";

const arr = [1, 2, 3, 4, 5];

const SimmerUi = () => {
  const simmerData = arr.map((item) => {
    return (
      <div className="flex mb-2 border-gray-900 bg-white">
        <div className="w-full md:w-1/2 sm:w-1/4">
          <div className="bg-scale-300 w-full md:w-96 h-52 bg-gray-500 object-cover m-2 rounded-md animate-pulse"></div>
        </div>
        <div className="mx-2 p-2 flex flex-col justify-between w-full md:w-1/2">
          <div className="">
            <div className="bg-gray-500 rounded-md w-1/4 md:w-1/2 mb-1 animate-pulse">
              .
            </div>
            <div className="bg-gray-500 rounded-md w-3/4 md:w-1/2 mb-1 animate-pulse">
              .
            </div>
          </div>
          <div>
            <div className="">
              <div className="bg-gray-500 rounded-md w-1/4 md:w-1/2 mb-1 animate-pulse">
                .
              </div>
              <div className="bg-gray-500 rounded-md w-full md:w-2/3 mb-1 animate-pulse">
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full md:w-1/2 mx-auto">{simmerData}</div>
  );
};

export default SimmerUi;

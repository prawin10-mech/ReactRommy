import React, { useState, useEffect } from "react";
import { cities } from "../../helper";
import Dubai from "../../assets/Dubai.JPG";
import NewYork from "../../assets/New York.JPG";
import Riyadh from "../../assets/Riyadh.JPG";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

const CityCarousel = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [carouselCities, setCarouselCities] = useState([]);

  useEffect(() => {
    const updateCarouselCities = () => {
      const slicedCities = cities.slice(currentCityIndex, currentCityIndex + 3);
      const remainingCities = cities.slice(0, 3 - slicedCities.length);
      setCarouselCities([...slicedCities, ...remainingCities]);
    };

    updateCarouselCities();
  }, [currentCityIndex]);

  const handlePrevClick = () => {
    const newIndex =
      currentCityIndex === 0 ? cities.length - 1 : currentCityIndex - 1;
    setCurrentCityIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex =
      currentCityIndex === cities.length - 1 ? 0 : currentCityIndex + 1;
    setCurrentCityIndex(newIndex);
  };

  const carouselItems = carouselCities.map((city, index) => {
    const isActive = index === 1;
    const styles = isActive
      ? "min-h-[35vh] h-[35vh] rounded-2xl"
      : "my-auto h-[30vh] rounded-md";

    let image = null;
    let cityName = null;
    if (city === "Dubai") {
      image = (
        <NavLink to="/allAvailableRooms">
          <img
            src={Dubai}
            alt="Dubai"
            className={`h-full object-cover w-96  ${styles}`}
          />
        </NavLink>
      );
      cityName = "Dubai";
    } else if (city === "New York") {
      image = (
        <NavLink to="/allAvailableRooms">
          <img
            src={NewYork}
            alt="New York"
            className={`h-full object-cover w-96 ${styles}`}
          />
        </NavLink>
      );
      cityName = "New York";
    } else if (city === "Riyadh") {
      image = (
        <NavLink to="/allAvailableRooms">
          <img
            src={Riyadh}
            alt="Riyadh"
            className={`h-full object-cover w-96 ${styles}`}
          />
        </NavLink>
      );
      cityName = "Riyadh";
    }

    return (
      <div
        key={city}
        className={`flex items-center justify-center font-bold text-3xl ${styles} relative`}
      >
        {image}
        <div className="absolute bottom-4 left-0 right-0 text-white font-semibold text-center">
          {cityName}
        </div>
      </div>
    );
  });

  return (
    <div className="relative flex justify-center items-center mt-20">
      <button
        className=" left-0 top-1/2 transform -translate-y-1/2"
        onClick={handlePrevClick}
      >
        <ChevronLeftIcon
          className="h-8 w-8 text-slate-800 cursor-pointer"
          onClick={handlePrevClick}
        />
      </button>
      <div className="flex w-auto">{carouselItems}</div>
      <button
        className="right-0 top-1/2 transform -translate-y-1/2"
        onClick={handleNextClick}
      >
        <ChevronRightIcon
          className=" h-8 w-8 text-slate-800 cursor-pointer"
          onClick={handleNextClick}
        />
      </button>
    </div>
  );
};

export default CityCarousel;

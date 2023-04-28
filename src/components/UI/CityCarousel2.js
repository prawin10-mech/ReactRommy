import React, { useState, useEffect } from "react";
import { cities } from "../../helper";
import Dubai from "../../assets/Dubai.JPG";
import NewYork from "../../assets/New York.JPG";
import Riyadh from "../../assets/Riyadh.JPG";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const CityCarousel2 = () => {
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
    const styles = isActive ? "h-28 rounded-2xl" : "my-auto h-20 rounded-md";

    let image = null;
    let cityName = null;
    if (city === "Dubai") {
      image = (
        <img
          src={Dubai}
          alt="Dubai"
          className={`h-full object-cover w-96 ${styles}`}
        />
      );
      cityName = "Dubai";
    } else if (city === "New York") {
      image = (
        <img
          src={NewYork}
          alt="New York"
          className={`h-full object-cover w-96 ${styles}`}
        />
      );
      cityName = "New York";
    } else if (city === "Riyadh") {
      image = (
        <img
          src={Riyadh}
          alt="Riyadh"
          className={`h-full object-cover w-96 ${styles}`}
        />
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
    <div className="relative flex justify-center items-center ">
      <button
        className=" left-0 top-1/2 transform -translate-y-1/2"
        onClick={handlePrevClick}
      >
        <ChevronLeftIcon
          className="h-4 w-4 text-slate-800 cursor-pointer"
          onClick={handlePrevClick}
        />
      </button>
      <div className="flex w-auto">{carouselItems}</div>
      <button
        className="right-0 top-1/2 transform -translate-y-1/2"
        onClick={handleNextClick}
      >
        <ChevronRightIcon
          className=" h-4 w-4 text-slate-800 cursor-pointer"
          onClick={handleNextClick}
        />
      </button>
    </div>
  );
};

export default CityCarousel2;

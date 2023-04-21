import React, { useState, useEffect } from "react";
import { cities } from "../../helper";

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
    const styles = isActive ? "bg-yellow-400 h-96" : "bg-gray-200 h-72";
    return (
      <div
        key={city}
        className={`w-96 flex items-center justify-center font-bold text-3xl ${styles}`}
      >
        {city}
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center mt-20">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <div className="flex w-96">{carouselItems}</div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded ml-2"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default CityCarousel;

import React, { useState, useEffect } from "react";
import { cities } from "../../helper";
import Dubai from "../../assets/Dubai.JPG";
import NewYork from "../../assets/New York.JPG";
import Riyadh from "../../assets/Riyadh.JPG";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

const CityCarousel = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [carouselCities, setCarouselCities] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1);

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
    const isActive = index === activeIndex;
    const styles = isActive
      ? "min-h-[35vh] h-[40vh] rounded-2xl"
      : "my-auto max-h-[30vh] rounded-md";

    let image = null;
    let cityName = null;
    if (city === "Dubai") {
      image = (
        <NavLink to="/sp">
          <img
            src={Dubai}
            alt="Dubai"
            className={`h-56 object-cover w-96 ${styles}`}
          />
        </NavLink>
      );
      cityName = "Dubai";
    } else if (city === "New York") {
      image = (
        <NavLink to="/sp">
          <img
            src={NewYork}
            alt="New York"
            className={`h-56 object-cover w-96 ${styles}`}
          />
        </NavLink>
      );
      cityName = "New York";
    } else if (city === "Riyadh") {
      image = (
        <NavLink to="/sp">
          <img
            src={Riyadh}
            alt="Riyadh"
            className={`h-56 object-cover w-96 ${styles}`}
          />
        </NavLink>
      );
      cityName = "Riyadh";
    }

    return (
      <Box
        key={city}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "3xl",
          ...styles,
          position: "relative",
        }}
      >
        {image}
        <Box
          sx={{
            position: "absolute",
            bottom: "4",
            left: "0",
            right: "0",
            color: "white",
            fontWeight: "semibold",
            textAlign: "center",
          }}
        >
          {cityName}
        </Box>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "20",
      }}
    >
      <ChevronLeft
        className="h-8 w-8 text-slate-800 cursor-pointer"
        onClick={handlePrevClick}
      />
      <Box sx={{ display: "flex" }}>{carouselItems}</Box>
      <ChevronRight
        className="h-8 w-8 text-slate-800 cursor-pointer"
        onClick={handleNextClick}
      />
    </Box>
  );
};

export default CityCarousel;

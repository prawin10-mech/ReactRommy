import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import followUs from "../assets/Ads/followUs.jpg";
import peoples from "../assets/Ads/peoples.jpg";
import girls from "../assets/Ads/girls.jpg";

const Ads = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={4000}
      showThumbs={false}
      showStatus={false}
      selectedItem={currentIndex}
      onChange={(index) => setCurrentIndex(index)}
    >
      <div>
        <img src={followUs} alt="Follow Us" />
      </div>
      <div>
        <img src={peoples} alt="Peoples" />
      </div>
      <div>
        <img src={girls} alt="Girls" />
      </div>
    </Carousel>
  );
};

export default Ads;

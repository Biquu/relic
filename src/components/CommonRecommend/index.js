import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductTile from "../CommonListing/ProductTile";
import ProductButton from "../CommonListing/ProductButtons";

const ScrollableRecommendations = ({ recommendedProducts }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollPosition < recommendedProducts.length - 4) {
        setScrollPosition((prev) => prev + 1);
      } else {
        setScrollPosition(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollPosition, recommendedProducts.length]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white shadow-md p-6 sm:p-8 mt-4 sm:pt-8 mb-8">
      <Slider {...sliderSettings}>
        {recommendedProducts.map((recommendedProduct, index) => (
          <div key={index} className="w-32 mx-auto relative flex flex-col overflow-hidden border cursor-pointer">
            <ProductTile item={recommendedProduct} />
            <ProductButton item={recommendedProduct} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScrollableRecommendations;

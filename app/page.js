"use client";
import Image from "next/image";
import { data } from "../data";
import HomeCard from "./components/HomeCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#3c30a4" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#3c30a4" }}
      onClick={onClick}
    />
  );
}
export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl my-12 text-center">Hotels near you</h1>
      </div>
      <div className="w-3/4 mx-auto">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <HomeCard
                key={item.id}
                name={item.name}
                price={item.price}
                priceCurrency={item.priceCurrency}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}

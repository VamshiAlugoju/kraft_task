import React from "react";
import starimg from "../../public/images/star.png";
import ab from "../../public/images/star.png";
import Image from "next/image";

function HotelCard(props,ref) {
  let starsArr = [];
  for (let i = 0; i < props.ratings; i++) {
    let imgTag = (
      <Image
      key={i}
        src={ab}
        // width={200}
        // height={200}
        className="image h-4 w-4"
        alt="img"
      />
    );
    starsArr.push(imgTag);
  }

  

  return (
    <>
      <div ref={ref} className="container mx-auto HotelCard">
        <div className=" mx-auto mb-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={props.imageUrl}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold text-black">Price</span> {props.price}
              {props.priceCurrency}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
              <span className={"font-bold text-black"}>Ratings : </span>{" "} {starsArr}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.forwardRef( HotelCard);

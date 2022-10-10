import { useRouter } from "next/router";
import React from "react";
const TOP_CITIES = ["new york", "london", "paris", "tokyo", "madrid"];
const DefaultCities = ({ handleSearch }) => {
  const handleClick = (el) => {
    handleSearch(el);
  };

  return (
    <div className="absolute bottom-0 left-0 w-screen flex justify-between p-4 bg-slate-600 lg:relative lg:w-4/6 lg:bg-white lg:mt-12">
      {TOP_CITIES.map((el) => (
        <p
          key={el}
          className=" p-1 text-white rounded-md cursor-pointer text-sm lg:bg-slate-600 lg:p-4 lg:text-base"
          onClick={() => handleClick(el)}
        >
          {el}
        </p>
      ))}
    </div>
  );
};

export default DefaultCities;

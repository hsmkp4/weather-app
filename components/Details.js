import Image from "next/image";
import React from "react";

const Details = ({ weather }) => {
  // modify api data
  const modifyTemp = (temp) => {
    return (temp - 273.15).toFixed(1);
  };
  const hour = new Date().toTimeString().slice(0, 5);
  const day = new Date().toUTCString().slice(5, 16);

  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold">
              {modifyTemp(weather.main.temp)}&deg;C
            </p>
            <p className="text-2xl font-thin tracking-widest">{weather.name}</p>
            <p className="text-gray-500 text-sm">{hour}</p>
            <p className="text-gray-500 text-sm">{day}</p>
          </div>
          <div className="flex flex-col items-center justify-between ">
            <Image
              src={`/icons/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
              width={50}
              height={50}
            />
            <p className="text-gray-500 text-sm">
              {weather.weather[0].description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 card">
        <p className="text-gray-500 text-sm">
          Real feel: {modifyTemp(weather.main.feels_like)}&deg;C{" "}
        </p>
        <p className="text-gray-500 text-sm">
          Humidity: {weather.main.humidity}%{" "}
        </p>
        <p className="text-gray-500 text-sm">
          Wind speed: {weather.wind.speed} Km/h{" "}
        </p>
      </div>
    </div>
  );
};

export default Details;

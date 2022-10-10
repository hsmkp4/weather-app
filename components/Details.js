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
        <div>
          <p>{modifyTemp(weather.main.temp)}&deg;C</p>
          <div>
            <p>{weather.name}</p>
            <p>{hour}</p>
            <p>{day}</p>
          </div>
          <div>
            <Image
              src={`/icons/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
              width={50}
              height={50}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Real feel: {modifyTemp(weather.main.feels_like)}&deg;C </p>
        <p>Humidity: {weather.main.humidity}% </p>
        <p>Wind speed: {weather.wind.speed} Km/h </p>
      </div>
    </div>
  );
};

export default Details;

import axios from "axios";

const URL = "http://api.openweathermap.org/data/2.5";
const KEY = "19a67b87919bdded758ac2738b8372f2";

export const fetchWeatherByCity = async (city = "tehran") => {
  try {
    const { data } = await axios(`${URL}/weather?q=${city}&APPID=${KEY}`);
    return data;
  } catch (err) {
    return null;
  }
};

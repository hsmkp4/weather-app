import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../utils/fetchAPI";
import Search from "../components/Search";

export default function Home({ weather }) {
  const [city, setCity] = useState("tehran");
  const router = useRouter();

  console.log(weather);
  // make query params for each city
  useEffect(() => {
    router.push(`/?city=${city}`);
  }, [city]);

  const handleSearch = (newCity) => {
    setCity(newCity);
  };
  return (
    <div>
      <h1>Weather App</h1>
      <Search handleSearch={handleSearch} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  // fetch weather info in server side
  const weather = await fetchWeatherByCity(query["city"]);

  return {
    props: {
      weather,
    },
  };
}

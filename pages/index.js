import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../utils/fetchAPI";
import Search from "../components/Search";
import Details from "../components/Details";
import DefaultCities from "../components/DefaultCities";

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
  const handlePickCity = (ct) => {
    setCity(ct);
  };
  return (
    <>
      <div className="container mx-auto flex flex-col items-center h-screen gap-6">
        <h1 className="pt-8 text-2xl font-bold text-sky-700">Weather App</h1>
        <Search handleSearch={handleSearch} />
        <Details weather={weather} />
      </div>
      <DefaultCities handleSearch={handleSearch} />
    </>
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

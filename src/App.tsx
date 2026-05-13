import { useState } from "react";

import "./App.scss";

import Loader from "./components/Loader/Loader";

import useFetch from "./hooks/useFetch";

import WeatherForm from "./components/WeatherForm/WeatherForm";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Forecast from "./components/Forecast/Forecast";
import Footer from "./components/Footer/Footer";

import type { WeatherData } from "./types/WeatherData";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY as string;
if (!API_KEY) {
  throw new Error(
    "API key is missing. Please set VITE_OPENWEATHER_API_KEY in your .env file.",
  );
}

// console.log(
//   "API KEY present:",
//   Boolean(import.meta.env.VITE_OPENWEATHER_API_KEY),
// );

const App = () => {
  const [, setCity] = useState("");
  const { data, loading, makeApiCall, error } = useFetch();

  const handleSubmitCity = (city: string) => {
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    makeApiCall(URL_API);
  };

  return (
    <div className="weather-app">
      <WeatherForm
        setCity={setCity}
        onSubmitCity={handleSubmitCity}
        loading={loading}
      />

      {loading && <Loader />}

      {error || data !== null ? (
        <>
          <WeatherCard data={data as WeatherData} error={error} />
          {data && (
            <Forecast
              lat={(data as WeatherData).coord.lat}
              lon={(data as WeatherData).coord.lon}
            />
          )}
        </>
      ) : null}
      <Footer />
    </div>
  );
};

export default App;

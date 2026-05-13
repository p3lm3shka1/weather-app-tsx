import { useState } from "react";

import "./App.scss";

import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";

import Loader from "./components/Loader";

import useFetch from "./hooks/useFetch";

import type { WeatherData } from "./types/WeatherData";

const API_KEY = "45b978eac9758fd51194fcae8ba96a43";

const App = () => {
  const [, setCity] = useState("");
  const { data, loading, makeApiCall, error } = useFetch();

  const handleSubmitCity = (city: string) => {
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    makeApiCall(URL_API);
  };

  return (
    <div className="weather-app">
      <WeatherForm setCity={setCity} onSubmitCity={handleSubmitCity} />

      {loading && <Loader />}

      {error || data !== null ? (
        <WeatherCard data={data as WeatherData} error={error} />
      ) : null}
    </div>
  );
};

export default App;

import { useEffect } from "react";

import useFetch from "../../hooks/useFetch";

import type { ForecastData } from "../../types/ForecastData";

import "./Forecast.scss";

type ForecastProps = {
  lon: number;
  lat: number;
};

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY as string;
if (!API_KEY) {
  throw new Error(
    "API key is missing. Please set VITE_OPENWEATHER_API_KEY in your .env file.",
  );
}

function Forecast({ lat, lon }: ForecastProps) {
  const { data, makeApiCall } = useFetch(300);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`;
    makeApiCall(url);
  }, [lat, lon]);

  if (!data) return null;

  const forecast = data as ForecastData;

  const items = forecast.list
    .filter((x) => x.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  return (
    <div className="forecast">
      <div className="forecast__grid">
        {items.map((item) => {
          const w = item.weather?.[0];
          const iconUrl = w
            ? `https://openweathermap.org/img/wn/${w.icon}@2x.png`
            : "";

          const day = new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });

          return (
            <div className="forecast__card" key={item.dt}>
              <div className="forecast__day">{day}</div>
              {w && (
                <img
                  className="forecast__icon"
                  src={iconUrl}
                  alt={w.description}
                />
              )}
              <div className="forecast__t">{Math.round(item.main.temp)}°</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;

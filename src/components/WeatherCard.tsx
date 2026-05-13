import type { WeatherData } from "../types/WeatherData";

import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { MdErrorOutline } from "react-icons/md";

import "../App.scss";

type Props = { data: WeatherData; error?: string };

const WeatherCard = ({ data, error }: Props) => {
  if (error) {
    return (
      <div className="weather-card">
        <div className="weather-card__error">
          <MdErrorOutline />
          {error}
        </div>
      </div>
    );
  }
  const w = data.weather?.[0];

  const dateText = new Date(data.dt * 1000).toLocaleDateString("en-US", {
    timeZone: "Europe/Vilnius",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeText = new Date(data.dt * 1000).toLocaleTimeString("en-US", {
    timeZone: "Europe/Vilnius",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="weather-card">
      <div className="weather-card__city">{data.name}</div>

      <div className="weather-card__datetime">
        {dateText} • {timeText}
      </div>

      <div className="weather-card__temp">
        {Math.round(data.main.temp)}
        <span>°C</span>
      </div>

      <div className="weather-card__desc">{w?.description ?? ""}</div>

      <div className="weather-card__stats">
        <div>
          <div className="weather-card__statvalue">
            {data.wind.speed.toFixed(2)}
            <WiStrongWind />
          </div>
          <div className="weather-card__statlabel">Wind speed</div>
        </div>

        <div>
          <div className="weather-card__statvalue">
            {data.main.humidity}
            <WiHumidity />
          </div>
          <div className="weather-card__statlabel">Humidity</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

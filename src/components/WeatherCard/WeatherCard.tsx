import type { WeatherData } from "../../types/WeatherData";

import { WiHumidity, WiStrongWind } from "react-icons/wi";

import { MdErrorOutline } from "react-icons/md";

import "./WeatherCard.scss";

type Props = {
  data: WeatherData;
  error?: string;
};

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
  const iconUrl = w ? `https://openweathermap.org/img/wn/${w.icon}@2x.png` : "";
  const cityTime = (data.dt + data.timezone) * 1000;

  const dateText = new Date(cityTime).toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeText = new Date(cityTime).toLocaleTimeString("lt-LT", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="weather-card">
      <div className="weather-card__city">
        {data.name}, {data.sys.country}
      </div>

      <div className="weather-card__datetime">
        {dateText} • {timeText}
      </div>

      <div className="weather-card__temp">
        {w && (
          <img
            src={iconUrl}
            alt={w.description}
            className="weather-card__icon"
          />
        )}
        {Math.round(data.main.temp)}
        <span>°C</span>
      </div>

      <div className="weather-card__desc">{w?.description ?? ""}</div>

      <div className="weather-card__stats">
        <div className="weather-card__container">
          <WiStrongWind />
          <div>
            <div className="weather-card__statvalue">
              {data.wind.speed.toFixed(2)}&nbsp;<span> m/s</span>
            </div>
            <div className="weather-card__statlabel">Wind speed</div>
          </div>
        </div>

        <div className="weather-card__container">
          <WiHumidity />
          <div>
            <div className="weather-card__statvalue">
              {data.main.humidity}&nbsp;<span> %</span>
            </div>
            <div className="weather-card__statlabel">Humidity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

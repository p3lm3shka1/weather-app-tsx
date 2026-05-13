export type ForecastItem = {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: { speed: number };
  dt_txt: string;
};

export type ForecastData = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: {
    name: string;
    country: string;
    timezone: number;
    coord: { lat: number; lon: number };
  };
};

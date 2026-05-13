# Weather App (React + TypeScript + Vite)

A clean and responsive weather application built with **React**, **TypeScript**, and **Vite**.  
It fetches the **current weather** and a **5‑day forecast** from the **OpenWeather API**, displays a modern “glassmorphism” UI, and includes solid UX details like debounced requests, loading states, and error handling.

## Features

- **Search by city name**
- **Current weather card**
  - City + country
  - Date & time (**24‑hour format**)
  - Temperature, wind speed, humidity
  - Weather description and **OpenWeather icon**
- **5‑day forecast section**
  - Uses OpenWeather **`/forecast`** endpoint (3‑hour steps)
  - Renders **5 daily cards** by selecting one entry per day (e.g., `12:00:00`)
  - Icons + daily temperature
- **Debounced API calls** via a custom `useFetch` hook
- **Loading UX**
  - Loader while fetching
  - Submit button disabled during requests
- **Error handling**
  - "City not found" (404) and generic HTTP errors
  - Error is rendered inside the UI (no crashes)
- **Responsive layout** for desktop/tablet/mobile
- **SCSS tokens** (variables + mixins) for consistent styling

## Tech Stack

- React
- TypeScript
- Vite
- SCSS
- OpenWeather API

## API Endpoints Used

- Current weather by city name:
  - `GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric`

- 5‑day / 3‑hour forecast by coordinates:
  - `GET https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={key}&units=metric`

## Project Structure

```
src/
  components/
    WeatherForm.tsx
    WeatherCard.tsx
    Forecast.tsx
    Loader.tsx
    Footer.tsx
  hooks/
    useFetch.ts
  styles/
    _variables.scss
    _media.scss
  types/
    WeatherData.ts
    ForecastData.ts
  App.tsx
  App.scss
  main.tsx
```

---

### Author

GitHub: https://github.com/p3lm3shka1

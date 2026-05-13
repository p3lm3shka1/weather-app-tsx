import { useRef } from "react";

import "./WeatherForm.scss";

type WeatherProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  onSubmitCity: (city: string) => void;
  loading: boolean;
};

const WeatherForm = ({ setCity, onSubmitCity, loading }: WeatherProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const value = inputRef.current?.value?.trim() ?? "";
    if (!value) return;

    console.log("submit city:", value);
    setCity(value);
    onSubmitCity(value);

    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <form className="weather" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        className="weather__input"
        ref={inputRef}
        disabled={loading}
      />

      <button type="submit" className="weather__button" disabled={loading}>
        {loading ? "Loading..." : "Get Weather"}
      </button>
    </form>
  );
};

export default WeatherForm;

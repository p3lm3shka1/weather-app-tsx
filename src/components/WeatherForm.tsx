import { useRef } from "react";

type WeatherProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  onSubmitCity: (city: string) => void;
};

const WeatherForm = ({ setCity, onSubmitCity }: WeatherProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      />
      <button type="submit" className="weather__button">
        Get Weather
      </button>
    </form>
  );
};

export default WeatherForm;

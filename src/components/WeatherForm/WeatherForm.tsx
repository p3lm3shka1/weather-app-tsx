import { useRef, useState } from "react";
import "./WeatherForm.scss";

type WeatherProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  onSubmitCity: (city: string) => void;
  loading: boolean;
};

const WeatherForm = ({ setCity, onSubmitCity, loading }: WeatherProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [hasError, setHasError] = useState(false);
  const [shakeId, setShakeId] = useState(0);

  const triggerError = () => {
    setHasError(true);
    setShakeId((x) => x + 1);

    window.setTimeout(() => setHasError(false), 700);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const value = inputRef.current?.value?.trim() ?? "";
    if (!value) {
      triggerError();
      inputRef.current?.focus();
      return;
    }

    setCity(value);
    onSubmitCity(value);

    if (inputRef.current) inputRef.current.value = "";
    setHasError(false);
  };

  const handleChange = () => {
    if (hasError) setHasError(false);
  };

  return (
    <form className="weather" onSubmit={handleSubmit}>
      <div
        key={shakeId}
        className={`weather__field ${hasError ? "weather__field--error weather__field--shake" : ""}`}
      >
        <input
          ref={inputRef}
          className="weather__input"
          type="text"
          placeholder="Enter city name"
          disabled={loading}
          onChange={handleChange}
          aria-invalid={hasError}
        />
      </div>

      <button type="submit" className="weather__button" disabled={loading}>
        {loading ? "Loading..." : "Get Weather"}
      </button>
    </form>
  );
};

export default WeatherForm;

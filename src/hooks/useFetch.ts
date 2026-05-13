import { useRef, useState } from "react";

const useFetch = (timeout = 2000) => {
  const [data, setData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const timerRef = useRef<number | null>(null);

  const makeApiCall = (url: string) => {
    setLoading(true);
    setError("");

    if (timerRef.current) window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          if (res.status === 404) throw new Error("City not found");
          throw new Error(`HTTP ${res.status}`);
        }

        const json = await res.json();
        setData(json);
      } catch (e: any) {
        setData(null);
        setError(e?.message ?? "Request error");
      } finally {
        setLoading(false);
      }
    }, timeout);
  };

  return { data, loading, error, makeApiCall };
};

export default useFetch;

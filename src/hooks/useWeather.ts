import { useState, useEffect } from "react";
import axios from "axios";

export const useWeather = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiKey = "8611baa95180437492f54121230505";
        const timeout = setTimeout(() => controller.abort(), 5000);

        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=30.116354761705797, 78.1664741693149&days=1&aqi=no&alerts=no`,
          { signal: controller.signal }
        );

        clearTimeout(timeout);

        if (isMounted) {
          setTemp(response?.data?.current?.temp_c);
        }
      } catch (err) {
        if (isMounted) {
          if (axios.isCancel(err)) {
            setError("Request timeout");
          } else {
            setError("Failed to fetch weather data");
            console.error("Failed to fetch weather data:", err);
          }
          setTemp(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchWeather();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { temp, loading, error };
};

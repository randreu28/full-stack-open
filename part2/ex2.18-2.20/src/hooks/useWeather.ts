import { useEffect, useState } from "react";
import { WeatherType } from "../types";
import axios from "axios";

export type Position = {
  lat: number;
  long: number;
};

export default function useWeather({ long, lat }: Position) {
  const [weather, setWeather] = useState<WeatherType>();
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const API = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<WeatherType>(API)
      .then(({ data }) => setWeather(data))
      .catch((error) => {
        setError("Error while getting the weeather. Check the console");
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [API]);

  return { weather, error, isLoading };
}

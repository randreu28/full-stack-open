import { useEffect, useState } from "react";
import type { Country } from "../types";
import axios from "axios";

export default function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<Country[]>("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(({ data }) => setCountries(data))
      .catch((error) => {
        setError("Error while getting countries. Check the console");
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { countries, error, isLoading };
}

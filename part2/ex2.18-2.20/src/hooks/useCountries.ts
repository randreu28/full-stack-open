import { useEffect, useState } from "react";
import type { CountryType } from "../types";
import axios from "axios";

export default function useCountries() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<CountryType[]>(
        "https://studies.cs.helsinki.fi/restcountries/api/all"
      )
      .then(({ data }) => setCountries(data))
      .catch((error) => {
        setError("Error while getting countries. Check the console");
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { countries, error, isLoading };
}

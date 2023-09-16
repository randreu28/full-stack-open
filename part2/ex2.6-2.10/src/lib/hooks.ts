/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import type { Person } from "../App";

export function usePersons() {
  const [initialPersons, setPersons] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    axios
      .get<Person[]>("http://localhost:3001/persons")
      .then(({ data }) => setPersons(data))
      .catch((error) => {
        setError("Error while fetching. Check the console");
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { initialPersons, isLoading, error };
}

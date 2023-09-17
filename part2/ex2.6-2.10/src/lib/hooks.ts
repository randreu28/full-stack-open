import axios from "axios";
import { useEffect, useState } from "react";
import type { Person } from "../App";

export function usePersons() {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const getPeople = () => {
    setIsLoading(true);
    axios
      .get<Person[]>("http://localhost:3001/persons")
      .then(({ data }) => setPeople(data))
      .catch((error) => {
        setError("Error getting data. Check the console");
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  const addPerson = (person: Person) => {
    setIsLoading(true);
    axios
      .post<Person>("http://localhost:3001/persons", person)
      .then(({ data }) => setPeople([...people, data]))
      .catch((e) => {
        setError("Error posting data. Check the console");
        console.error(e);
      })
      .finally(() => setIsLoading(false));
  };

  const deletePerson = (id: number) => {
    setIsLoading(true);
    axios
      .delete("http://localhost:3001/persons/" + id)
      .then(() => setPeople(people.filter((person) => person.id !== id)))
      .catch((e) => {
        setError("Error posting data. Check the console");
        console.error(e);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getPeople();
  }, []);

  return {
    people,
    isLoading,
    error,
    personService: { getPersons: getPeople, addPerson, deletePerson },
  };
}

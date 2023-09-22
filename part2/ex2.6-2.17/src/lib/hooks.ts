import axios from "axios";
import { useEffect, useState } from "react";
import type { Person } from "../App";

const endpoint = "http://localhost:3001/api/persons/";

export function usePersons() {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [feedback, setFeedback] = useState<string | undefined>(undefined);

  const getPeople = () => {
    setIsLoading(true);
    axios
      .get<Person[]>(endpoint)
      .then(({ data }) => setPeople(data))
      .catch((error) => {
        setError("Error getting data. Check the console");
        console.error(error);
        setTimeout(() => {
          setError(undefined);
        }, 5000);
      })
      .finally(() => setIsLoading(false));
  };

  const addPerson = (person: Person) => {
    setIsLoading(true);

    const alreadyRegisteredPeople = people.filter(
      (registeredPerson) => registeredPerson.name === person.name
    );

    const isAlreadyRegistered = alreadyRegisteredPeople.length > 0;

    if (!isAlreadyRegistered) {
      axios
        .post<Person>(endpoint, person)
        .then(({ data }) => setPeople([...people, data]))
        .catch((e) => {
          setError("Error posting data. Check the console");
          console.error(e);
          setTimeout(() => {
            setError(undefined);
          }, 5000);
        })
        .finally(() => {
          setFeedback("Person posted succesfully");
          setTimeout(() => {
            setFeedback(undefined);
          }, 5000);
        });
    } else if (
      confirm(
        `${person.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      axios
        .put<Person>(endpoint + alreadyRegisteredPeople[0].id, person)
        .then(({ data: newPerson }) => {
          const updatedPeople = people.map((p) =>
            p.id === newPerson.id ? newPerson : p
          );
          setPeople(updatedPeople);
        })
        .catch((e) => {
          setError("Error posting data. Check the console");
          console.error(e);
          setTimeout(() => {
            setError(undefined);
          }, 5000);
        })
        .finally(() => {
          setFeedback("Person updated succesfully");
          setTimeout(() => {
            setFeedback(undefined);
          }, 5000);
        });
    }
    setIsLoading(false);
  };

  const deletePerson = (id: number) => {
    setIsLoading(true);
    axios
      .delete(endpoint + id)
      .then(() => {
        setPeople(people.filter((person) => person.id !== id));
        setFeedback("Person deleted succesfully");
        setTimeout(() => {
          setFeedback(undefined);
        }, 5000);
      })
      .catch((e) => {
        setError("Error posting data. Check the console");
        console.error(e);
        setTimeout(() => {
          setError(undefined);
        }, 5000);
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
    feedback,
    personService: { getPersons: getPeople, addPerson, deletePerson },
  };
}

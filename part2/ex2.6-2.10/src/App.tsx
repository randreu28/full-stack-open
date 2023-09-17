import { useState } from "react";
import AddPersonForm from "./components/AddPersonForm";
import PeopleList from "./components/PeopleList";
import SearchFilter from "./components/SearchFilter";
import { usePersons } from "./lib/hooks";

export type Person = {
  name: string;
  number: string;
  id?: number;
};

const App = () => {
  const { people, isLoading, error, personService, feedback } = usePersons();
  const [newName, setNewName] = useState<string>("");
  const [newPhone, setNewPhone] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("");

  if (isLoading) {
    return <h1>loading</h1>;
  }

  function addPerson(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newName && newPhone) {
      personService.addPerson({ name: newName, number: newPhone });
      setNewName("");
      setNewPhone("");
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPhone(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
  };

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {feedback && <p style={{ color: "green" }}>{feedback}</p>}

      <SearchFilter
        searchTerm={filterName}
        handleSearchChange={handleSearchChange}
      />
      <AddPersonForm
        newPerson={{ name: newName, number: newPhone }}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={addPerson}
      />
      <PeopleList
        people={filteredPeople}
        handleDelete={personService.deletePerson}
      />
    </div>
  );
};

export default App;

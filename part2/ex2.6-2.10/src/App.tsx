import { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import PeopleList from "./components/PeopleList";
import AddPersonForm from "./components/AddPersonForm";

type Person = {
  name: string;
  number: string;
};

const App = () => {
  const [persons, setPersons] = useState<Person[]>([
    { name: "John Doe", number: "+1 234 567 890" },
    { name: "Jane Doe", number: "+1 987 654 321" },
    { name: "Foo Bar", number: "+1 123 456 789" },
    { name: "Baz Quux", number: "+1 987 654 321" },
  ]);
  const [newName, setNewName] = useState<string>("");
  const [newPhone, setNewPhone] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("");

  function addPerson(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPersons([...persons, { name: newName, number: newPhone }]);
    setNewName("");
    setNewPhone("");
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

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
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
      <PeopleList people={filteredPersons} />
    </div>
  );
};

export default App;

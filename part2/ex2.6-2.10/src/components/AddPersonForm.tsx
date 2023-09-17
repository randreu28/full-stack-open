import { Person } from "../App";

type Props = {
  newPerson: Person;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function AddPersonForm({
  newPerson,
  handleNameChange,
  handleNumberChange,
  handleSubmit,
}: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newPerson.name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input
        type="text"
        value={newPerson.number}
        onChange={handleNumberChange}
        placeholder="Number"
      />
      <button type="submit">Add</button>
    </form>
  );
}

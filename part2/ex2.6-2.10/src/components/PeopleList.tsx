import { Person } from "../App";

type Props = {
  people: Person[];
  handleDelete: (id: number) => void;
};

export default function PeopleList({ people, handleDelete }: Props) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.name}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() => handleDelete(person.id!)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

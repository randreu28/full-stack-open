type Props = {
  people: { name: string; number: string }[];
};

export default function PeopleList({ people }: Props) {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
}

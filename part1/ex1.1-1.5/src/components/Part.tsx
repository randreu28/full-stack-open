type Props = { name: string; exercises: number };

export default function Part({ name, exercises }: Props) {
  return (
    <p>
      {name} {exercises}
    </p>
  );
}

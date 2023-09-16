import Part from "./Part";

type Props = {
  parts: { name: string; exercises: number }[];
};

export default function Content({ parts }: Props) {
  return (
    <div>
      {parts.map((part, key) => (
        <Part key={key} {...part} />
      ))}
    </div>
  );
}

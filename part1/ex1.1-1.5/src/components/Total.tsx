type Props = {
  exercises: number[];
};

export default function Total({ exercises: numbers }: Props) {
  return <p>Number of exercises {numbers.reduce((a, b) => a + b)}</p>;
}

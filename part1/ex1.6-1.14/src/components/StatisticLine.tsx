type Props = {
  text: string;
  value: number;
};

export default function StatisticLine({ text, value }: Props) {
  return (
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  );
}

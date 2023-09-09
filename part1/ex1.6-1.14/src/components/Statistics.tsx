import StatisticLine from "./StatisticLine";

type Props = {
  good: number;
  neutral: number;
  bad: number;
};

export default function Statistics({ good, neutral, bad }: Props) {
  const all = good + neutral + bad;
  const average = all / 3;
  const positive = (good * 100) / all;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
}
